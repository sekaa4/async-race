import globalState from './globalState';
import InputObject from '../interfaces/InputObject';
import { updateButton } from '../components/elements/garage/createUpdateLine';

export default function checkCarSectionButtons(inputObj: InputObject) {
  const { inputText, inputColor, inputUpdateText, inputUpdateColor } = inputObj;
  inputText.value = globalState.inputCreate.name;
  inputColor.value = globalState.inputCreate.color;

  if (globalState.idSelectedCar) {
    inputUpdateText.disabled = false;
    inputUpdateColor.disabled = false;
    inputUpdateText.value = globalState.inputUpdate.name;
    inputUpdateColor.value = globalState.inputUpdate.color;
  } else {
    inputUpdateText.disabled = true;
    inputUpdateColor.disabled = true;
    updateButton.disabled = true;
  }
}
