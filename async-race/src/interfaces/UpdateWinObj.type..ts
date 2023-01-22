import DataWinObject from './DataWinObject';

type UpdateWinObj = Omit<DataWinObject, 'id'>;

export default UpdateWinObj;
