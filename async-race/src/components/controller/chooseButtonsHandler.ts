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
      switch (target.innerText) {
        case Constant.SELECT: {
          inputUpdateColor.value = car.color;
          inputUpdateText.value = car.name;
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

// export async function selectButtonHandler(
//   e: MouseEvent,
//   inputTextElem: HTMLInputElement,
//   inputColorElem: HTMLInputElement
// ) {
//   const selectCar: null | DataObject = await controllerRaceSection.selectHandler(e, inputTextElem, inputColorElem);
//   // if (selectCar) {
//   //   const carElem: HTMLElement = <HTMLElement>document.getElementById(selectCar.id.toString());
//   //   carElem.setAttribute('fill', selectCar.color.toString());
//   // }
// }

// export async function removeButtonHandler(e: MouseEvent) {
//   // const selectCar: null | DataObject = await controllerRaceSection.removeHandler(e);
//   // if (selectCar) {
//   //   const carElem: HTMLElement = <HTMLElement>document.getElementById(selectCar.id.toString());
//   //   carElem.setAttribute('fill', selectCar.color.toString());
//   // }
// }
