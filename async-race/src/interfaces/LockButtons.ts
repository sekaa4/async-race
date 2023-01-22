import Constant from '../models/Constant';

type LockButtons =
  | Constant.CREATE
  | Constant.SELECT
  | Constant.REMOVE
  | Constant.PREVIOUS
  | Constant.NEXT
  | Constant.GENERATE;

export default LockButtons;
