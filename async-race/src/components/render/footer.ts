import createElement from '../elements/createElement';
import ConstantsDom from '../../models/Dom';

export default function renderFooter(): HTMLElement {
  const footer: HTMLElement = createElement(ConstantsDom.FOOTER, HTMLElement, {
    parentElement: document.body,
    classes: [ConstantsDom.FOOTER],
  });
  const wrapper: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: footer,
    classes: [ConstantsDom.WRAPPER, ConstantsDom.FOOTER_WRAPPER],
  });

  const footerCopy: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.FOOTER_COPY],
  });

  createElement(ConstantsDom.SPAN, HTMLElement, {
    parentElement: footerCopy,
    classes: [ConstantsDom.FOOTER_SPAN_COPY],
    text: `${ConstantsDom.RESERVED}`,
  });

  createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.FOOTER_LOGO_CONTAINER],
    attributes: [['onClick', `window.location='${ConstantsDom.RSSCHOOL}'`]],
  });

  const nav: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: wrapper,
    classes: [ConstantsDom.FOOTER_NAV, ConstantsDom.LAYOUT_3],
  });

  const colum: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: nav,
    classes: [ConstantsDom.FOOTER_COLUM],
  });

  const links: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: colum,
    classes: [ConstantsDom.FOOTER_LINKS],
  });

  createElement(ConstantsDom.A, HTMLElement, {
    parentElement: links,
    classes: [ConstantsDom.TEXT_NAME],
    text: 'Sergey Pansevich',
    attributes: [[ConstantsDom.HREF, ConstantsDom.GITHUB_SERGEY]],
  });

  const columTwo: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: nav,
    classes: [ConstantsDom.FOOTER_COLUM],
  });

  const linksTwo: HTMLElement = createElement(ConstantsDom.DIV, HTMLElement, {
    parentElement: columTwo,
    classes: [ConstantsDom.FOOTER_LINKS],
  });

  createElement(ConstantsDom.A, HTMLElement, {
    parentElement: linksTwo,
    classes: [ConstantsDom.TEXT_NAME],
    text: ConstantsDom.NAME_RSSCHOOL,
    attributes: [[ConstantsDom.HREF, ConstantsDom.RSSCHOOL]],
  });

  return footer;
}
