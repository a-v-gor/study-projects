/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/main.scss":
/*!**********************************!*\
  !*** ./src/assets/css/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/css/main.scss?");

/***/ }),

/***/ "./src/assets/css/normalize.css":
/*!**************************************!*\
  !*** ./src/assets/css/normalize.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/css/normalize.css?");

/***/ }),

/***/ "./src/assets/js/calcSettings.js":
/*!***************************************!*\
  !*** ./src/assets/js/calcSettings.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ calcSettings)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\n\nfunction calcSettings() {\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'easy') {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells = 100;\n  } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'medium') {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells = 225;\n  } else {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells = 625;\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/calcSettings.js?");

/***/ }),

/***/ "./src/assets/js/changeSmile.js":
/*!**************************************!*\
  !*** ./src/assets/js/changeSmile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeSmile)\n/* harmony export */ });\nfunction changeSmile(str) {\r\n  const smile = document.querySelector('.stat__player');\r\n\r\n  if (str === 'push') {\r\n    smile.classList.add('stat__player_push');\r\n  }\r\n  if (str === 'unpush') {\r\n    smile.classList.remove('stat__player_push');\r\n  }\r\n  if (str === 'mine') {\r\n    smile.classList.add('stat__player_mine');\r\n  }\r\n  if (str === 'win') {\r\n    smile.classList.add('stat__player_win');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/changeSmile.js?");

/***/ }),

/***/ "./src/assets/js/checkClick.js":
/*!*************************************!*\
  !*** ./src/assets/js/checkClick.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkClick)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _scatterMines_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scatterMines.js */ \"./src/assets/js/scatterMines.js\");\n/* harmony import */ var _countNeighboursMines_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countNeighboursMines.js */ \"./src/assets/js/countNeighboursMines.js\");\n/* harmony import */ var _openCell_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./openCell.js */ \"./src/assets/js/openCell.js\");\n/* harmony import */ var _checkIfZero_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkIfZero.js */ \"./src/assets/js/checkIfZero.js\");\n/* harmony import */ var _checkIfMine_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkIfMine.js */ \"./src/assets/js/checkIfMine.js\");\n/* harmony import */ var _changeSmile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changeSmile.js */ \"./src/assets/js/changeSmile.js\");\n/* harmony import */ var _checkIfWin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkIfWin.js */ \"./src/assets/js/checkIfWin.js\");\n/* harmony import */ var _increaseNum_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./increaseNum.js */ \"./src/assets/js/increaseNum.js\");\n/* harmony import */ var _playAudio_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./playAudio.js */ \"./src/assets/js/playAudio.js\");\n/* harmony import */ var _setSettings_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setSettings.js */ \"./src/assets/js/setSettings.js\");\n/* harmony import */ var _showRecords_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./showRecords.js */ \"./src/assets/js/showRecords.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timer.js */ \"./src/assets/js/timer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction checkClick() {\r\n  const field = document.querySelector('.field');\r\n  const soundBtn = document.querySelector('.settings__sound');\r\n  const settingsBtn = document.querySelector('.settings__difficulty');\r\n  const recordsBtn = document.querySelectorAll('.header-nav__li')[1];\r\n\r\n  function pushCell(event) {\r\n    if (event.button === 0 && event.target.classList.value === 'field__cell') {\r\n      const id = Number(event.target.id);\r\n      if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.includes(id) && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.includes(id)) {\r\n        if (event.isTrusted) {\r\n          (0,_increaseNum_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('.stat__num-moves');\r\n          _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moves += 1;\r\n          (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('click');\r\n        }\r\n        (0,_changeSmile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('push');\r\n        _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.push(id);\r\n        if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.length) {\r\n          (0,_scatterMines_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n          (0,_countNeighboursMines_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n          (0,_timer_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\r\n        }\r\n        event.target.closest('.field__cell').classList.add('field__cell_push');\r\n      }\r\n    }\r\n  }\r\n\r\n  function pushFlag(event) {\r\n    event.preventDefault();\r\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame) {\r\n      const id = Number(event.target.id);\r\n      if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.includes(id) && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.includes(id)) {\r\n        _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.push(id);\r\n        event.target.closest('.field__cell').classList.add('field__cell_flag');\r\n        (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('flag');\r\n      } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.includes(id)) {\r\n        event.target.closest('.field__cell').classList.remove('field__cell_flag');\r\n        _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.filter((el) => el !== id);\r\n        (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('flag');\r\n      }\r\n    }\r\n  }\r\n\r\n  function unpushCell() {\r\n    (0,_changeSmile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('unpush');\r\n    const pushedCell = document.querySelector('.field__cell_push');\r\n    if (pushedCell) {\r\n      (0,_openCell_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pushedCell.id);\r\n      (0,_checkIfZero_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pushedCell.id);\r\n      for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen.length; i += 1) {\r\n        (0,_openCell_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen[i]);\r\n      }\r\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen = [];\r\n      (0,_checkIfMine_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(pushedCell.id);\r\n      (0,_checkIfWin_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(pushedCell.id);\r\n    }\r\n    if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame) {\r\n      field.removeEventListener('mousedown', pushCell);\r\n      document.body.removeEventListener('mouseup', unpushCell);\r\n    }\r\n  }\r\n\r\n  function toggleSound() {\r\n    soundBtn.classList.toggle('settings__sound_mute');\r\n    if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound) {\r\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound = false;\r\n    } else {\r\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound = true;\r\n      (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('click');\r\n    }\r\n  }\r\n\r\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound) {\r\n    soundBtn.classList.remove('settings__sound_mute');\r\n  } else {\r\n    soundBtn.classList.add('settings__sound_mute');\r\n  }\r\n\r\n  recordsBtn.addEventListener('click', _showRecords_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\r\n  settingsBtn.addEventListener('click', _setSettings_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\r\n  soundBtn.addEventListener('click', toggleSound);\r\n  field.addEventListener('mousedown', pushCell);\r\n  document.body.addEventListener('mouseup', unpushCell);\r\n  field.addEventListener('contextmenu', pushFlag);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/checkClick.js?");

