import CreateElementWrapper from '../CreateElementWrapper';
import createElement from '../createElement';
import ConstantsDom from '../../../models/Dom';

export default function createRaceSection(): HTMLElement {
  const raceSection: HTMLElement = createElement(ConstantsDom.SECTION, HTMLElement, {
    classes: [ConstantsDom.SECTION, ConstantsDom.MAIN_SECTION],
  });

  const wrapperRaceCar: CreateElementWrapper = new CreateElementWrapper(ConstantsDom.DIV, {
    parentElement: raceSection,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.MAIN_WRAPPER],
  });

  const raceDiv: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    parentElement: wrapperRaceCar.elem,
    classes: [ConstantsDom.RACE, ConstantsDom.MAIN_RACE],
  });

  return raceDiv;
}
