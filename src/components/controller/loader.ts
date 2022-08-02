import { IResDataArticle } from '../view/iDataArticle';
import { ISourceObj } from '../view/iSrcObj';

interface IResData {
  status: string;
  sources?: ISourceObj[];
  articles?: IResDataArticle[];
  totalResults?: number;
}

interface IOptions {
  sources?: string
}

interface IURLOptions extends IOptions {
  apiKey: string
}

interface IGetRespObj {
  endpoint: string;
  options?: IOptions
}

interface ILoader {
  _baseLink: string;
  _options: {apiKey: string};

  getResp(
    obj: IGetRespObj,
    callback:()=>void
  ): void;

  errorHandler(res: Response): Response;

  makeUrl(options: IOptions, endpoint: string): string;

  load(method: string, endpoint: string, callback: (data:IResData)=>void, options?: IOptions): void;
}

class Loader implements ILoader {
  
  _baseLink: string;
  _options: {apiKey: string};
  
  constructor(baseLink: string, options: {apiKey: string}) {
    this._baseLink = baseLink;
    this._options = options;
  }
  
  getResp(
    obj: {
      endpoint: string;
      options?: IOptions;
    },
    callback:()=>void = () => {
      console.error('No callback for GET response');
    }
  ) {
    if (!obj.options) {
      obj.options = {};
    }
    this.load('GET', obj.endpoint, callback, obj.options);
  }
  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
      console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    
    return res;
  }
  
  makeUrl(options: IOptions, endpoint: string): string {
    const urlOptions: IURLOptions = { ...this._options, ...options };
    
    let url = `${this._baseLink}${endpoint}?`;
    
    Object.entries(urlOptions).forEach(([key, value]) => {
      url += `${key}=${value}&`;
    });
    
    return url.slice(0, -1);
  }
  
  load(method: string, endpoint:string, callback:(data:IResData)=>void, options: IOptions) {
    fetch(this.makeUrl(options, endpoint), { method })
    .then(this.errorHandler)
    .then((res) => res.json())
    .then((data:IResData) => callback(data))
    .catch((err) => console.error(err));
  }
}

export default Loader;