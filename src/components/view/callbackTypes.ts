import { IDataNews } from '../view/iDataNews';

type emptyFunc = () => void;
type funcNews = (data: IDataNews) => void;
export type ValidTypes = emptyFunc | funcNews;