/***/ }),

/***/ "./src/assets/js/checkIfMine.js":
/*!**************************************!*\
  !*** ./src/assets/js/checkIfMine.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkIfMine)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _changeSmile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeSmile.js */ \"./src/assets/js/changeSmile.js\");\n/* harmony import */ var _showOtherMines_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showOtherMines.js */ \"./src/assets/js/showOtherMines.js\");\n/* harmony import */ var _showResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showResult.js */ \"./src/assets/js/showResult.js\");\n/* harmony import */ var _playAudio_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playAudio.js */ \"./src/assets/js/playAudio.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction checkIfMine(id) {\r\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id] === 'mine') {\r\n    (0,_changeSmile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('mine');\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame = true;\r\n    const cell = document.getElementById(id);\r\n    cell.classList.add('field__cell_boom');\r\n    (0,_showOtherMines_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\r\n    (0,_showResult_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('mine');\r\n    (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('mine');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/checkIfMine.js?");

/***/ }),

/***/ "./src/assets/js/checkIfWin.js":
/*!*************************************!*\
  !*** ./src/assets/js/checkIfWin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkIfWin)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _changeSmile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeSmile.js */ \"./src/assets/js/changeSmile.js\");\n/* harmony import */ var _showResult_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showResult.js */ \"./src/assets/js/showResult.js\");\n/* harmony import */ var _playAudio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playAudio.js */ \"./src/assets/js/playAudio.js\");\n/* harmony import */ var _setToLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setToLocalStorage.js */ \"./src/assets/js/setToLocalStorage.js\");\n\n\n\n\n\n\nfunction checkIfWin(id) {\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.length === (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells - _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfMines) && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.includes(id)) {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame = true;\n    (0,_setToLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    (0,_changeSmile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('win');\n    (0,_showResult_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('win');\n    (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('win');\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/checkIfWin.js?");

/***/ }),

