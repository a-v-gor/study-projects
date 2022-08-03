import { IResDataArticle } from '../view/iDataArticle';
import { ISourceObj } from '../view/iSrcObj';

export interface IDataNews {
  status: string;
  sources?: ISourceObj[];
  articles?: IResDataArticle[];
  totalResults?: number;
}