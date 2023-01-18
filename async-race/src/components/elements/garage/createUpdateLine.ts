import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import DataObject from '../../../interfaces/DataObject';
import controllerCarSection from '../../controller/ControllerCarSection';

export const inputUpdateText: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
  classes: [ConstantsDom.INPUT_TEXT, ConstantsDom.UPDATE_LINE_INPUT, ConstantsDom.INPUT],
  attributes: [['type', 'text']],
});

export const inputUpdateColor: HTMLInputElement = createElement(ConstantsDom.INPUT, HTMLInputElement, {
  classes: [ConstantsDom.INPUT_COLOR],
  attributes: [['type', 'color']],
});

export function createUpdateLine(): HTMLDivElement {
  const carUpdateLineDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.CAR_UPDATE_LINE, ConstantsDom.UPDATE_LINE],
  });

  const updateButton: HTMLButtonElement = createElement(ConstantsDom.BUTTON, HTMLButtonElement, {
    classes: [ConstantsDom.BUTTON, ConstantsDom.UPDATE_LINE_BUTTON],
    text: 'UPDATE',
  });

  updateButton.addEventListener('click', async (e: MouseEvent) => {
    const oldName = inputUpdateText.dataset.prevName;
    const selectCar: null | DataObject = await controllerCarSection.updateHandler(
      e,
      inputUpdateText,
      inputUpdateColor,
      oldName
    );
    if (selectCar) {
      const carColorElem: HTMLElement = <HTMLElement>document.getElementById(selectCar.id.toString());
      const carNameElem: HTMLElement = <HTMLElement>document.querySelector(`[data-name='${oldName}']`);
      carColorElem.setAttribute('fill', selectCar.color.toString());
      carNameElem.innerText = selectCar.name;
      carNameElem.dataset.name = selectCar.name;
      inputUpdateText.dataset.prevName = selectCar.name;
    }
  });

  carUpdateLineDiv.append(inputUpdateText, inputUpdateColor, updateButton);

  return carUpdateLineDiv;
}