/***/ "./src/assets/js/checkIfZero.js":
/*!**************************************!*\
  !*** ./src/assets/js/checkIfZero.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkIfZero)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _returnNeighbours_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnNeighbours.js */ \"./src/assets/js/returnNeighbours.js\");\n\r\n\r\n\r\nfunction checkIfZero(id) {\r\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id] === 0) {\r\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen.includes(+id)) {\r\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen.push(+id);\r\n    }\r\n    const neighbours = (0,_returnNeighbours_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(+id);\r\n\r\n    for (let i = 0; i < neighbours.length; i += 1) {\r\n      if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.includes(neighbours[i])\r\n      && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.includes(neighbours[i])\r\n      && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen.includes(neighbours[i])) {\r\n        _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen.push(neighbours[i]);\r\n        checkIfZero(neighbours[i]);\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/checkIfZero.js?");

/***/ }),

/***/ "./src/assets/js/countNeighboursMines.js":
/*!***********************************************!*\
  !*** ./src/assets/js/countNeighboursMines.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ countNeighboursMines)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _returnNeighbours_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnNeighbours.js */ \"./src/assets/js/returnNeighbours.js\");\n\r\n\r\n\r\nfunction countNeighboursMines() {\r\n  function createStartDataForCells() {\r\n    for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells; i += 1) {\r\n      if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.includes(i)) {\r\n        _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[i] = 'mine';\r\n      } else {\r\n        _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[i] = 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  function increaseNeighbours(id) {\r\n    if (String(id) in _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums && !(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id] === 'mine')) {\r\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id] += 1;\r\n    }\r\n  }\r\n\r\n  createStartDataForCells();\r\n  for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.length; i += 1) {\r\n    const mineId = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines[i];\r\n    const neighbours = (0,_returnNeighbours_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mineId);\r\n    for (let j = 0; j < neighbours.length; j += 1) {\r\n      increaseNeighbours(neighbours[j]);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/countNeighboursMines.js?");

/***/ }),

