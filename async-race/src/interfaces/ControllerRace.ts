import Data from './Data.type';
import DataObject from './DataObject';
import DataWinObject from './DataWinObject';
import Engine from './Engine';
import ReturnObj from './ReturnObj';
import StatusEngine from './StatusEngine.type';

interface ControllerRace {
  removeHandler(id: number, page: number): Promise<ReturnObj | null>;
  selectHandler(id: number): Promise<DataObject | null>;
  startStopHandler(id: number, action: StatusEngine): Promise<Engine | null>;
  switchEngineHandler(id: number, action: StatusEngine, engineParams: Engine, elem: HTMLElement): Promise<Engine>;
  stopAnimationHandler(id: number, elem: HTMLElement): Promise<boolean | null>;
  changePageHandler(option: string): Promise<Data | null>;
  winnerHandler(engine: Engine): Promise<DataWinObject | null>;
}

export default ControllerRace;
