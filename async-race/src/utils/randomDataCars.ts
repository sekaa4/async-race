import UpdateData from '../interfaces/UpdateData';
import randomColor from './randomColor';
import randomName from './randomName';
import Constant from '../models/Constant';

export default function randomDataCars(): UpdateData[] {
  const randomData: UpdateData[] = Array(Constant.ONEHUNDRED)
    .fill(null)
    .map((value, i) => i)
    .reduce((acc: UpdateData[]) => {
      const carObj: UpdateData = { name: randomName(), color: randomColor() };
      acc.push(carObj);
      return acc;
    }, []);
  return randomData;
}