/***/ "./src/assets/js/createBody.js":
/*!*************************************!*\
  !*** ./src/assets/js/createBody.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBody)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\r\n\r\nfunction createBody() {\r\n  function addNode(strNode, strClass, parentNode, strIn = '') {\r\n    const node = document.createElement(`${strNode}`);\r\n    node.className = `${strClass}`;\r\n    if (strIn.length) {\r\n      node.innerHTML = strIn;\r\n    }\r\n    parentNode.append(node);\r\n  }\r\n\r\n  document.body.textContent = '';\r\n  addNode('header', 'header', document.body);\r\n  addNode('div', 'wrapper header-wrapper', document.querySelector('.header'));\r\n  addNode('h1', 'logo', document.querySelector('.wrapper.header-wrapper'), 'Minesweeper');\r\n  addNode('nav', 'header__nav header-nav', document.querySelector('.wrapper.header-wrapper'));\r\n  addNode('input', 'header-nav__menu-toggle', document.querySelector('.header__nav.header-nav'));\r\n  document.querySelector('.header-nav__menu-toggle').setAttribute('id', 'menu-toggle');\r\n  document.querySelector('.header-nav__menu-toggle').setAttribute('type', 'checkbox');\r\n  addNode('label', 'header-nav__menu-btn', document.querySelector('.header__nav.header-nav'));\r\n  document.querySelector('.header-nav__menu-btn').setAttribute('for', 'menu-toggle');\r\n  addNode('span', 'header-nav__hamburger-line', document.querySelector('.header-nav__menu-btn'));\r\n  addNode('ul', 'header-nav__ul', document.querySelector('.header__nav.header-nav'));\r\n  addNode('li', 'header-nav__li', document.querySelector('.header-nav__ul'), 'New Game');\r\n  addNode('li', 'header-nav__li', document.querySelector('.header-nav__ul'), 'Records');\r\n  addNode('main', 'main', document.body);\r\n  addNode('div', 'wrapper main-wrapper', document.querySelector('.main'));\r\n  addNode('div', 'stat', document.querySelector('.wrapper.main-wrapper'));\r\n  addNode('div', 'stat__timer', document.querySelector('.stat'), 'Time: ');\r\n  addNode('span', 'stat__seconds', document.querySelector('.stat__timer'), '00');\r\n  addNode('div', 'stat__player', document.querySelector('.stat'));\r\n  addNode('div', 'stat__moves', document.querySelector('.stat'), 'Moves: ');\r\n  addNode('span', 'stat__num-moves', document.querySelector('.stat__moves'), '00');\r\n  let fieldClass = 'field field-';\r\n  fieldClass += _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty;\r\n  addNode('div', fieldClass, document.querySelector('.wrapper.main-wrapper'));\r\n  for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells; i += 1) {\r\n    addNode('div', 'field__cell', document.querySelector('.field'));\r\n    document.querySelectorAll('.field__cell')[i].setAttribute('id', i);\r\n  }\r\n  addNode('div', 'settings', document.querySelector('.wrapper.main-wrapper'));\r\n  addNode('div', 'settings__sound', document.querySelector('.settings'), 'Sound');\r\n  addNode('div', 'settings__difficulty', document.querySelector('.settings'), 'Difficulty');\r\n  addNode('footer', 'footer', document.body);\r\n  addNode('div', 'wrapper footer-wrapper', document.querySelector('.footer'));\r\n  addNode('a', 'footer__github', document.querySelector('.wrapper.footer-wrapper'));\r\n  document.querySelector('.footer__github').setAttribute('href', 'https://github.com/a-v-gor');\r\n  addNode('div', 'footer__year', document.querySelector('.wrapper.footer-wrapper'), '2023');\r\n  addNode('a', 'footer__rss-logo', document.querySelector('.wrapper.footer-wrapper'));\r\n  document.querySelector('.footer__rss-logo').setAttribute('href', 'https://rs.school/js/');\r\n  addNode('div', 'rezult-msg rezult-msg_unactive', document.querySelector('.main'));\r\n  addNode('p', 'rezult-msg__text', document.querySelector('.rezult-msg'));\r\n  addNode('div', 'rezult-msg__btn', document.querySelector('.rezult-msg'), 'Close');\r\n  addNode('div', 'settings__window settings__window_unactive', document.querySelector('.main'));\r\n  addNode('h2', 'settings__header', document.querySelector('.settings__window'), 'Set Your Game');\r\n  addNode('form', 'settings__field-size-form', document.querySelector('.settings__window'));\r\n  addNode('fieldset', 'settings__field-size-fieldset', document.querySelector('.settings__field-size-form'));\r\n  addNode('legend', 'settings__field-size-legend', document.querySelector('.settings__field-size-fieldset'), 'Select field size');\r\n  addNode('div', 'settings__field-size-sizes', document.querySelector('.settings__field-size-fieldset'));\r\n  addNode('div', 'settings__field-size-wrap', document.querySelector('.settings__field-size-sizes'));\r\n  addNode('input', 'settings__field-size-radio', document.querySelector('.settings__field-size-wrap'));\r\n  document.querySelector('.settings__field-size-radio').setAttribute('type', 'radio');\r\n  document.querySelector('.settings__field-size-radio').setAttribute('id', 'easy');\r\n  document.querySelector('.settings__field-size-radio').setAttribute('name', 'field-size');\r\n  document.querySelector('.settings__field-size-radio').setAttribute('checked', '');\r\n  addNode('label', 'settings__field-size-label', document.querySelector('.settings__field-size-wrap'), 'easy (10 * 10)');\r\n  document.querySelector('.settings__field-size-label').setAttribute('for', 'easy');\r\n  addNode('div', 'settings__field-size-wrap', document.querySelector('.settings__field-size-sizes'));\r\n  addNode('input', 'settings__field-size-radio', document.querySelectorAll('.settings__field-size-wrap')[1]);\r\n  document.querySelectorAll('.settings__field-size-radio')[1].setAttribute('type', 'radio');\r\n  document.querySelectorAll('.settings__field-size-radio')[1].setAttribute('id', 'medium');\r\n  document.querySelectorAll('.settings__field-size-radio')[1].setAttribute('name', 'field-size');\r\n  addNode('label', 'settings__field-size-label', document.querySelectorAll('.settings__field-size-wrap')[1], 'medium (15 * 15)');\r\n  document.querySelectorAll('.settings__field-size-label')[1].setAttribute('for', 'medium');\r\n  addNode('div', 'settings__field-size-wrap', document.querySelector('.settings__field-size-sizes'));\r\n  addNode('input', 'settings__field-size-radio', document.querySelectorAll('.settings__field-size-wrap')[2]);\r\n  document.querySelectorAll('.settings__field-size-radio')[2].setAttribute('type', 'radio');\r\n  document.querySelectorAll('.settings__field-size-radio')[2].setAttribute('id', 'hard');\r\n  document.querySelectorAll('.settings__field-size-radio')[2].setAttribute('name', 'field-size');\r\n  addNode('label', 'settings__field-size-label', document.querySelectorAll('.settings__field-size-wrap')[2], 'hard (25 * 25)');\r\n  document.querySelectorAll('.settings__field-size-label')[2].setAttribute('for', 'hard');\r\n  addNode('fieldset', 'settings__field-size-fieldset', document.querySelector('.settings__field-size-form'));\r\n  addNode('legend', 'settings__field-size-legend', document.querySelectorAll('.settings__field-size-fieldset')[1], 'Choose number of mines');\r\n  addNode('select', 'settings__num-mines-select', document.querySelectorAll('.settings__field-size-fieldset')[1]);\r\n  document.querySelector('.settings__num-mines-select').setAttribute('name', 'num-mines');\r\n  document.querySelector('.settings__num-mines-select').setAttribute('multiple', '');\r\n  for (let i = 10; i < 100; i += 1) {\r\n    addNode('option', 'settings__num-mines-option', document.querySelector('.settings__num-mines-select'), `${i}`);\r\n    document.querySelectorAll('.settings__num-mines-option')[i - 10].setAttribute('value', i);\r\n  }\r\n  document.querySelector('.settings__num-mines-option').setAttribute('selected', '');\r\n  addNode('input', 'settings__submit', document.querySelector('.settings__field-size-form'), 'Submit');\r\n  document.querySelector('.settings__submit').setAttribute('type', 'submit');\r\n  addNode('div', 'records records_unactive', document.querySelector('.main'));\r\n  addNode('h2', 'records__title', document.querySelector('.records'), 'Records');\r\n  addNode('div', 'records__table', document.querySelector('.records'));\r\n  addNode('h2', 'records__btn', document.querySelector('.records'), 'Close');\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/createBody.js?");

/***/ }),

