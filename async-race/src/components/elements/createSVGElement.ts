import '../../assets/icons/car.svg';
import '../../assets/icons/flag.svg';
import SVGParams from '../../interfaces/SVGParams';
import Attrs from '../../models/Attrs';
import Constant from '../../models/Constant';
import ConstantsDom from '../../models/Dom';

export default function createSVGElement(anchor?: string, { fill, id }: SVGParams = {}): SVGSVGElement {
  const svgElem: SVGSVGElement = document.createElementNS(Constant.SVGURL, ConstantsDom.SVG);
  const useSvg: SVGUseElement = document.createElementNS(Constant.SVGURL, ConstantsDom.USE);
  useSvg.setAttributeNS(Constant.XLINK, ConstantsDom.HREF, `#${anchor}`);

  if (anchor && fill && id) {
    svgElem.setAttribute(Attrs.CLASS, `${anchor}-svg`);
    svgElem.setAttribute(Attrs.FILL, `${fill}`);
    svgElem.setAttribute(Attrs.ID, `${id}`);
  } else if (anchor) {
    svgElem.setAttribute(Attrs.CLASS, `${anchor}-svg`);
  }

  svgElem.append(useSvg);

  return svgElem;
}
