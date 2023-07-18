export default class Api {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'http://127.0.0.1:3000';
  }

  async getNum(str: string): Promise<string> {
    return fetch(`${this.baseUrl}${str}`)
      .then((response: Response) => response.headers.get('X-Total-Count'))
      .then((result) => String(result))
      .catch((error) => error.message);
  }
}
