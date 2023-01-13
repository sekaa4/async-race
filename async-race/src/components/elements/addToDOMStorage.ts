const elementDomStorage = new Map<string, HTMLElement[]>();

export default function addToDOMStorage(element: HTMLElement): void {
  if (element && element.classList) {
    element.classList.forEach((cls) => {
      if (elementDomStorage.has(cls)) {
        elementDomStorage.get(cls)?.push(element);
      } else {
        elementDomStorage.set(cls, [element]);
      }
    });
  }
}
