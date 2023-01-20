import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import globalState from '../../../utils/globalState';
// eslint-disable-next-line import/no-cycle
import createButtonHandler from '../../controller/handlersCarSectionListeners';
import Constant from '../../../models/Constant';

export default function createCarLine(page: number): HTMLDivElement {
  const carLineDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_CREATE_LINE, ConstantsDom.CREATE_LINE],
  });

  const inputText: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    classes: [ConstantsDom.INPUT_TEXT, ConstantsDom.CREATE_LINE_INPUT, ConstantsDom.INPUT],
    attributes: [['type', 'text']],
  });
  inputText.value = globalState.inputCreate.name;

  const inputColor: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    classes: [ConstantsDom.INPUT_COLOR],
    attributes: [['type', 'color']],
  });
  inputColor.value = globalState.inputCreate.color;

  const createButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.CREATE_LINE_BUTTON, ConstantsDom.BUTTON],
    text: `${Constant.CREATE}`,
  });

  createButton.addEventListener('click', (e: MouseEvent) => {
    createButtonHandler(e, inputText, inputColor, page);
  });
  inputText.addEventListener('input', () => {
    globalState.inputCreate.name = inputText.value;
  });
  inputColor.addEventListener('input', () => {
    globalState.inputCreate.color = inputColor.value;
  });

  carLineDiv.append(inputText, inputColor, createButton);

  return carLineDiv;
}
