import StatusEngine from './StatusEngine.type';

interface StatusCar {
  name: string;
  status: StatusEngine;
  duration: number;
  progress: number;
  requestId: number;
  controller: null | AbortController;
}

export default StatusCar;
