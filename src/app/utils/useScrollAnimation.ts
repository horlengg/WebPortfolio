

export function useScrollAnimation() {
    // IntersectionObserver requires a callback
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Example: add a class when element is visible
          entry.target.classList.add("is_activated");
          // Stop observing if you only want animation once
          observer.unobserve(entry.target);
        }
      });
    },{
        rootMargin: "0px 0px -100px 0px"
    });
  
    const init = (elements: HTMLElement[]) => {
      elements.forEach((el) => observer.observe(el));
    };
    const dispose = () => {
        observer.disconnect();
    };
  
    return {
      init,
      dispose
    };
  }
  