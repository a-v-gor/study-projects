export default interface IGameObj {
  tag: string;
  onTable: boolean;
  id?: string;
  for?: string;
  children?: IGameObj[];
  isChild?: boolean;
  toSelect?: boolean;
}