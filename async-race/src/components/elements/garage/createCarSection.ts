import CreateElementWrapper from '../CreateElementWrapper';
import createElement from '../createElement';
import ConstantsDom from '../../../models/Dom';
import createButtonLine from './createButtonLine';
import { createUpdateLine } from './createUpdateLine';
import createCarLine from './createCarLine';
import buttonLineHandler from '../../controller/handlersCarSectionListeners';
import InputObject from '../../../interfaces/InputObject';
import CarLine from '../../../interfaces/CarLine';
import UpdateLine from '../../../interfaces/UpdateLine';
import checkCarSectionButtons from '../../../utils/checkCarSectionButtons';

export default function createCarSection(page: number): HTMLElement {
  const carSection: HTMLElement = createElement(ConstantsDom.SECTION, HTMLElement, {
    classes: [ConstantsDom.SECTION, ConstantsDom.MAIN_SECTION],
  });

  const wrapperCreateCar: CreateElementWrapper = new CreateElementWrapper(ConstantsDom.DIV, {
    parentElement: carSection,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });

  const createCarDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: wrapperCreateCar.elem,
    classes: [ConstantsDom.CAR, ConstantsDom.MAIN_CAR],
  });

  const carLine: CarLine = createCarLine();
  const { carLineDiv, inputText, inputColor } = carLine;
  const updateLine: UpdateLine = createUpdateLine();
  const { carUpdateLineDiv, inputUpdateText, inputUpdateColor } = updateLine;
  const buttonLine: HTMLDivElement = createButtonLine();

  const inputObj: InputObject = { inputText, inputColor, inputUpdateText, inputUpdateColor };
  checkCarSectionButtons(inputObj);
  createCarDiv.addEventListener('click', (e: MouseEvent) => buttonLineHandler(e, inputObj, page));
  createCarDiv.append(carLineDiv, carUpdateLineDiv, buttonLine);

  return carSection;
}
