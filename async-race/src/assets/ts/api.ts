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

  async getCars() {
    return fetch(`${this.baseUrl}/garage?_limit=7`)
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  async newCar(name: string, color: string) {
    return fetch(`${this.baseUrl}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, color }),
    })
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  async getCar(id: number) {
    return fetch(`${this.baseUrl}/garage/${id}`)
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  async updCar(name: string, color: string, id: number) {
    return fetch(`${this.baseUrl}/garage/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, color }),
    })
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  async removeCar(id: number) {
    return fetch(`${this.baseUrl}/garage/${id}`, {
      method: 'DELETE',
    })
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }
}
