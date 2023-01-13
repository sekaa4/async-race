import PersistentStorage from '../interfaces/PersistentStorage';
import ValueStorage from '../interfaces/LocalStorage.type';
import Data from '../interfaces/Data.type';

class LocalStorage implements PersistentStorage {
  getItem(key: string): Data | ValueStorage {
    const item: string | null = localStorage.getItem(key);
    if (item === null || item === 'undefined') {
      throw new Error('Key not found');
    } else if (key === 'data-cars') {
      const data: Data = JSON.parse(item);
      return data;
    }

    return JSON.parse(item);
  }

  setItem(key: string, value: ValueStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

const persistentStorage: LocalStorage = new LocalStorage();
export default persistentStorage;
