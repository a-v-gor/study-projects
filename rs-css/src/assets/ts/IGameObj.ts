export default interface IGameObj {
  tag: string;
  onTable: boolean;
  for?: string;
  child?: IGameObj;
  isChild?: boolean;
  toSelect?: boolean;
}