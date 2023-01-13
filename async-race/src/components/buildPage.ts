import renderHeader from './render/header';
import renderMain from './render/main';
import renderFooter from './render/footer';

export default function buildPage(): void {
  const header: HTMLElement = renderHeader();
  const main: HTMLElement = renderMain();
  const footer = renderFooter();

  document.body.append(header, main, footer);
}
