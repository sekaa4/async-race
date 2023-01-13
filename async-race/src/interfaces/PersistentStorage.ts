import ValueStorage from './LocalStorage.type';
import Data from './Data.type';

export default interface PersistentStorage {
  getItem(key: string): Data | ValueStorage;
  setItem(key: string, value: ValueStorage): void;
}
