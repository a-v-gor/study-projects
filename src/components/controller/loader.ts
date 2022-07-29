interface iObjResData {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

interface iResDataArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: {
    id: string,
    name: string
  }
  title: string;
  url: string;
  urlToImage: string;
}

interface iResData {
  status: string;
  sources?: iObjResData[];
  articles?: iResDataArticle[];
  totalResults?: number;
}

class Loader {
  
  _baseLink: string;
  _options: {apiKey: string};
  
  constructor(baseLink: string, options: {apiKey: string}) {
    this._baseLink = baseLink;
    this._options = options;
  }
  
  getResp(obj: {
    endpoint: string;
    options?: {sources?: string}
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
  
  makeUrl(options: {sources?: string}, endpoint: string): string {
    const urlOptions: {apiKey: string, sources?: string} = { ...this._options, ...options };
    
    let url = `${this._baseLink}${endpoint}?`;
    
    Object.entries(urlOptions).forEach(([key, value]) => {
      url += `${key}=${value}&`;
    });
    
    return url.slice(0, -1);
  }
  
  load(method: string, endpoint:string, callback:(data:iResData)=>void, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
    .then(this.errorHandler)
    .then((res) => res.json())
    .then((data:iResData) => callback(data))
    .catch((err) => console.error(err));
  }
}

export default Loader;