import Constant from '../../models/Constant';
// import * as api from '../../api/api';

const timing = (timeFraction: number) => timeFraction;
const draw = (progress: number, elem: HTMLElement) => {
  if (elem.parentElement) {
    const raceLength = elem.parentElement.clientWidth - elem.clientWidth;
    const carSvgElem = elem;
    carSvgElem.style.left = `${progress * raceLength}px`;
  }
};

export default async function animate(duration: number, elem: HTMLElement, id: number) {
  const start = performance.now();
  let requestId = window.requestAnimationFrame(function carAnimate(time: number) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > Constant.ONE) timeFraction = Constant.ONE;
    const progress = timing(timeFraction);
    draw(progress, elem);
    if (timeFraction < Constant.ONE) {
      requestId = window.requestAnimationFrame(carAnimate);
      console.log('id', requestId);
    }
  });
  return requestId;

  // const result = await api.switchCarEngine([
  //   { key: 'id', value: `${id}` },
  //   { key: 'status', value: `drive` },
  // ]);
  // console.log(result);
  // window.cancelAnimationFrame(requestId);
  // return requestId;
}