/***/ "./src/assets/js/data.js":
/*!*******************************!*\
  !*** ./src/assets/js/data.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = {\r\n  difficulty: 'easy',\r\n  numOfCells: 0,\r\n  numOfMines: 10,\r\n  mines: [],\r\n  openedCells: [],\r\n  flagCells: [],\r\n  nums: {},\r\n  stopGame: false,\r\n  timerId: null,\r\n  seconds: 0,\r\n  moves: 0,\r\n  sound: true,\r\n  toOpen: [],\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/data.js?");

/***/ }),

/***/ "./src/assets/js/increaseNum.js":
/*!**************************************!*\
  !*** ./src/assets/js/increaseNum.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ increaseNum)\n/* harmony export */ });\nfunction increaseNum(elemClass) {\n  const element = document.querySelector(elemClass);\n  let num = +element.textContent;\n  num += 1;\n  element.textContent = num;\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/increaseNum.js?");

/***/ }),

/***/ "./src/assets/js/openCell.js":
/*!***********************************!*\
  !*** ./src/assets/js/openCell.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openCell)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _showCellValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showCellValue.js */ \"./src/assets/js/showCellValue.js\");\n\r\n\r\n\r\nfunction openCell(id) {\r\n  const cell = document.getElementById(id);\r\n  const val = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id];\r\n  cell.classList.remove('field__cell_push');\r\n  cell.classList.add('field__cell_unpush');\r\n\r\n  if (val !== 'mine' && val !== 0) {\r\n    let newClasslist = '';\r\n    if (val === 1) {\r\n      newClasslist = 'field__cell-one';\r\n    } else if (val === 2) {\r\n      newClasslist = 'field__cell-two';\r\n    } else if (val === 3) {\r\n      newClasslist = 'field__cell-three';\r\n    } else if (val === 4) {\r\n      newClasslist = 'field__cell-four';\r\n    } else if (val === 5) {\r\n      newClasslist = 'field__cell-five';\r\n    } else if (val === 6) {\r\n      newClasslist = 'field__cell-six';\r\n    } else if (val === 7) {\r\n      newClasslist = 'field__cell-seven';\r\n    } else if (val === 8) {\r\n      newClasslist = 'field__cell-eight';\r\n    }\r\n    cell.classList.add(newClasslist);\r\n  }\r\n  if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.includes(+id)) {\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.push(+id);\r\n  }\r\n  (0,_showCellValue_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/openCell.js?");

