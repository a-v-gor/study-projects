interface iGetRespObj {
  endpoint: string;
  options?: {}
}

class Loader {

  _baseLink: string;
  _options: {apikey: string};

    constructor(baseLink: string, options: any) {
        this._baseLink = baseLink;
        this._options = options;
    }

    getResp(
      obj: iGetRespObj,
      callback:()=>void = () => {
          console.error('No callback for GET response');
      }
  ) {
    if (!obj.options) {
      obj.options = {};
    };
      this.load('GET', obj.endpoint, callback, obj.options);
  }

    errorHandler(res:any) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: {}, endpoint: string): string {
      const urlOptions: any = { ...this._options, ...options };
      let url = `${this._baseLink}${endpoint}?`;

      Object.keys(urlOptions).forEach((key) => {
          url += `${key}=${urlOptions[key]}&`;
      });

      return url.slice(0, -1);
  }

    load(method: string, endpoint:string, callback:(x?:any)=>any, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data:any) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;