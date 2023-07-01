export default interface IGameObj {
  tag: string;
  onTable: boolean;
  id?: string;
  for?: string;
  child?: IGameObj;
  isChild?: boolean;
  toSelect?: boolean;
}