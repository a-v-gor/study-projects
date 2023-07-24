import ICar from './iCar';
import IWinner from './view/iWinner';

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

  getWinners(pageNum: number) {
    return fetch(`${this.baseUrl}/winners?_limit=10&_page=${pageNum}`)
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  getSortedWinners(pageNum: number, sort: string, order: string) {
    return fetch(`${this.baseUrl}/winners?_limit=10&_page=${pageNum}&_sort=${sort}&_order=${order}`)
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  newCar(name: string, color: string): Promise<void> {
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

  getWinner(id: number): Promise<IWinner> {
    return fetch(`${this.baseUrl}/winners/${id}`)
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  newWinner(id: number, wins: number, time: number): Promise<void> {
    return fetch(`${this.baseUrl}/winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, wins, time }),
    })
      .then((response: Response) => response.json())
      .then((result) => result)
      .catch((error) => error.message);
  }

  getCar(id: number): Promise<ICar> {
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

  updWinner(id: number, wins: number, time: number): Promise<void> {
    return fetch(`${this.baseUrl}/winners/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wins, time }),
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

  removeWinner(id: number) {
    return fetch(`${this.baseUrl}/winners/${id}`, {
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

  async drive(id: number) {
    const response = await fetch(`${this.baseUrl}/engine?id=${id}&status=drive`, {
      method: 'PATCH',
    });
    if (response.status !== 200) {
      throw new Error();
    } else {
      return response;
    }
  }
}
