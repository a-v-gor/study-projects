export default interface ITag {
  tag: string;
  for?: string;
  child?: ITag;
  isChild?: boolean;
  toSelect?: boolean;
}