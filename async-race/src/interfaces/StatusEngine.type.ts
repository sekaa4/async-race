import Constant from '../models/Constant';

type StatusEngine = `${Constant.STOPPED}` | `${Constant.STARTED}` | `${Constant.DRIVE}`;

export default StatusEngine;
