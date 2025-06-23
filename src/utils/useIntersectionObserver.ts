
export function useIntersectionObserver({
    container,
    targets,
    rootMargin,
    threshold,
    once,
}:{
    container : HTMLElement,
    targets : Array<HTMLElement>,
    rootMargin? : string ,
    threshold? : number,
    once?: boolean
}) {

    if(!container) throw new Error("Container element is required!.");
    
    function init(){
        const callback = (entries: IntersectionObserverEntry[], _: IntersectionObserver) => {
            entries.forEach(entry => {
                const element = entry.target as HTMLElement;
                const buildClassNamed = element.getAttribute("build-active-class") ?? "";
                if(once == true){
                    if(entry.isIntersecting){
                        element.classList.add(...buildClassNamed.split(" "));
                        observer.unobserve(element);
                    }
                }else {
                    const elementPossitionFromTop = (element.offsetTop + element.offsetHeight / 2) ;
                    const distanceFromTopToCenterOfContainer = container.scrollTop + (container.clientHeight /2);
                    if (entry.isIntersecting) {
                        element.classList.add(...buildClassNamed.split(" "));
                    }else if(elementPossitionFromTop > distanceFromTopToCenterOfContainer){
                        element.classList.remove(...buildClassNamed.split(" "));
                    }
                    
                }
                
            });
        };

        const observer = new IntersectionObserver(callback, {
            rootMargin: rootMargin ?? '0px',
            threshold: threshold ?? .5
        });

        targets.forEach(el => {
            observer.observe(el);
        });
        
    }

    return {
        init
    }
    
}