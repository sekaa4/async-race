// import Data from '../../interfaces/Data.type';
import DataObject from '../../interfaces/DataObject';
import RandomData from '../../interfaces/RandomData';
// import ReturnObj from '../../interfaces/ReturnObj';
import Constant from '../../models/Constant';
import createCarOnRace from '../elements/garage/createCarOnRace';
import { raceListDiv } from '../elements/garage/createListCars';
import controllerCarSection from './ControllerCarSection';
import controllerRaceSection from './ControllerRaceSection';
import changeTitlePage from '../../utils/changeTitlePage';
import globalState from '../../utils/globalState';
import Engine from '../../interfaces/Engine';
import ConstantsDom from '../../models/Dom';

export default async function buttonLineHandler(e: MouseEvent, page: number) {
  const { target, currentTarget } = e;
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
          break;
        }
        case Constant.UPDATE: {
          break;
        }
        case Constant.RACE: {
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
          const promiseResultEngine = await Promise.any(
            svgCarsCollection.map(async (elem, inx) => {
              const resObj = promiseResult[inx];
              if (resObj) {
                const id = Number(elem.id);
                return controllerRaceSection.switchEngineHandler(id, Constant.DRIVE, resObj, elem);
              }
              return null;
            })
          );
          globalState.isRace = false;
          console.log(promiseResultEngine);
          break;
        }

        case Constant.RESET: {
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
            changeTitlePage(count);
            randomCarsData.forEach((car: DataObject) => {
              const length = raceListDiv.childElementCount;
              if (length < Constant.SEVEN) {
                const carOnTrack: HTMLDivElement = createCarOnRace(car, page);
                raceListDiv.append(carOnTrack);
              }
            });

            target.innerText = `${Constant.GENERATE}`;
          } else {
            target.innerText = `${Constant.TRY_AGAIN}`;
          }
          target.disabled = false;
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
