import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';

// eslint-disable-next-line import/no-cycle
import createButtonHandler from '../../controller/handlersCarSectionListeners';

export default function createCarLine(page: number): HTMLDivElement {
  const carLineDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_CREATE_LINE, ConstantsDom.CREATE_LINE],
  });

  const inputText: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    classes: [ConstantsDom.INPUT_TEXT, ConstantsDom.CREATE_LINE_INPUT, ConstantsDom.INPUT],
    attributes: [['type', 'text']],
  });

  const inputColor: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
    classes: [ConstantsDom.INPUT_COLOR],
    attributes: [['type', 'color']],
  });

  const createButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.CREATE_LINE_BUTTON, ConstantsDom.BUTTON],
    text: 'CREATE',
  });

  createButton.addEventListener('click', async (e: MouseEvent) => {
    await createButtonHandler(e, inputText, inputColor, page);
  });

  carLineDiv.append(inputText, inputColor, createButton);

  return carLineDiv;
}
