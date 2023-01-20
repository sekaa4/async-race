import StatusEngine from './StatusEngine.type';

interface StatusCar {
  status: StatusEngine;
  duration: number;
  progress: number;
  requestId: number;
  controller: null | AbortController;
}

export default StatusCar;
