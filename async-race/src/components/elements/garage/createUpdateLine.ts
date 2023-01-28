import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import globalState from '../../../utils/globalState';
import Constant from '../../../models/Constant';
import Attrs from '../../../models/Attrs';

export const inputUpdateText: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
  classes: [ConstantsDom.INPUT_TEXT, ConstantsDom.UPDATE_LINE_INPUT, ConstantsDom.INPUT],
  attributes: [[`${Attrs.TYPE}`, `${Attrs.TEXT}`]],
});

export const inputUpdateColor: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
  classes: [ConstantsDom.INPUT_COLOR],
  attributes: [[`${Attrs.TYPE}`, `${Attrs.COLOR}`]],
});

export const updateButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
  classes: [ConstantsDom.BUTTON, ConstantsDom.UPDATE_LINE_BUTTON],
  text: `${Constant.UPDATE}`,
});

export function createUpdateLine() {
  const carUpdateLineDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_UPDATE_LINE, ConstantsDom.UPDATE_LINE],
  });

  inputUpdateText.addEventListener('input', () => {
    globalState.inputUpdate.name = inputUpdateText.value;
  });
  inputUpdateColor.addEventListener('input', () => {
    globalState.inputUpdate.color = inputUpdateColor.value;
  });

  carUpdateLineDiv.append(inputUpdateText, inputUpdateColor, updateButton);

  return { carUpdateLineDiv, inputUpdateText, inputUpdateColor };
}
