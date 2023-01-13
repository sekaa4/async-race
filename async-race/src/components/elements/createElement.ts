import ConstantsDom from '../../models/Dom';
import addToDOMStorage from './addToDOMStorage';
import CreateElementParams from '../../interfaces/CreateElementParams';
import Constant from '../../models/Constant';

export default function createElement<T extends typeof HTMLElement>(
  elemName: string,
  type: T,
  { parentElement, classes, text = '', attributes }: CreateElementParams = {}
): InstanceType<T> {
  if (elemName && typeof elemName === ConstantsDom.STRING) {
    const element: HTMLElement = document.createElement(elemName);
    if (classes && element instanceof HTMLElement) {
      element.classList.add(...classes);
      element.innerText = text;
    }
    if (attributes) {
      for (let i = 0; i < attributes.length; i += Constant.ONE) {
        element.setAttribute(...attributes[i]);
      }
    }
    if (parentElement && parentElement instanceof HTMLElement) parentElement.append(element);
    addToDOMStorage(element);
    return element as InstanceType<T>;
  }
  throw new Error('Error, please check the correctness of the entered data');
}
