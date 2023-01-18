import Data from './Data.type';
import DataObject from './DataObject';

interface ReturnObj {
  data: Data;
  count?: number;
  nextCar?: DataObject | null;
  newCar?: DataObject | null;
}

export default ReturnObj;
