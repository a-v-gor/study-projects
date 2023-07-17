export default class Api {
  baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async getNum(str: string): Promise<string> {
    return fetch(`${this.baseUrl}${str}`)
      .then((response: Response) => response.headers.get('X-Total-Count'))
      .then((result) => String(result))
      .catch((error) => error.message);
  }
}
