import Constant from '../../../models/Constant';
import ConstantsDom from '../../../models/Dom';
import handlerHeaderTableLine from '../../controller/handlerHeaderTableLine';
import createElement from '../createElement';

export default function createHeaderTable(): HTMLDivElement {
  const wrapperHeaderTable: HTMLDivElement = createElement(ConstantsDom.DIV, HTMLDivElement, {
    classes: [ConstantsDom.HEADER_TITLE, ConstantsDom.TABLE_HEADER_TITLE],
  });

  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: wrapperHeaderTable,
    classes: [ConstantsDom.HEADER_TITLE_CONTAIN, ConstantsDom.CONTAIN_NUMBER],
    text: `${Constant.NUMBER_TEXT}`,
  });
  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: wrapperHeaderTable,
    classes: [ConstantsDom.HEADER_TITLE_CONTAIN, ConstantsDom.CONTAIN_NUMBER],
    text: `${Constant.CAR_TEXT}`,
  });
  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: wrapperHeaderTable,
    classes: [ConstantsDom.HEADER_TITLE_CONTAIN, ConstantsDom.CONTAIN_NAME_CAR],
    text: `${Constant.NAME_CAR}`,
  });
  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: wrapperHeaderTable,
    classes: [ConstantsDom.HEADER_TITLE_CONTAIN, ConstantsDom.CONTAIN_WINS_TEXT],
    text: `${Constant.WINS_TEXT}`,
  });
  createElement(ConstantsDom.SPAN, HTMLSpanElement, {
    parentElement: wrapperHeaderTable,
    classes: [ConstantsDom.HEADER_TITLE_CONTAIN, ConstantsDom.CONTAIN_BEST_TIME],
    text: `${Constant.BEST_TIME}(seconds)`,
  });

  wrapperHeaderTable.addEventListener('click', handlerHeaderTableLine);
  return wrapperHeaderTable;
}