/***/ }),

/***/ "./src/assets/js/playAudio.js":
/*!************************************!*\
  !*** ./src/assets/js/playAudio.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playAudio)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\n\nfunction playAudio(str) {\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound) {\n    let sourceStr = '';\n\n    if (str === 'click') {\n      sourceStr = './assets/audio/click.mp3';\n    } else if (str === 'flag') {\n      sourceStr = './assets/audio/flag.mp3';\n    } else if (str === 'mine') {\n      sourceStr = './assets/audio/mine.mp3';\n    } else if (str === 'win') {\n      sourceStr = './assets/audio/win.mp3';\n    }\n\n    const audio = new Audio(sourceStr);\n    audio.play();\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/playAudio.js?");

/***/ }),

/***/ "./src/assets/js/returnNeighbours.js":
/*!*******************************************!*\
  !*** ./src/assets/js/returnNeighbours.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnNeighbours)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\r\n\r\nfunction returnNeighbours(id) {\r\n  let neighboursFull;\r\n  let neighboursStartLine;\r\n  let neighboursEndLine;\r\n\r\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'easy') {\r\n    neighboursFull = [-11, -10, -9, -1, 1, 9, 10, 11];\r\n    neighboursStartLine = [-10, -9, 1, 10, 11];\r\n    neighboursEndLine = [-11, -10, -1, 9, 10];\r\n  } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'medium') {\r\n    neighboursFull = [-16, -15, -14, -1, 1, 14, 15, 16];\r\n    neighboursStartLine = [-15, -14, 1, 15, 16];\r\n    neighboursEndLine = [-16, -15, -1, 14, 15];\r\n  } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'hard') {\r\n    neighboursFull = [-26, -25, -24, -1, 1, 24, 25, 26];\r\n    neighboursStartLine = [-25, -24, 1, 25, 26];\r\n    neighboursEndLine = [-26, -25, -1, 24, 25];\r\n  }\r\n\r\n  function createResult(arr) {\r\n    const rezult = [];\r\n    for (let i = 0; i < arr.length; i += 1) {\r\n      const num = id + arr[i];\r\n      if (num >= 0 && num < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells) {\r\n        rezult.push(num);\r\n      }\r\n    }\r\n    return rezult;\r\n  }\r\n\r\n  let neighbours;\r\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'easy') {\r\n    if (String(id).at(-1) === '0') {\r\n      neighbours = neighboursStartLine;\r\n    } else if (String(id).at(-1) === '9') {\r\n      neighbours = neighboursEndLine;\r\n    } else {\r\n      neighbours = neighboursFull;\r\n    }\r\n  } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'medium') {\r\n    if (id === 0 || id % 15 === 0) {\r\n      neighbours = neighboursStartLine;\r\n    } else if ((id + 1) % 15 === 0) {\r\n      neighbours = neighboursEndLine;\r\n    } else {\r\n      neighbours = neighboursFull;\r\n    }\r\n  } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'hard') {\r\n    if (id === 0 || id % 25 === 0) {\r\n      neighbours = neighboursStartLine;\r\n    } else if ((id + 1) % 25 === 0) {\r\n      neighbours = neighboursEndLine;\r\n    } else {\r\n      neighbours = neighboursFull;\r\n    }\r\n  }\r\n\r\n  return createResult(neighbours);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/returnNeighbours.js?");

/***/ }),

