export function useTextAnimation() {

  const init = () => {
    reset();
    const els = document.getElementsByClassName("text-typing");
    const style = document.createElement("style");
    style.classList.add("my__style");
    let t = "";
    const getRandomStr = () => {
      return "_" + Math.floor(Math.random() * 1000000);
    };
    Array.from(els).forEach((e) => {
      const randomID = getRandomStr();
      const animationIterationCount = e.getAttribute('data-typing-repeat') === null ? 'forwards' : 'infinite';
      const animationDelay = e.getAttribute('data-typing-delay') ?? '0'
      const animationDuration = e.getAttribute("data-typing-duration") ?? '3000'
      e.setAttribute("data-id", randomID);
      t += `  
            .text-typing[data-id=${randomID}]:before {  
                animation : __typing ${animationDuration}ms steps(${e.textContent?.length}) ${animationDelay}ms ${animationIterationCount};  
            }  
            `;
    });
    style.textContent += t;
    style.innerHTML = style.textContent!;
    document.head.appendChild(style);
  };

  const reset = ()=>{
    const style = document.querySelector("style[class='my__style']")
    if(style) {
      style.remove();
    }
  }

  return {
    init,
    reset
  };
}
