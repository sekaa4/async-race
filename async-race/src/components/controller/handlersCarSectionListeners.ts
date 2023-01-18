import ReturnObj from '../../interfaces/ReturnObj';
import Constant from '../../models/Constant';
import createCarOnRace from '../elements/garage/createCarOnRace';
import { raceListDiv } from '../elements/garage/createListCars';
import controllerCarSection from './ControllerCarSection';
import changeTitlePage from '../../utils/changeTitlePage';

export default async function createButtonHandler(
  e: MouseEvent,
  inputText: HTMLInputElement,
  inputColor: HTMLInputElement,
  page: number
) {
  const carObj: ReturnObj | null = await controllerCarSection.createHandler(e, inputText, inputColor);
  if (carObj && carObj.count) {
    const { count, newCar } = carObj;
    const length: number = raceListDiv.childElementCount;
    changeTitlePage(count);

    if (length < Constant.SEVEN && newCar) {
      const carOnRace: HTMLDivElement = createCarOnRace(newCar, page);
      raceListDiv.append(carOnRace);
    }
  }
}
