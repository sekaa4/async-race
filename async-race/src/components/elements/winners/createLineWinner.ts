import TableWinnerDataObj from '../../../interfaces/TableWinnerObj';
import Attrs from '../../../models/Attrs';
import Constant from '../../../models/Constant';
import ConstantsDom from '../../../models/Dom';
import createElement from '../createElement';
import createSVGElement from '../createSVGElement';

export default function createLineWinner(lineCar: TableWinnerDataObj, number: number) {
  const { id, wins, time, name, color } = lineCar;
  const timeSec = (time / Constant.ONETHOUSAND).toFixed(Constant.TWO);
  const lineWinner: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.LINE],
    attributes: [[`${Attrs.DATA_ID}`, `${id}`]],
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: lineWinner,
    classes: [ConstantsDom.COLUMN_NUMBER],
    text: `${number}`,
  });
  const svgElem: SVGSVGElement = createSVGElement(`${Constant.CAR}`, {
    fill: `${color}`,
    id: `${id}`,
  });
  svgElem.classList.add(ConstantsDom.CAR_WINNER);
  lineWinner.append(svgElem);

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: lineWinner,
    classes: [ConstantsDom.COLUMN_NAME],
    text: `${name}`,
  });
  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: lineWinner,
    classes: [ConstantsDom.COLUMN_WINS],
    text: `${wins}`,
  });
  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: lineWinner,
    classes: [ConstantsDom.COLUMN_BEST_TIME],
    text: `${timeSec}`,
  });

  return lineWinner;
}
