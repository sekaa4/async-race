import Data from '../interfaces/Data.type';
import persistentStorage from './persistentStorage';

export default async function getData(): Promise<Data> {
  const data: Data = await fetch('http://127.0.0.1:3000/garage').then((resp) => resp.json());
  persistentStorage.setItem('data-cars', data);
  return data;
}
