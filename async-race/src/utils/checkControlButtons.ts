import globalState from './globalState';
import Constant from '../models/Constant';
import ConstantsDom from '../models/Dom';

export default function checkControlButtons(controlCar: HTMLDivElement, id: number) {
  const buttonA: HTMLButtonElement = <HTMLButtonElement>controlCar.querySelector(`.${ConstantsDom.BUTTON_ENGINE_A}`);
  const buttonB: HTMLButtonElement = <HTMLButtonElement>controlCar.querySelector(`.${ConstantsDom.BUTTON_ENGINE_B}`);
  if (globalState.buttonsStartA.length !== Constant.ZERO) {
    const arrButtonsA = globalState.buttonsStartA;
    arrButtonsA.forEach((button) => {
      if (button.id === id) {
        buttonA.disabled = button.status;
      }
    });
  } else buttonA.disabled = false;

  if (globalState.buttonsStartB.length !== Constant.ZERO) {
    const arrButtonsB = globalState.buttonsStartB;
    arrButtonsB.forEach((button) => {
      if (button.id === id) {
        buttonB.disabled = button.status;
      }
    });
  } else buttonB.disabled = true;
}
