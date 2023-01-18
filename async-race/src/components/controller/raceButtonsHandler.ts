import DataObject from '../../interfaces/DataObject';
import Constant from '../../models/Constant';
import { inputUpdateColor, inputUpdateText } from '../elements/garage/createUpdateLine';
import controllerRaceSection from './ControllerRaceSection';
import ReturnObj from '../../interfaces/ReturnObj';
import changeTitlePage from '../../utils/changeTitlePage';

// eslint-disable-next-line import/no-cycle
import createCarOnRace from '../elements/garage/createCarOnRace';

export default async function chooseButtonsHandler(e: MouseEvent, car: DataObject, page: number) {
  const { target, currentTarget } = e;
  try {
    if (target instanceof HTMLButtonElement && currentTarget instanceof HTMLElement) {
      const raceCarsList = <HTMLDivElement>currentTarget.parentElement;
      const allSelectButtonsElements = raceCarsList.querySelectorAll('.choose-button__select');
      allSelectButtonsElements.forEach((element) =>
        element.classList.contains('car-active') ? element.classList.remove('car-active') : false
      );
      switch (target.innerText) {
        case Constant.SELECT: {
          target.classList.toggle('car-active');
          const carsOnPage: DataObject | null = await controllerRaceSection.selectHandler(car.id);
          if (carsOnPage && target.classList.contains('car-active')) {
            inputUpdateColor.value = carsOnPage.color;
            inputUpdateText.value = carsOnPage.name;
            inputUpdateText.dataset.prevName = carsOnPage.name;
          }

          break;
        }
        case Constant.REMOVE: {
          currentTarget.remove();
          const carsOnPage: ReturnObj | null = await controllerRaceSection.removeHandler(car.id, page);

          if (carsOnPage && (carsOnPage.count || carsOnPage.count === 0)) {
            const { count, nextCar } = carsOnPage;
            changeTitlePage(count);

            if (nextCar) {
              const addCar = createCarOnRace(nextCar, page);
              raceCarsList.append(addCar);
            }
          }
          break;
        }

        default:
      }
    }
    return null;
  } catch (err) {
    return null;
  }
}
