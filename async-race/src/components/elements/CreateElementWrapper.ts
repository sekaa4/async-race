import createElement from './createElement';
import CreateElementParams from '../../interfaces/CreateElementParams';
import ConstantsDom from '../../models/Dom';

export default class CreateElementWrapper {
  public readonly elem: HTMLDivElement;

  constructor(name: string, paramsObject?: CreateElementParams) {
    this.elem = createElement(name, HTMLDivElement, paramsObject);
  }

  removeElem(className: string[]) {
    if (this instanceof HTMLElement) {
      this.querySelector(`.${className.join('.')}`)?.remove();
    }
  }

  chooseElem<T extends typeof Element>(className: string | string[]) {
    if (this.elem instanceof HTMLElement) {
      if (className && typeof className === ConstantsDom.STRING) {
        const elem: Element | null = this.elem.querySelector(`.${className}`);
        if (elem) return elem as InstanceType<T>;
        throw new Error("Element doesn't exist in DOM");
      } else if (className && Array.isArray(className)) {
        const elem: Element | null = this.elem.querySelector(`.${className.join('.')}`);
        if (elem) return elem as InstanceType<T>;
        throw new Error("Element doesn't exist in DOM");
      } else throw new Error("className is wrong or doesn't exist");
    } else throw new Error("Element doesn't instanceof HTMLElement");
  }
}
