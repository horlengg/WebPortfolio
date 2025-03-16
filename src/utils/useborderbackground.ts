export function useBorderBackground() {
  const init = (options = { row: 50, column: 50 }) => {
    const element = document.createElement("div");
    const style = element.style;
    style.position = "fixed";
    style.zIndex = "-1000";
    style.inset = "0";
    style.backgroundColor = 'var(--layout-color)'
    style.backgroundImage = `linear-gradient(var(--background-border-color) 1px, transparent 1px), 
                                     linear-gradient(90deg, var(--background-border-color) 1px, transparent 1px)`;
    style.backgroundSize = `${options.row}px ${options.column}px`;
    style.transition = "background-image 0.3s ease, background-size 0.3s ease,background-color 0.3s ease";
    document.body.appendChild(element);
  };

  return {
    init,
  };
}
