import globalState from '../globalState';

const draw = (id: number, progress: number, elem: HTMLElement) => {
  if (elem.parentElement) {
    const raceLength = elem.parentElement.clientWidth - elem.clientWidth;
    const carSvgElem = elem;
    carSvgElem.style.left = `${progress * raceLength}px`;
    const arrCarsOnTrack = globalState.carsOnTrack;
    if (arrCarsOnTrack.length > 0) {
      arrCarsOnTrack.forEach((car) => {
        const carOnTrack = car;
        if (carOnTrack.id === id) {
          carOnTrack.positionLeft = carSvgElem.style.left;
        }
      });
    } else arrCarsOnTrack.push({ id, positionLeft: carSvgElem.style.left });
  }
};

export default draw;
