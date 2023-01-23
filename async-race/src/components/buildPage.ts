import renderHeader from './render/header';
import { renderMain } from './render/main';
import renderFooter from './render/footer';
import Data from '../interfaces/Data.type';

export default async function buildPage(count: number, data: Data, page: number): Promise<void> {
  const header: HTMLElement = renderHeader();
  const main: HTMLElement = await renderMain(count, data, page);
  const footer: HTMLElement = renderFooter();

  document.body.append(header, main, footer);
}
