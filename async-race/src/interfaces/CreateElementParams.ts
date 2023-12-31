export default interface CreateElementParams {
  parentElement?: HTMLElement;
  classes?: string[];
  text?: string;
  attributes?: [string, string][];
}