/***/ "./src/assets/js/scatterMines.js":
/*!***************************************!*\
  !*** ./src/assets/js/scatterMines.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scatterMines)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\r\n\r\nfunction scatterMines() {\r\n  while (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.length < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfMines) {\r\n    const rand = Math.floor(Math.random() * _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells);\r\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.includes(rand) && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.includes(rand)) {\r\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.push(rand);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/scatterMines.js?");

/***/ }),

/***/ "./src/assets/js/setSettings.js":
/*!**************************************!*\
  !*** ./src/assets/js/setSettings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setSettings)\n/* harmony export */ });\nfunction setSettings() {\r\n  document.querySelector('.settings__window').classList.remove('settings__window_unactive');\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/setSettings.js?");

/***/ }),

/***/ "./src/assets/js/setToLocalStorage.js":
/*!********************************************!*\
  !*** ./src/assets/js/setToLocalStorage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\r\n\r\nfunction setToLocalStorage() {\r\n  const arr = JSON.parse(localStorage.getItem('minesweeper-records')) || [];\r\n  const newRec = {\r\n    date: new Date(),\r\n    moves: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moves,\r\n    seconds: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].seconds,\r\n    difficulty: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty,\r\n    mines: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfMines,\r\n  };\r\n\r\n  arr.push(newRec);\r\n  localStorage.setItem('minesweeper-records', JSON.stringify(arr));\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/setToLocalStorage.js?");

/***/ }),

/***/ "./src/assets/js/showCellValue.js":
/*!****************************************!*\
  !*** ./src/assets/js/showCellValue.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showCellValue)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\r\n\r\nfunction showCellValue(id) {\r\n  const cell = document.getElementById(id);\r\n  if (!cell.innerHTML.length) {\r\n    if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id] === 'mine') {\r\n      const img = document.createElement('img');\r\n      img.className = 'field__img';\r\n      img.setAttribute('src', './assets/img/bomb.svg');\r\n      cell.append(img);\r\n    } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id] !== 0) {\r\n      cell.textContent = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id];\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/showCellValue.js?");

/***/ }),

/***/ "./src/assets/js/showOtherMines.js":
/*!*****************************************!*\
  !*** ./src/assets/js/showOtherMines.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showOtherMines)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _openCell_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openCell.js */ \"./src/assets/js/openCell.js\");\n\r\n\r\n\r\nfunction showOtherMines(id) {\r\n  const mines = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.filter((item) => item !== +id);\r\n  for (let i = 0; i < mines.length; i += 1) {\r\n    (0,_openCell_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mines[i]);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/showOtherMines.js?");

/***/ }),

