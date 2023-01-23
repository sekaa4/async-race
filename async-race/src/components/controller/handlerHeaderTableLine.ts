import Constant from '../../models/Constant';

export default function handlerHeaderTableLine(e: MouseEvent) {
  const { target, currentTarget } = e;
  if (target instanceof HTMLSpanElement && currentTarget instanceof HTMLDivElement) {
    switch (target.innerText) {
      case Constant.WINS_TEXT: {
        break;
      }
      case Constant.BEST_TIME: {
        break;
      }
      default:
        break;
    }
  }
}
