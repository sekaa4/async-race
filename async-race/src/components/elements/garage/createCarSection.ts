import CreateElementWrapper from '../CreateElementWrapper';
import createElement from '../createElement';
import ConstantsDom from '../../../models/Dom';
import createCarLine from './createCarLine';
import createUpdateLine from './createUpdateLine';
import createButtonLine from './createButtonLine';

export default function createCarSection(): HTMLElement {
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

  const carLine: HTMLDivElement = createCarLine();
  const updateLine: HTMLDivElement = createUpdateLine();
  const buttonLine: HTMLDivElement = createButtonLine();

  createCarDiv.append(carLine, updateLine, buttonLine);

  return carSection;
}
