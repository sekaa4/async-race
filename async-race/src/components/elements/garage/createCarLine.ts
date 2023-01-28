import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import globalState from '../../../utils/globalState';
import Constant from '../../../models/Constant';
import Attrs from '../../../models/Attrs';

export default function createCarLine() {
  const carLineDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_CREATE_LINE, ConstantsDom.CREATE_LINE],
  });

  const inputText: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    classes: [ConstantsDom.INPUT_TEXT, ConstantsDom.CREATE_LINE_INPUT, ConstantsDom.INPUT],
    attributes: [[`${Attrs.TYPE}`, `${Attrs.TEXT}`]],
  });

  const inputColor: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    classes: [ConstantsDom.INPUT_COLOR],
    attributes: [[`${Attrs.TYPE}`, `${Attrs.COLOR}`]],
  });

  const createButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.CREATE_LINE_BUTTON, ConstantsDom.BUTTON],
    text: `${Constant.CREATE}`,
  });

  inputText.addEventListener('input', () => {
    globalState.inputCreate.name = inputText.value;
  });
  inputColor.addEventListener('input', () => {
    globalState.inputCreate.color = inputColor.value;
  });

  carLineDiv.append(inputText, inputColor, createButton);

  return { carLineDiv, inputText, inputColor };
}
