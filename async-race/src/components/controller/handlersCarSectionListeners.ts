import DataObject from '../../interfaces/DataObject';
import RandomData from '../../interfaces/RandomData';
import Engine from '../../interfaces/Engine';
import InputObject from '../../interfaces/InputObject';
import ReturnObj from '../../interfaces/ReturnObj';
import Constant from '../../models/Constant';
import createCarOnRace from '../elements/garage/createCarOnRace';
import { raceListDiv } from '../elements/garage/createListCars';
import controllerCarSection from './ControllerCarsSection';
import controllerRaceSection from './ControllerRaceSection';
import changeTitlePage from '../../utils/changeTitlePage';
import globalState from '../../utils/globalState';
import ConstantsDom from '../../models/Dom';
import createWinModal from '../elements/garage/createWinModal';
import DataWinObjectName from '../../interfaces/DataWinObjectName';
import checkPageButtons from '../../utils/checkPageButtons';
import { wrapperCreateCar } from '../elements/createPageButtons';
import lockButtons from '../../utils/lockButton';

export default async function handlersCarSectionListeners(e: MouseEvent, inputObj: InputObject, page: number) {
  const { target, currentTarget } = e;
  const { inputText, inputColor, inputUpdateText, inputUpdateColor } = inputObj;

  const startButtonCollection: HTMLButtonElement[] = <HTMLButtonElement[]>(
    Array.from(raceListDiv.querySelectorAll(`.${ConstantsDom.BUTTON_ENGINE_A}`))
  );
  const stopButtonCollection: HTMLButtonElement[] = <HTMLButtonElement[]>(
    Array.from(raceListDiv.querySelectorAll(`.${ConstantsDom.BUTTON_ENGINE_B}`))
  );
  const svgCarsCollection: HTMLElement[] = Array.from(raceListDiv.querySelectorAll(`.${Constant.CAR_SVG}`));
  try {
    if (target instanceof HTMLButtonElement && currentTarget instanceof HTMLElement) {
      switch (target.innerText) {
        case Constant.CREATE: {
          const carObj: ReturnObj | null = await controllerCarSection.createHandler(e, inputText, inputColor);
          if (carObj && carObj.count) {
            const { count, newCar } = carObj;
            const length: number = raceListDiv.childElementCount;
            globalState.carsCount = count;

            if (length < Constant.SEVEN && newCar) {
              const carOnRace: HTMLDivElement = createCarOnRace(newCar);
              raceListDiv.append(carOnRace);
            }
            changeTitlePage(count, page);
            checkPageButtons(wrapperCreateCar.elem, Constant.SEVEN);
          }
          break;
        }
        case Constant.UPDATE: {
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
          break;
        }
        case Constant.RACE: {
          await lockButtons(true);
          globalState.engineCarsStatus.clear();
          const { view } = globalState;
          const buttonReset: HTMLButtonElement = <HTMLButtonElement>target.nextElementSibling;

          globalState.isRace = true;
          target.disabled = true;

          startButtonCollection.forEach((button) => {
            const curButton = button;
            curButton.disabled = true;
            curButton.style.backgroundColor = Constant.ORANGE_COLOR;
          });

          const promiseResult: (Engine | null)[] = await Promise.all(
            svgCarsCollection.map(async (elem) => {
              const id = Number(elem.id);
              const result = await controllerRaceSection.startStopHandler(id, Constant.STARTED);
              return result;
            })
          );
          startButtonCollection.forEach((button) => {
            const curButton = button;
            curButton.style.backgroundColor = '';
          });
          buttonReset.disabled = false;
          stopButtonCollection.forEach((button) => {
            const curButton = button;
            curButton.disabled = false;
          });
          globalState.isAllCarsReady = true;
          const promiseResultEngine: Engine | null = await Promise.any(
            svgCarsCollection.map(async (elem, inx) => {
              const resObj: Engine | null = promiseResult[inx];
              if (resObj) {
                const id = Number(elem.id);
                return controllerRaceSection.switchEngineHandler(id, Constant.DRIVE, resObj, elem);
              }
              return null;
            })
          );
          globalState.isRace = false;

          if (promiseResultEngine) {
            const carWinnerObj: DataWinObjectName | null = await controllerRaceSection.winnerHandler(
              promiseResultEngine
            );
            if (carWinnerObj && view === Constant.GARAGE) createWinModal(carWinnerObj);
          }
          break;
        }

        case Constant.RESET: {
          await lockButtons(false);
          checkPageButtons(wrapperCreateCar.elem, Constant.SEVEN);
          const buttonRace: HTMLButtonElement = <HTMLButtonElement>target.previousElementSibling;
          target.disabled = true;
          buttonRace.disabled = true;
          startButtonCollection.forEach((button) => {
            const curButton = button;
            curButton.disabled = true;
          });
          stopButtonCollection.forEach((button) => {
            const curButton = button;
            curButton.disabled = true;
          });

          await Promise.allSettled(
            svgCarsCollection.map(async (elem) => {
              const id = Number(elem.id);
              controllerRaceSection.stopAnimationHandler(id, elem);
              return controllerRaceSection.startStopHandler(id, Constant.STOPPED);
            })
          );

          startButtonCollection.forEach((button) => {
            const curButton = button;
            curButton.disabled = false;
          });

          globalState.isRace = false;
          buttonRace.disabled = false;

          break;
        }
        case Constant.GENERATE: {
          target.disabled = true;
          target.innerText = `${Constant.WAIT}`;
          const generateCars: RandomData | null = await controllerCarSection.generateHandler();
          if (generateCars) {
            const { randomCarsData, count } = generateCars;
            changeTitlePage(count, page);
            randomCarsData.forEach((car: DataObject) => {
              const length: number = raceListDiv.childElementCount;
              if (length < Constant.SEVEN) {
                const carOnTrack: HTMLDivElement = createCarOnRace(car);
                raceListDiv.append(carOnTrack);
              }
            });

            target.innerText = `${Constant.GENERATE}`;
          } else {
            target.innerText = `${Constant.TRY_AGAIN}`;
          }
          checkPageButtons(wrapperCreateCar.elem, Constant.SEVEN);
          target.disabled = false;
          break;
        }

        default:
          break;
      }
    }
    return null;
  } catch (err) {
    return null;
  }
}
