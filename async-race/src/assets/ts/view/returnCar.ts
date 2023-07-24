import ICar from '../iCar';
import returnCarImg from './returnCarImg';

export default function returnCar(obj: ICar): string {
  const carImg = returnCarImg(obj.color);
  const codeHtml = `
    <section class="cars__car-block car-block" id="${obj.id}">
      <div class="car-block__wrapper">
        <div class="car-block__header">
          <div class="car-block__set-btns">
            <button class="car-block__select">Select</button>
            <button class="car-block__remove">Remove</button>
          </div>
          <h4 class="title car-block__title">${obj.name}</h4>
        </div>
        <div class="car-block__car-wrapper">
          <div class="car-block__engine-btns">
            <button class="car-block__start">Start</button>
            <button class="car-block__stop" disabled>Stop</button>
          </div>
          ${carImg}
        </div>
      </div>
    </section>
  `;
  return codeHtml;
}
