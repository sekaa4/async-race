import renderHeader from './render/header';
import renderMain from './render/main';
import renderFooter from './render/footer';
import Data from '../interfaces/Data.type';

export default function buildPage(count: number, data: Data): void {
  const header: HTMLElement = renderHeader();
  const main: HTMLElement = renderMain(count, data);
  const footer = renderFooter();

  document.body.append(header, main, footer);
}
