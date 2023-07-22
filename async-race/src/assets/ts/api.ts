export default class Api {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'http://127.0.0.1:3000';
  }

  getNum(str: string): Promise<string> {
    return fetch(`${this.baseUrl}${str}`)
      .then((response: Response) => response.headers.get('X-Total-Count'))
      .then((result) => String(result))
      .catch((error) => error.message);
  }

  getCars(pageNum: number) {
    return fetch(`${this.baseUrl}/garage?_limit=7&_page=${pageNum}`)
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  newCar(name: string, color: string) {
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

  getCar(id: number) {
    return fetch(`${this.baseUrl}/garage/${id}`)
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  updCar(name: string, color: string, id: number) {
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

  removeCar(id: number) {
    return fetch(`${this.baseUrl}/garage/${id}`, {
      method: 'DELETE',
    })
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  startEngine(id: number) {
    return fetch(`${this.baseUrl}/engine?id=${id}&status=started`, {
      method: 'PATCH',
    })
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  stopEngine(id: number) {
    return fetch(`${this.baseUrl}/engine?id=${id}&status=stopped`, {
      method: 'PATCH',
    });
  }

  drive(id: number) {
    return fetch(`${this.baseUrl}/engine?id=${id}&status=drive`, {
      method: 'PATCH',
    });
  }
}
