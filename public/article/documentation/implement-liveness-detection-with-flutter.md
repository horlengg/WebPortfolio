<br>

# Implement Liveness Detection With Flutter

<br>

As digital services continue to replace in-person interactions, 
ensuring that a real, live human is behind every online transaction has never been more critical. 
This is where liveness detection comes in a technology designed to protect identity verification systems from spoofing and fraud.

<br>

![Liveness Detection Image](https://res.cloudinary.com/decme1qrv/image/upload/v1754634138/horleng/Liveness_Detection_d4vqrm.png)

<br>

In this blog, we explore how to implement Liveness Detection in a Flutter app using Google ML Kit’s Face Detection API. 
Liveness detection is a crucial technique in biometric authentication to ensure that the user is a real, live person—not a photo, video, or mask.

<br>

## Contents

1. [Introduction](#introduction)
2. [Google ML Kit Face Detection](#google-ml-kit-face-detection)
3. [Set up Google ML Kit Face Detection in a Flutter project](#set-up-google-ml-kit-face-detection-in-a-flutter-project)
4. [Implement basic active liveness checks](#implement-basic-active-liveness-checks)
5. [Conclusion](#conclusion)
6. [Full Source Code](#full-source-code)

<br>
<br>

## Introduction

Liveness detection is a biometric security mechanism used to confirm that the person interacting with a system is physically alive and present at the time of verification. In most cases, it’s applied to facial recognition technology, where a camera captures an image or video of a person’s face during onboarding or login processes. But instead of merely comparing the image to a stored template or ID photo, liveness detection takes it one step further—it determines whether that face belongs to a live human being rather than a fraudulent artifact.

<br>
<br>

## Google ML Kit Face Detection

ML Kit Face Detection is a tool for mobile developers that detects faces in images and videos, identifying facial features and contours, and providing information like face orientation and expressions. It's a feature of Google's ML Kit SDK that allows developers to easily integrate advanced face analysis into their apps for use in applications like augmented reality, selfies, and games.

<br>
<br>

## Set up Google ML Kit Face Detection in a Flutter project

<br>
<i>Create flutter project</i>

```base
flutter create impl_ liveness_detection
```

<br>

<i>Add necessary dependencies</i>

```yaml
dependencies:
  flutter:
    sdk: flutter
  camera: ^0.11.0+1
  permission_handler: ^11.3.1
  fluttertoast: ^8.2.5
  screen_brightness: ^2.1.5
  google_mlkit_face_detection: ^0.13.1
  google_mlkit_commons: ^0.11.0
```

<br>

<i>Additionally Config</i>
<br>

<b> IOS : </b>

<br>
<i>Podfile</i> 

```Podfile
platform :ios, '15.5'  # or newer version

# CocoaPods analytics sends network stats synchronously affecting flutter build latency.

$iOSVersion = '15.5'  # or newer version
```

<br>

<i>Permissions</i> 
<br>
<i>Info.plist</i> 

```plist
<!-- Photo Access -->
<key>NSPhotoLibraryUsageDescription</key>
<string>We need access to your photo library to select images.</string>
<!-- Camera Access -->
<key>NSCameraUsageDescription</key>
<string>Explanation on why the camera access is needed.</string>
<key>NSMicrophoneUsageDescription</key>
<string>Explanation on why the microphone access is needed.</string>
```

<br>
<b> Android : </b>

<i>app/build.gradle</i>

```gradle

defaultConfig {
    // TODO: Specify your own unique Application ID (https://developer.android.com/studio/build/application-id.html).
    applicationId "com.example.impl_ liveness_detection"
    // You can update the following values to match your application needs.
    // For more information, see: https://docs.flutter.dev/deployment/android#reviewing-the-gradle-build-configuration.
    // minSdkVersion 21
    // targetSdkVersion flutter.targetSdkVersion
    minSdkVersion 23
    targetSdkVersion 34
    versionCode flutterVersionCode.toInteger()
    versionName flutterVersionName
}
```

<br>

<i>Permissions</i> 
<br>
<i>AndroidManifest.xml</i> 

```xml
<!-- Photo & Media Access (Read external storage for older Android versions) -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

<!-- Camera Access -->
<uses-permission android:name="android.permission.CAMERA" />

<!-- Microphone Access -->
<uses-permission android:name="android.permission.RECORD_AUDIO" />

```


<br>
<br>

## Implement basic active liveness checks

An active liveness check requires explicit participation from the user. During the verification process, users are prompted to perform one or more actions in front of the camera, such as blinking, turning their head, smiling, following a moving dot with their eyes, or reading a set of numbers aloud. These interactions generate real-time facial movements and behavioral cues that are extremely difficult to replicate using static images or pre-recorded content.

<br>

<i> Challenge Verification </i>
- Smile
- Blink
- Look left
- Look right
- Look up
- Look down
- Open mouth

<br>

Here is implementation code...

<br>
<br>

<i>face_detection_helper.dart</i>

```dart
import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:google_mlkit_face_detection/google_mlkit_face_detection.dart';
import 'package:screen_brightness/screen_brightness.dart';

class LivenessReqItem {
  final String instruction;
  final bool Function(Face face) verify;
  LivenessReqItem(this.instruction, this.verify);
}

class FaceDetectionHelper {

  FaceDetectionHelper._internal();

  static final FaceDetectionHelper _instance = FaceDetectionHelper._internal();

  factory FaceDetectionHelper() {
    return _instance;
  }
  double? _lastLeftEyeOpen;
  double? _lastRightEyeOpen;

  List<LivenessReqItem> functionalitiesList = [];

  Map<String, dynamic> convertFaceToJson(Face face) {
    return {
      'boundingBox': {
        'left': face.boundingBox.left,
        'top': face.boundingBox.top,
        'right': face.boundingBox.right,
        'bottom': face.boundingBox.bottom,
        'width': face.boundingBox.width,
        'height': face.boundingBox.height,
      },
      'headEulerAngleX': face.headEulerAngleX,
      'headEulerAngleY': face.headEulerAngleY,
      'headEulerAngleZ': face.headEulerAngleZ,
      'smilingProbability': face.smilingProbability,
      'leftEyeOpenProbability': face.leftEyeOpenProbability,
      'rightEyeOpenProbability': face.rightEyeOpenProbability,
      'trackingId': face.trackingId,
      'landmarks': face.landmarks.map((type, landmark) => MapEntry(
        type.toString(),
        {
          'x': landmark?.position.x,
          'y': landmark?.position.y,
        },
      )),
      'contours': face.contours.map((type, contour) => MapEntry(
        type.toString(),
        contour?.points.map((point) => {
          'x': point.x,
          'y': point.y,
        }).toList(),
      )),
    };
  }

  void init(){
    functionalitiesList = [
      LivenessReqItem(
        "Please smile",
        (face) {
          const threshold = 0.7;
          final smileProb = face.smilingProbability;
          log("smilingProbability : $smileProb");
          return smileProb != null && smileProb >= threshold;
        },
      ),
      LivenessReqItem(
        "Please blink slowly",
        (face) {
          final leftCurrent = face.leftEyeOpenProbability ?? 0.0;
          final rightCurrent = face.rightEyeOpenProbability ?? 0.0;

          bool isBlink(double? previous, double current) {
            return previous != null && previous > 0.5 && current < 0.1;
          }

          final blinkDetected = isBlink(_lastLeftEyeOpen, leftCurrent) && isBlink(_lastRightEyeOpen, rightCurrent);

          // Update AFTER detection
          _lastLeftEyeOpen = leftCurrent;
          _lastRightEyeOpen = rightCurrent;

          log("Blink detected: $blinkDetected");
          return blinkDetected;
        }
      ),
      LivenessReqItem(
        "Please look left",
        (face) {
          final headEulerAngleY = face.headEulerAngleY ?? 0;
          log("headEulerAngleY :::: $headEulerAngleY");
          return headEulerAngleY > 10;
        },
      ),
      LivenessReqItem(
        "Please look right",
        (face) {
          final headEulerAngleY = face.headEulerAngleY ?? 0;
          log("headEulerAngleY :::: $headEulerAngleY");
          return headEulerAngleY < -10;
        },
      ),
      LivenessReqItem(
        "Please look down",
        (face) {
          final headEulerAngleX = face.headEulerAngleX ?? 0;
          log("headEulerAngleX :::: $headEulerAngleX");
          return headEulerAngleX < -10;
        },
      ),
      LivenessReqItem(
        "Please look up",
        (face) {
          final headEulerAngleX = face.headEulerAngleX ?? 0;
          log("headEulerAngleX :::: $headEulerAngleX");
          return headEulerAngleX > 10;
        },
      ),
      LivenessReqItem(
        "Please open your mouth",
        (face) {
          final upperLip = face.contours[FaceContourType.upperLipTop]?.points;
          final lowerLip = face.contours[FaceContourType.lowerLipBottom]?.points;
          if (upperLip != null && lowerLip != null && 
              upperLip.isNotEmpty && lowerLip.isNotEmpty) {
            final topCenter = upperLip[upperLip.length ~/ 2];
            final bottomCenter = lowerLip[lowerLip.length ~/ 2];
            final gap = (bottomCenter.y - topCenter.y).abs();
            log("Mouth open :::: $gap");
            return gap > 40;
          }
          return false;
        },
      ),
    ];
  }

  bool isFaceFullyVisibleInCircle({
    required Rect boundingBox,
    required Size cameraSize,
    required Size widgetSize,
    required double cameraRatio
  }) {

    final scaleX = widgetSize.width / cameraSize.width;
    final scaleY = widgetSize.height / cameraSize.height;

    final scaledBox = Rect.fromLTWH(
      boundingBox.left * scaleX,
      boundingBox.top * scaleY,
      boundingBox.width * scaleX,
      boundingBox.height * scaleY,
    );

    final fullyVisible =
        scaledBox.left >= 0 &&
        scaledBox.top >= 0 &&
        (scaledBox.right * cameraRatio) <= widgetSize.width &&
        (scaledBox.bottom / cameraRatio) <= widgetSize.height;
    return fullyVisible;
  }


  Future<double> getApplicationBrightness() async{
    try {
      return await ScreenBrightness.instance.application;
    } catch (e) {
      throw 'Failed to get application brightness';
    }
  }

  Future<void> setApplicationBrightness(double brightness) async {
  try {
    await ScreenBrightness.instance
        .setApplicationScreenBrightness(brightness);
  } catch (e) {
    debugPrint(e.toString());
    throw 'Failed to set application brightness';
  }
}
  

}

```

<br>
<br>

<i>stream_detection.dart</i>

```dart
import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:google_mlkit_face_detection/google_mlkit_face_detection.dart';
import 'package:impl_ liveness_detection/face_detection_helper.dart';
import 'package:impl_ liveness_detection/widgets/camera_view.dart';
import 'package:impl_ liveness_detection/widgets/common.dart';
import 'dart:async';
import 'dart:convert' as Convertor;

class StreamDetectionApp extends StatefulWidget {

  const StreamDetectionApp({Key? key}) : super(key: key);

  @override
  State<StreamDetectionApp> createState() => _StreamDetectionAppState();

}

class _StreamDetectionAppState extends State<StreamDetectionApp> {
  late FaceDetector _faceDetector;
  int _currentStep = 0;
  final _helper = FaceDetectionHelper();
  CustomPaint? _customPaint;
  bool _isDelay = false;
  int _objectId = 0;
  int _failedDetectCounter = 5;
  Size? _screenSize;
  final GlobalKey<CameraViewState> _cameraViewKey = GlobalKey();


  void _initDetectionModel({
    bool defaultInit = false
  }){
    _helper.functionalitiesList.shuffle();
    if(!defaultInit){
      _faceDetector.close();
    }
    
    _faceDetector = FaceDetector(
      options: FaceDetectorOptions(
        performanceMode: FaceDetectorMode.accurate,
        // enableLandmarks: true,
        enableContours: true,
        enableClassification: true,
        enableTracking: true,
        minFaceSize: 0.3
      ),
    );
  }

  @override
  void initState() {
    super.initState();
    _helper.init();
    _initDetectionModel(defaultInit: true);
  }

  void _showToast(String message){
    Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.TOP,
      timeInSecForIosWeb: 1,
      textColor: Colors.grey[200],
      fontSize: 14.0,
    );
  }

  /// function use for validate face
  bool _faceValidation(List<Face> faces){
    if(faces.isEmpty){
      throw Exception("Please keep your entire face on camera -_-");
    }
    if(faces.length > 1){
      throw Exception("Please stand alone, Make sure nobody behind you");
    }
    if(_cameraViewKey.currentState == null){
      throw Exception("_cameraViewKey.currentState is null -_- ");
    }

    final cameraViewSize = _cameraViewKey.currentState!.cameraViewSize;
    final cameraRatio = _cameraViewKey.currentState!.cameraRatio;
    final widgetSize = Size(_screenSize!.width * .9,_screenSize!.width * .9);
    bool isFaceFullyVisible = _helper.isFaceFullyVisibleInCircle(
      boundingBox : faces.first.boundingBox,
      cameraSize  : cameraViewSize,
      widgetSize  : widgetSize,
      cameraRatio : cameraRatio
    );
    if(!isFaceFullyVisible){
      throw Exception("Please keep your entire face on camera -_-");
    }
    // done ):
    return true;
  }

  /// function use for verify face
  _faceVerification({
    required Face face,
    required LivenessReqItem request,
    VoidCallback? done
  }){

    final isCompleted = request.verify(face);
    log("_objectId : ${face.trackingId}");

    if(!isCompleted){
      throw Exception(request.instruction);
    }

    // While face match the requirement

    // Check face whether it match to to prevouse face or not exclude first step
    final isMatchingFace = (_currentStep == 0 ? true : _objectId == face.trackingId);
    if(!isMatchingFace) {
      setState(() {
        _failedDetectCounter = 6; 
        _currentStep = 0;
        _initDetectionModel(); // release memory
      });
      throw Exception("Face look different, Please try again!.");
    }
    final isLastStep = _currentStep == _helper.functionalitiesList.length - 1;
    if(isLastStep){
      WidgetsBinding.instance.addPostFrameCallback((timeStamp) {
        Navigator.pushNamedAndRemoveUntil(context, '/done', (route) => false);
      });
    }
    else {
      log("${request.instruction} ===> done!.");
      _failedDetectCounter = 5;
      _currentStep++;
      _objectId = face.trackingId!;
      done?.call();
      setState(() {});
    }
  }

  /// main function detect face
  Future<void> _detectImage(InputImage inputImage) async {
    if(_isDelay) return; // for delay while action done!.
    log("_detectImage() start....");
    final request = _helper.functionalitiesList[_currentStep];
    log(request.instruction);
    bool isDone = false;
    _isDelay = true;
    try {
      final faces = await _faceDetector.processImage(inputImage);
      _faceValidation(faces);
      // log(
      //   Convertor.jsonEncode(_helper.convertFaceToJson(faces.first))
      // );
      _faceVerification(
        face : faces.first,
        request : request,
        done : () => isDone = true,
      );
      
    } catch (e) {

      final msg = e is Exception ? e.toString() : 'Unexpected error while detecting image';
      log("catch() : $msg");
      final isFaceOutOfCameraException = msg.contains("Please keep your entire face on camera");
      if(!isFaceOutOfCameraException){
        _failedDetectCounter--;
      }
      // show eror toast
      _showToast(msg);

    } finally {
      if(_failedDetectCounter == 0){
        _failedDetectCounter = 5;
        _showToast(request.instruction);
      }
      if(isDone){
        Timer(const Duration(seconds: 2), () {
          _isDelay = false;
        });
      }else  {
        _isDelay = false;
      }
    }
  }
  @override
  void dispose() {
    // _controller.dispose();
    _faceDetector.close();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    _screenSize = MediaQuery.of(context).size;
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            const SizedBox(height: 40),
            const Text(
              "Liveness Detection",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w600
              ),
            ),
            const SizedBox(height: 50),
            Center(
              child: SizedBox(
                width: _screenSize!.width * .9,
                height: _screenSize!.width * .9,
                child: CameraView(
                  key: _cameraViewKey,
                  onImage: _detectImage,
                  customPaint: _customPaint,
                ),
              ),
            ),
            const SizedBox(height: 50),
            ..._helper.functionalitiesList
              .asMap()
              .entries
              .map((entry) {
                return Row(
                  children: [
                    const SizedBox(width: 30),
                    _currentStep > entry.key ?
                    const Icon(Icons.check_circle,color: Colors.green,) : 
                    Icon(
                      Icons.circle,
                      color: entry.key == _currentStep ? Colors.yellow : Colors.grey
                    ),
                    const SizedBox(width: 10),
                    Text(
                      entry.value.instruction,
                      style: TextStyle(
                        color: _currentStep == entry.key
                            ? Colors.blue
                            : Colors.grey[700],
                        fontSize: 16.0
                      ),
                    ),
                  ],
                );
              }).toList(),
          ],
        ),
      ),
    );
  }

}


class PageDone extends StatefulWidget {
  const PageDone({super.key});

  @override
  State<PageDone> createState() => _PageDoneState();
}

class _PageDoneState extends State<PageDone> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: const Text("Done ✅",style: TextStyle(fontSize: 25))
      ),
    );
  }
}

```

<br>
<br>

<i>lib/widgets/camera_view.dart</i>

```dart
import 'dart:async';
import 'dart:developer';
import 'dart:io';

import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_mlkit_commons/google_mlkit_commons.dart';
import 'package:impl_ liveness_detection/face_detection_helper.dart';


class CameraView extends StatefulWidget {
  const CameraView({
        Key? key,
      required this.customPaint,
      required this.onImage,
      this.onCameraFeedReady,
      this.onDetectorViewModeChanged,
      this.onCameraLensDirectionChanged
    })
      : super(key: key);

  final CustomPaint? customPaint;
  final Function(InputImage inputImage) onImage;
  final VoidCallback? onCameraFeedReady;
  final VoidCallback? onDetectorViewModeChanged;
  final Function(CameraLensDirection direction)? onCameraLensDirectionChanged;

  @override
  State<CameraView> createState() => CameraViewState();
}

class CameraViewState extends State<CameraView> with SingleTickerProviderStateMixin {
  static List<CameraDescription> _cameras = [];
  CameraController? _controller;
  late AnimationController _animationController;
  bool _changingCameraLens = false;
  int _cameraIndex = 1;
  final _helper = FaceDetectionHelper();
  double? _defaultApplicationBrightness;
  Size cameraViewSize = const Size(0.0, 0.0);
  double cameraRatio = 1.0;
  final _orientations = {
    DeviceOrientation.portraitUp: 0,
    DeviceOrientation.landscapeLeft: 90,
    DeviceOrientation.portraitDown: 180,
    DeviceOrientation.landscapeRight: 270,
  };
  bool _isProcessingImage = false;

  @override
  void initState() {
    super.initState();
    _initialize();
    _animationController = AnimationController(
      duration: const Duration(seconds: 3),
      vsync: this,
    );
    _animationController.repeat();
  }

  void _initialize() async {
    if (_cameras.isEmpty) {
      _cameras = await availableCameras();
    }
    _startLiveFeed(_cameras[_cameraIndex]);
  }

  @override
  void dispose() {
    _animationController.dispose();
    _stopLiveFeed();
    super.dispose();
    resetApplicationBrightness();
  }


  @override
  Widget build(BuildContext context) {
    if (
      _cameras.isEmpty ||
      _controller == null ||
      _controller?.value.isInitialized == false
    ) return Container();
    if(_changingCameraLens) return const Text("Loading...");

    return LayoutBuilder(
      builder: (context, constraints) {
        final localWidth = constraints.maxWidth;
        final cameraWidth  = _controller!.value.previewSize?.width ?? 0;
        final cameraHeight  = _controller!.value.previewSize?.height ?? 0;
        cameraViewSize = Size(cameraWidth, cameraHeight);
        cameraRatio = _controller!.value.aspectRatio;
        return Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(500),
          ),
          padding: const EdgeInsets.all(7.0),
          clipBehavior: Clip.hardEdge,
          child: Stack(
            clipBehavior: Clip.none,
            children: [
              Positioned(
                left: (localWidth / 2) -( localWidth / 4),
                top: - localWidth * 0.2,
                child: RotationTransition(
                  turns: _animationController,
                  child: Container(
                    width: localWidth / 2,
                    height: localWidth * 1.4,
                    color: const Color.fromARGB(255, 197, 191, 228),
                  ),
                )
              ),
              SizedBox(
                width: localWidth,
                height: localWidth,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(500),
                  child: FittedBox(
                    fit: BoxFit.cover,
                    child: SizedBox(
                      width: cameraViewSize.height,
                      height: cameraViewSize.width,
                      child: CameraPreview(_controller!,child: widget.customPaint)
                    )
                  )
                ),
              ),
              
            ],
          ),
        );
      }
    );
  }

  Future switchLiveCamera() async {
    setState(() => _changingCameraLens = true);
    await _stopLiveFeed();
    _cameraIndex = _cameraIndex == 0 ? 1 : 0;
    await _startLiveFeed(_cameras[_cameraIndex]);
    setState(() => _changingCameraLens = false);
  }

  
  Future _startLiveFeed(CameraDescription camera) async {
    _controller = CameraController(
      camera,ResolutionPreset.medium,
      enableAudio: false,
      imageFormatGroup: Platform.isAndroid
          ? ImageFormatGroup.nv21 // for Android
          : ImageFormatGroup.bgra8888, // for iOS
    );
    _controller?.initialize().then((_) {
      if (!mounted) {
        return;
      }
      _controller?.startImageStream(_processCameraImage).then((value) {
        if (widget.onCameraFeedReady != null) {
          widget.onCameraFeedReady!();
        }
        if (widget.onCameraLensDirectionChanged != null) {
          widget.onCameraLensDirectionChanged!(camera.lensDirection);
        }
      });
      setState(() {});
      _checkApplicationBrightness();
    });
  }

  Future _stopLiveFeed() async {
    await _controller?.stopImageStream();
    await _controller?.dispose();
    _controller = null;
  }

  void _processCameraImage(CameraImage image) {
    if(_isProcessingImage) return;
    _isProcessingImage = true;
    if (_controller == null || !_controller!.value.isInitialized) {
      return;
    }
    final inputImage = _inputImageFromCameraImage(image);
    if (inputImage == null) return;
    if (!mounted) return;
    widget.onImage(inputImage);

    Timer(const Duration(seconds: 1), () {
      _isProcessingImage = false;
    });
  }

  void _checkApplicationBrightness() async{
    final brightness = await _helper.getApplicationBrightness();
    _defaultApplicationBrightness ??= brightness;
    log("brightness : $brightness");
    if(brightness < 0.6){
      _helper.setApplicationBrightness(0.6);
    }
  }
  void resetApplicationBrightness(){
    if(_defaultApplicationBrightness != null){
      _helper.setApplicationBrightness(_defaultApplicationBrightness!);
    }
  }

  Uint8List? _convertYUV420ToNV21(CameraImage image) {
    if (image.format.group != ImageFormatGroup.yuv420) return null;

    final int width = image.width;
    final int height = image.height;
    final int yRowStride = image.planes[0].bytesPerRow;
    final int uvRowStride = image.planes[1].bytesPerRow;
    final int uvPixelStride = image.planes[1].bytesPerPixel!;

    // Total size = Y + UV (VU)
    final nv21Image = Uint8List(width * height * 3 ~/ 2);

    // Copy Y plane
    int index = 0;
    for (int y = 0; y < height; y++) {
      nv21Image.setRange(
        index,
        index + width,
        image.planes[0].bytes.sublist(y * yRowStride, y * yRowStride + width),
      );
      index += width;
    }

    // Interleave V and U (VU format)
    for (int y = 0; y < height ~/ 2; y++) {
      for (int x = 0; x < width ~/ 2; x++) {
        final int uvIndex = y * uvRowStride + x * uvPixelStride;
        final u = image.planes[1].bytes[uvIndex];
        final v = image.planes[2].bytes[uvIndex];
        nv21Image[index++] = v;
        nv21Image[index++] = u;
      }
    }

    return nv21Image;
  }

  InputImage? _inputImageFromCameraImage(CameraImage image) {
    final camera = _cameras[_cameraIndex];
    final sensorOrientation = camera.sensorOrientation;

    // Determine rotation
    InputImageRotation? rotation;
    if (Platform.isIOS) {
      rotation = InputImageRotationValue.fromRawValue(sensorOrientation);
    } else if (Platform.isAndroid) {
      var rotationCompensation =
          _orientations[_controller!.value.deviceOrientation];
      if (rotationCompensation == null) return null;
      if (camera.lensDirection == CameraLensDirection.front) {
        rotationCompensation =
            (sensorOrientation + rotationCompensation) % 360;
      } else {
        rotationCompensation =
            (sensorOrientation - rotationCompensation + 360) % 360;
      }
      rotation = InputImageRotationValue.fromRawValue(rotationCompensation);
    }
    if (rotation == null) return null;

    if (Platform.isAndroid) {
      // Convert YUV_420_888 to NV21
      final nv21Bytes = _convertYUV420ToNV21(image);
      if (nv21Bytes == null) return null;

      return InputImage.fromBytes(
        bytes: nv21Bytes,
        metadata: InputImageMetadata(
          size: Size(image.width.toDouble(), image.height.toDouble()),
          rotation: rotation,
          format: InputImageFormat.nv21,
          bytesPerRow: image.planes[0].bytesPerRow,
        ),
      );
    }

    // iOS – use bgra8888
    final format = InputImageFormatValue.fromRawValue(image.format.raw);
    if (format != InputImageFormat.bgra8888 || image.planes.length != 1) {
      return null;
    }
    final plane = image.planes.first;

    return InputImage.fromBytes(
      bytes: plane.bytes,
      metadata: InputImageMetadata(
        size: Size(image.width.toDouble(), image.height.toDouble()),
        rotation: rotation,
        format: format!,
        bytesPerRow: plane.bytesPerRow,
      ),
    );
  }


}
```

<br>
<br>

<i>main.dart</i>

```dart
import 'package:flutter/material.dart';
import 'package:impl_ liveness_detection/stream_detection.dart';

void main() async {
  runApp(const DemoApp());
}


class DemoApp extends StatelessWidget {

  const DemoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      routes: {
        '/' :(context) => const StreamDetectionApp(),
        '/done' :(context) => const PageDone(),
      },
      initialRoute: '/',
    );
  }
}

```

<br>
<br>

## Conclusion

Implementing Liveness Detection using Flutter and Google ML Kit is not only possible but also efficient for many real-world mobile applications, especially those that require secure and user-friendly identity verification. By leveraging facial landmarks and creating custom logic for verifying actions like blinking or head movement, you can build a reliable layer of biometric security without relying on costly third-party services.

This tutorial demonstrated how to detect live human presence using the built-in face detection capabilities of ML Kit and Flutter’s real-time camera integration. With a bit of customization, you can expand this foundation to support more advanced or hybrid liveness strategies.

<br><br>

## 📦 Full Source Code

You can find the complete source code and example implementation on GitHub:  
[https://github.com/horlengg/implement_liveness_detection](https://github.com/horlengg/implement_liveness_detection)

<br><br>

<i>Thank you guys for reading this blog!</i>

<br><br><br><br><br>