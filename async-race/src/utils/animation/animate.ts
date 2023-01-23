import Constant from '../../models/Constant';
import globalState from '../globalState';
import timing from './timing';
import draw from './draw';

export default async function animate(id: number, duration: number, elem: HTMLElement) {
  const start = performance.now();
  const curCar = globalState.engineCarsStatus.get(id);
  if (curCar) {
    let requestId = window.requestAnimationFrame(function carAnimate(time: number) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > Constant.ONE) {
        timeFraction = Constant.ONE;
        curCar.progress = timeFraction;
        curCar.requestId = requestId;
      }
      const progress = timing(timeFraction);
      draw(id, progress, elem);
      if (timeFraction < Constant.ONE) {
        requestId = window.requestAnimationFrame(carAnimate);
        curCar.progress = progress;
        curCar.requestId = requestId;
      }
    });
  }
}
