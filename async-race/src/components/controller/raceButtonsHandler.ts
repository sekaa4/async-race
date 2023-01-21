import DataObject from '../../interfaces/DataObject';
import Constant from '../../models/Constant';
import { inputUpdateColor, inputUpdateText, updateButton } from '../elements/garage/createUpdateLine';
import controllerRaceSection from './ControllerRaceSection';
import ReturnObj from '../../interfaces/ReturnObj';
import changeTitlePage from '../../utils/changeTitlePage';
import globalState from '../../utils/globalState';

// eslint-disable-next-line import/no-cycle
import createCarOnRace from '../elements/garage/createCarOnRace';
import ConstantsDom from '../../models/Dom';
import Engine from '../../interfaces/Engine';

export default async function chooseButtonsHandler(e: MouseEvent, car: DataObject) {
  const { target, currentTarget } = e;
  const page: number = globalState.carsPage;
  try {
    if (target instanceof HTMLButtonElement && currentTarget instanceof HTMLElement) {
      const raceCarsList = <HTMLDivElement>currentTarget.parentElement;

      switch (target.innerText) {
        case Constant.SELECT: {
          const allSelectButtonsElements: NodeListOf<HTMLButtonElement> = raceCarsList.querySelectorAll(
            `.${ConstantsDom.CHOOSE_BUTTON_SELECT}`
          );
          allSelectButtonsElements.forEach((element) => {
            const button = element;
            if (button.disabled) button.disabled = false;
          });
          target.disabled = true;
          const carsOnPage: DataObject | null = await controllerRaceSection.selectHandler(car.id);
          if (carsOnPage) {
            inputUpdateColor.value = carsOnPage.color;
            inputUpdateText.value = carsOnPage.name;
            inputUpdateText.dataset.prevName = carsOnPage.name;
            inputUpdateText.disabled = false;
            inputUpdateColor.disabled = false;
            updateButton.disabled = false;
            globalState.inputUpdate.name = carsOnPage.name;
            globalState.inputUpdate.color = carsOnPage.color;
          }
          break;
        }
        case Constant.REMOVE: {
          const selectButton = <HTMLButtonElement>currentTarget.querySelector(`.${ConstantsDom.CHOOSE_BUTTON_SELECT}`);
          if (selectButton.disabled === true) {
            globalState.inputUpdate.name = '';
            globalState.inputUpdate.color = '';
            inputUpdateColor.value = '';
            inputUpdateText.value = '';
          }
          currentTarget.remove();

          if (car && page) {
            const carsOnPage: ReturnObj | null = await controllerRaceSection.removeHandler(car.id, page);

            if (carsOnPage && (carsOnPage.count || carsOnPage.count === 0)) {
              const { count, nextCar } = carsOnPage;
              changeTitlePage(count);

              if (nextCar) {
                const addCar = createCarOnRace(nextCar);
                raceCarsList.append(addCar);
              }
            }
          }

          break;
        }
        case Constant.START: {
          const svgCarElem: HTMLElement = <HTMLElement>document.getElementById(`${car.id}`);
          const buttonStop: HTMLButtonElement = <HTMLButtonElement>target.nextElementSibling;
          target.disabled = true;
          target.style.backgroundColor = Constant.ORANGE_COLOR;
          const statusObj: Engine | null = await controllerRaceSection.startStopHandler(car.id, Constant.STARTED);
          if (statusObj) {
            target.style.backgroundColor = '';
            buttonStop.disabled = false;
            await controllerRaceSection.switchEngineHandler(car.id, Constant.DRIVE, statusObj, svgCarElem);
            // await controllerRaceSection.startStopHandler(car.id, 'stopped');
          }
          break;
        }
        case Constant.STOP: {
          const svgCarElem: HTMLElement = <HTMLElement>document.getElementById(`${car.id}`);
          const buttonStart = <HTMLButtonElement>target.previousElementSibling;
          target.disabled = true;
          const statusObj = await controllerRaceSection.startStopHandler(car.id, Constant.STOPPED);
          if (statusObj) {
            const result = await controllerRaceSection.stopAnimationHandler(car.id, svgCarElem);
            if (result) buttonStart.disabled = false;
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
