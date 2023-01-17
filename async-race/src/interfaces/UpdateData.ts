import DataObject from './DataObject';

type UpdateData = Omit<DataObject, 'id'>;

export default UpdateData;
