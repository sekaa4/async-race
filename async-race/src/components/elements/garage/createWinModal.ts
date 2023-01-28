import DataWinObjectName from '../../../interfaces/DataWinObjectName';
import Attrs from '../../../models/Attrs';
import Constant from '../../../models/Constant';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import CreateElementWrapper from '../CreateElementWrapper';

export default function createWinModal(winCar: DataWinObjectName) {
  const { carName, wins, time } = winCar;
  const timeSec = (time / Constant.ONETHOUSAND).toFixed(Constant.TWO);
  const wrapperWinModal: CreateElementWrapper = new CreateElementWrapper(ConstantsDom.DIV, {
    classes: [ConstantsDom.MODAL],
  });

  const modalText: HTMLHeadElement = createElement(ConstantsDom.H2, HTMLHeadElement, {
    parentElement: wrapperWinModal.elem,
    classes: [ConstantsDom.WIN_MODAL],
  });

  modalText.innerText = `${carName} went first ${timeSec} current count wins: ${wins}`;
  wrapperWinModal.elem.addEventListener('click', (e) => {
    const { target, currentTarget } = e;
    if (target instanceof HTMLElement && currentTarget instanceof HTMLElement) {
      document.body.style.overflow = '';
      currentTarget.remove();
    }
  });
  document.body.append(wrapperWinModal.elem);
  document.body.style.overflow = Attrs.HIDDEN;
}
