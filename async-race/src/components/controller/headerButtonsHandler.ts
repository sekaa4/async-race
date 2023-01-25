import Constant from '../../models/Constant';
import globalState from '../../utils/globalState';
import controllerWinnersSection from './ControllerWinnersSection';
import { renderMain } from '../render/main';
import ReturnObj from '../../interfaces/ReturnObj';
import DataWinObject from '../../interfaces/DataWinObject';

export default async function headerButtonsHandler(event: MouseEvent) {
  const { target, currentTarget } = event;
  try {
    if (target instanceof HTMLButtonElement && currentTarget instanceof HTMLElement) {
      switch (target.innerText) {
        case Constant.TO_GARAGE: {
          const curCarsPage: number = globalState.carsPage;
          const winnersButton: HTMLButtonElement = <HTMLButtonElement>currentTarget.lastElementChild;
          const dataCars: ReturnObj | null = await controllerWinnersSection.getCarsHandler(curCarsPage);

          target.disabled = true;
          winnersButton.disabled = false;
          if (dataCars) {
            const { data, count } = dataCars;
            if (count || count === Constant.ZERO) {
              globalState.carsCount = count;
              renderMain(count, data, curCarsPage);
            }
          }
          break;
        }
        case Constant.TO_WINNERS: {
          const curWinnersPage: number = globalState.winnersPage;
          const garageButton: HTMLButtonElement = <HTMLButtonElement>currentTarget.firstElementChild;
          target.disabled = true;
          garageButton.disabled = false;
          const dataWinners = await controllerWinnersSection.getWinnersHandler(curWinnersPage);
          if (dataWinners) {
            const { data, count } = dataWinners;
            globalState.winnersCount = count;
            renderMain(count, data, curWinnersPage);
          } else {
            renderMain(Constant.ZERO, [] as DataWinObject[], Constant.ONE);
          }

          break;
        }
        default:
          break;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}
