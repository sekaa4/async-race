import DataObject from './DataObject';
import Constant from '../models/Constant';

type UpdateData = Omit<DataObject, `${Constant.ID}`>;

export default UpdateData;
