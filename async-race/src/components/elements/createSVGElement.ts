import '../../assets/icons/car.svg';
import '../../assets/icons/flag.svg';
import SVGParams from '../../interfaces/SVGParams';

export default function createSVGElement(anchor?: string, { fill, id }: SVGParams = {}): SVGSVGElement {
  const svgElem: SVGSVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const useSvg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  useSvg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#${anchor}`);

  if (anchor && fill && id) {
    svgElem.setAttribute('class', `${anchor}-svg`);
    svgElem.setAttribute('fill', `${fill}`);
    svgElem.setAttribute('id', `${id}`);
  } else if (anchor) {
    svgElem.setAttribute('class', `${anchor}-svg`);
  }

  svgElem.append(useSvg);

  return svgElem;
}