/***/ "./src/assets/js/showRecords.js":
/*!**************************************!*\
  !*** ./src/assets/js/showRecords.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showRecords)\n/* harmony export */ });\nfunction showRecords() {\r\n  let arr;\r\n  if (localStorage.getItem('minesweeper-records')) {\r\n    arr = JSON.parse(localStorage.getItem('minesweeper-records'));\r\n  }\r\n\r\n  function firstZero(str) {\r\n    return (str.length === 1) ? 0 + str : str;\r\n  }\r\n\r\n  function createLine(obj) {\r\n    const valuesArr = Object.values(obj);\r\n    for (let i = 0; i < valuesArr.length; i += 1) {\r\n      const node = document.createElement('div');\r\n      node.className = 'records__cell';\r\n      if (i === 0) {\r\n        const date = new Date(valuesArr[i]);\r\n        const str = `${date.getDate()}.${firstZero(String(Number(date.getMonth()) + 1))}.${String(date.getFullYear()).slice(2)} ${firstZero(String(date.getHours()))}:${firstZero(String(date.getMinutes()))}`;\r\n        node.innerHTML = str;\r\n      } else {\r\n        node.innerHTML = valuesArr[i];\r\n      }\r\n      document.querySelector('.records__table').append(node);\r\n    }\r\n  }\r\n\r\n  function hideRecords() {\r\n    document.querySelector('.records').classList.add('records_unactive');\r\n  }\r\n\r\n  document.querySelector('.records__table').innerHTML = `<div class=\"records__cell\">Date</div>\r\n  <div class=\"records__cell\">Moves</div><div class=\"records__cell\">Seconds</div>\r\n  <div class=\"records__cell\">Diff</div><div class=\"records__cell\">Mines</div>`;\r\n\r\n  if (localStorage.getItem('minesweeper-records')) {\r\n    if (arr.length > 9) {\r\n      arr.shift();\r\n    }\r\n\r\n    for (let i = 0; i < arr.length; i += 1) {\r\n      createLine(arr[i]);\r\n    }\r\n  }\r\n\r\n  document.querySelector('.records').classList.remove('records_unactive');\r\n\r\n  document.querySelector('.records__btn').addEventListener('click', hideRecords);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/showRecords.js?");

/***/ }),

/***/ "./src/assets/js/showResult.js":
/*!*************************************!*\
  !*** ./src/assets/js/showResult.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showResult)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\n\nfunction showResult(rez) {\n  let str = '';\n  if (rez === 'win') {\n    str = `Hooray! You found all mines in ${_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].seconds} seconds and ${_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moves} moves!`;\n  } else if (rez === 'mine') {\n    str = 'Game over. Try again';\n  }\n\n  document.querySelector('.rezult-msg__text').textContent = str;\n  document.querySelector('.rezult-msg').classList.remove('rezult-msg_unactive');\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/showResult.js?");

/***/ }),

/***/ "./src/assets/js/startGame.js":
/*!************************************!*\
  !*** ./src/assets/js/startGame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _createBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBody.js */ \"./src/assets/js/createBody.js\");\n/* harmony import */ var _checkClick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkClick.js */ \"./src/assets/js/checkClick.js\");\n/* harmony import */ var _calcSettings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcSettings.js */ \"./src/assets/js/calcSettings.js\");\n\r\n\r\n\r\n\r\n\r\nfunction startGame() {\r\n  function startNewGame() {\r\n    clearTimeout(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timerId);\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame = false;\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines = [];\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells = [];\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells = [];\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums = {};\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].seconds = 0;\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moves = 0;\r\n    startGame();\r\n  }\r\n\r\n  function getSettings(event) {\r\n    event.preventDefault();\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty = document.querySelector('.settings__field-size-radio:checked').id;\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfMines = document.querySelector('.settings__num-mines-option:checked').value;\r\n    startNewGame();\r\n  }\r\n\r\n  (0,_calcSettings_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  (0,_createBody_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_checkClick_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  document.querySelector('.rezult-msg__btn').addEventListener('click', startNewGame);\r\n  document.querySelector('.header-nav__li').addEventListener('click', startNewGame);\r\n  document.querySelector('.settings__field-size-form').addEventListener('submit', getSettings);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/startGame.js?");

/***/ }),

/***/ "./src/assets/js/timer.js":
/*!********************************!*\
  !*** ./src/assets/js/timer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ timer)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _increaseNum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./increaseNum.js */ \"./src/assets/js/increaseNum.js\");\n\n\n\nfunction timer() {\n  if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame) {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timerId = setTimeout(timer, 1000);\n    (0,_increaseNum_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.stat__seconds');\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].seconds += 1;\n  } else {\n    clearTimeout(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timerId);\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/timer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/normalize.css */ \"./src/assets/css/normalize.css\");\n/* harmony import */ var _assets_css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/main.scss */ \"./src/assets/css/main.scss\");\n/* harmony import */ var _assets_js_startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/startGame.js */ \"./src/assets/js/startGame.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', _assets_js_startGame_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\n\n//# sourceURL=webpack://minesweeper/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;