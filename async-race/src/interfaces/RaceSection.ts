import CarEngine from './CarEngine.type';
import Data from './Data.type';
import DataObject from './DataObject';
import DataWinObject from './DataWinObject';
import Engine from './Engine';
import ReturnObj from './ReturnObj';
import StatusEngine from './StatusEngine.type';

interface RaceSection {
  selectButtonModel(id: number): Promise<DataObject | null>;
  removeButtonModel(id: number, page: number): Promise<ReturnObj | null>;
  startStopButtonModel(id: number, action: StatusEngine): Promise<Engine | null>;
  switchEngineModel(id: number, action: StatusEngine): Promise<boolean | null>;
  changePageModel(page: number): Promise<Data | null>;
  carWinnerModel(carEngine: CarEngine, duration: number): Promise<DataWinObject | null>;
  playAnimateModel(id: number, engineParams: Engine, elem: HTMLElement): void;
  stopAnimateModel(id: number): boolean;
  resetPositionModel(id: number, elem: HTMLElement): boolean;
}

export default RaceSection;
