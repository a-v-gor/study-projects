export default interface IGameObj {
  tag: string;
  for?: string;
  child?: IGameObj;
  isChild?: boolean;
  toSelect?: boolean;
}