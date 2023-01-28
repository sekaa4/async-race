import DataWinObject from './DataWinObject';
import Constant from '../models/Constant';

type UpdateWinObj = Omit<DataWinObject, `${Constant.ID}`>;

export default UpdateWinObj;
