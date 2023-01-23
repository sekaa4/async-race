import LockButtons from '../interfaces/LockButtons';
import Constant from '../models/Constant';

export default async function lockButtons(option: boolean): Promise<void> {
  const buttonsCollection = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.button');
  const textButtons: Constant[] = [
    Constant.CREATE,
    Constant.SELECT,
    Constant.REMOVE,
    Constant.PREVIOUS,
    Constant.NEXT,
    Constant.GENERATE,
  ];

  buttonsCollection.forEach((button) => {
    const curButton: HTMLButtonElement = button;
    const text = curButton.innerText as LockButtons;
    if (textButtons.includes(text)) {
      curButton.disabled = option;
    }
  });
}
