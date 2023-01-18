// import Data from '../../interfaces/Data.type';
import DataObject from '../../interfaces/DataObject';
import RandomData from '../../interfaces/RandomData';
// import ReturnObj from '../../interfaces/ReturnObj';
import Constant from '../../models/Constant';
import createCarOnRace from '../elements/garage/createCarOnRace';
import { raceListDiv } from '../elements/garage/createListCars';
import controllerCarSection from './ControllerCarSection';
import changeTitlePage from '../../utils/changeTitlePage';

export default async function buttonLineHandler(e: MouseEvent, page: number) {
  const { target, currentTarget } = e;
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
          break;
        }
        case Constant.RESET: {
          break;
        }
        case Constant.GENERATE: {
          target.disabled = true;
          target.innerText = 'Wait...';
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

            target.innerText = 'GENERATE';
          } else {
            target.innerText = 'Try again';
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
