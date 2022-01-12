'use strict';

[
  ['header', 1, 1],
  ['main', 1, 1],
  ['footer', 1, 1],
  ['section', 6, Infinity],
  ['h1', 1, 1],
  ['h2', 5, Infinity],
  ['nav', 1, 1],
  ['ul', 2, Infinity],
  ['button', 10, Infinity],
  ['input[type="email"]', 1, Infinity],
  ['input[type="tel"]', 1, Infinity],
  ['textarea', 1, Infinity],
  ['input, textarea[placeholder]', 3, Infinity],
]
  .map((x) => [...x, [...document.querySelectorAll(x[0])].length])
  .map((x) =>
      x[3] >= x[1] && x[3] <= x[2]
          ? `✔ ${x[0]} (${x[3]})`
          : `✘ ${x[0]} (expected - ${x[1]}, actual - ${x[3]})`
  )
  .forEach((x) => console.log(x));

let res = `
Ваша оценка - 110 баллов 
Отзыв по пунктам ТЗ:
Выполненные пункты:
1) Вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/. Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований 

2) header, main, footer 

3) шесть элементов section (по количеству секций) 

4) только один заголовок h1 

5) пять заголовков h2 (количество секций минус одна, у которой заголовок h1) 

6) один элемент nav (панель навигации) 

7) два списка ul > li > a (панель навигации, ссылки на соцсети) 

8) десять кнопок button 

9) два инпута: input type="email" и input type="tel" 

10) один элемент textarea 

11) три атрибута placeholder 

12) блок header 

13) секция hero 

14) секция skills 

15) секция portfolio 

16) секция video 

17) секция price 

18) секция contacts 

19) блок footer 

20) для построения сетки используются флексы или гриды 

21) при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону 

22) фоновый цвет тянется на всю ширину страницы 

23) иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления 

24) изображения добавлены в формате .jpg 

25) есть favicon 

26) плавная прокрутка по якорям 

27) ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ 

28) интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета 

29) обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы`
console.log(res);