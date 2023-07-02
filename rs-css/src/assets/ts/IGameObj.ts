export default interface IGameObj {
  tag: string;
  position: 'onTable' | 'child';
  id?: string;
  for?: string;
  children?: IGameObj[];
  toSelect?: boolean;
}