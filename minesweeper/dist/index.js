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

/***/ "./src/assets/js/addField.js":
/*!***********************************!*\
  !*** ./src/assets/js/addField.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addField)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _addNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNode.js */ \"./src/assets/js/addNode.js\");\n\r\n\r\n\r\nfunction addField() {\r\n  const field = document.querySelector('.field');\r\n  if (field) {\r\n    field.remove();\r\n  }\r\n  const fieldClass = `field field-${_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty}`;\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', fieldClass, document.querySelector('.field-wrapper'));\r\n  for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells; i += 1) {\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'field__cell', document.querySelector('.field'));\r\n    document.querySelectorAll('.field__cell')[i].setAttribute('id', i);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/addField.js?");

/***/ }),

/***/ "./src/assets/js/addNode.js":
/*!**********************************!*\
  !*** ./src/assets/js/addNode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addNode)\n/* harmony export */ });\nfunction addNode(strNode, strClass, parentNode, strIn = '') {\r\n  const node = document.createElement(`${strNode}`);\r\n  node.className = `${strClass}`;\r\n  if (strIn.length) {\r\n    node.innerHTML = strIn;\r\n  }\r\n  parentNode.append(node);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/addNode.js?");

/***/ }),

/***/ "./src/assets/js/applySettings.js":
/*!****************************************!*\
  !*** ./src/assets/js/applySettings.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ applySettings)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _startNewGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startNewGame.js */ \"./src/assets/js/startNewGame.js\");\n\n\n\nfunction applySettings(event) {\n  event.preventDefault();\n  _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty = document.querySelector('.settings__field-size-radio:checked').id;\n  _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfMines = document.querySelector('.settings__num-mines').value;\n  _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newSettings = true;\n  (0,_startNewGame_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/applySettings.js?");

/***/ }),

/***/ "./src/assets/js/applyTheme.js":
/*!*************************************!*\
  !*** ./src/assets/js/applyTheme.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ applyTheme)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\n\nfunction applyTheme() {\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].theme === 'dark') {\n    document.body.classList.add('body_dark-theme');\n  } else {\n    document.body.classList.remove('body_dark-theme');\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/applyTheme.js?");

/***/ }),

/***/ "./src/assets/js/calcSettings.js":
/*!***************************************!*\
  !*** ./src/assets/js/calcSettings.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ calcSettings)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\n\nfunction calcSettings() {\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'easy') {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells = 100;\n  } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'medium') {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells = 225;\n  } else {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells = 625;\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/calcSettings.js?");

/***/ }),

/***/ "./src/assets/js/changeMinesNum.js":
/*!*****************************************!*\
  !*** ./src/assets/js/changeMinesNum.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeMinesNum)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\r\n\r\nfunction changeMinesNum(event) {\r\n  let interval = 300;\r\n\r\n  function func() {\r\n    const numVal = +document.querySelector('.settings__num-mines').value;\r\n    let newNum = 0;\r\n    if (event.target.classList.value === 'settings__num-mines-decrease') {\r\n      newNum = numVal - 1;\r\n    } else {\r\n      newNum = numVal + 1;\r\n    }\r\n    if (newNum >= 10 && newNum <= 99) {\r\n      document.querySelector('.settings__num-mines').value = newNum;\r\n    } else if (newNum < 10) {\r\n      document.querySelector('.settings__num-mines').value = 10;\r\n    } else {\r\n      document.querySelector('.settings__num-mines').value = 99;\r\n    }\r\n    interval -= 10;\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].intervalNumMines = setTimeout(func, interval -= 10);\r\n  }\r\n\r\n  _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].intervalNumMines = setTimeout(func, 0);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/changeMinesNum.js?");

/***/ }),

/***/ "./src/assets/js/changeSmile.js":
/*!**************************************!*\
  !*** ./src/assets/js/changeSmile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeSmile)\n/* harmony export */ });\nfunction changeSmile(str) {\r\n  const smile = document.querySelector('.stat__player');\r\n\r\n  if (str === 'push') {\r\n    smile.classList.add('stat__player_push');\r\n  }\r\n  if (str === 'unpush') {\r\n    smile.classList.remove('stat__player_push');\r\n  }\r\n  if (str === 'mine') {\r\n    smile.classList.add('stat__player_mine');\r\n  }\r\n  if (str === 'win') {\r\n    smile.classList.add('stat__player_win');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/changeSmile.js?");

/***/ }),

/***/ "./src/assets/js/changeTheme.js":
/*!**************************************!*\
  !*** ./src/assets/js/changeTheme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeTheme)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _applyTheme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applyTheme.js */ \"./src/assets/js/applyTheme.js\");\n\n\n\nfunction changeTheme() {\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].theme === 'light') {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].theme = 'dark';\n  } else {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].theme = 'light';\n  }\n  (0,_applyTheme_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/changeTheme.js?");

/***/ }),

/***/ "./src/assets/js/checkClick.js":
/*!*************************************!*\
  !*** ./src/assets/js/checkClick.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkClick)\n/* harmony export */ });\n/* harmony import */ var _showSettingsWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showSettingsWindow.js */ \"./src/assets/js/showSettingsWindow.js\");\n/* harmony import */ var _showRecords_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showRecords.js */ \"./src/assets/js/showRecords.js\");\n/* harmony import */ var _toggleSound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleSound.js */ \"./src/assets/js/toggleSound.js\");\n/* harmony import */ var _pushFlag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pushFlag.js */ \"./src/assets/js/pushFlag.js\");\n/* harmony import */ var _unpushCell_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unpushCell.js */ \"./src/assets/js/unpushCell.js\");\n/* harmony import */ var _pushCell_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pushCell.js */ \"./src/assets/js/pushCell.js\");\n/* harmony import */ var _changeTheme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changeTheme.js */ \"./src/assets/js/changeTheme.js\");\n/* harmony import */ var _hideSettingsWindow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hideSettingsWindow.js */ \"./src/assets/js/hideSettingsWindow.js\");\n/* harmony import */ var _changeMinesNum_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./changeMinesNum.js */ \"./src/assets/js/changeMinesNum.js\");\n/* harmony import */ var _clearChangeMinesNum_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clearChangeMinesNum.js */ \"./src/assets/js/clearChangeMinesNum.js\");\n/* harmony import */ var _saveGame_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./saveGame.js */ \"./src/assets/js/saveGame.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction checkClick() {\r\n  const field = document.querySelector('.field');\r\n  const soundBtn = document.querySelector('.settings__sound');\r\n  const settingsBtn = document.querySelector('.settings__difficulty');\r\n  const recordsBtn = document.querySelectorAll('.header-nav__li')[1];\r\n  const themeBtn = document.querySelector('.theme');\r\n  const decreaseMinesBtn = document.querySelector('.settings__num-mines-decrease');\r\n  const increaseMinesBtn = document.querySelector('.settings__num-mines-increase');\r\n  const saveGameBtn = document.querySelector('.settings__save');\r\n\r\n  saveGameBtn.addEventListener('click', _saveGame_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\r\n  increaseMinesBtn.addEventListener('mousedown', _changeMinesNum_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\n  decreaseMinesBtn.addEventListener('mousedown', _changeMinesNum_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\n  increaseMinesBtn.addEventListener('mouseup', _clearChangeMinesNum_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\r\n  decreaseMinesBtn.addEventListener('mouseup', _clearChangeMinesNum_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\r\n  themeBtn.addEventListener('click', _changeTheme_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\r\n  recordsBtn.addEventListener('click', _showRecords_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  settingsBtn.addEventListener('click', _showSettingsWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n  soundBtn.addEventListener('click', _toggleSound_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n  field.addEventListener('mousedown', _pushCell_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\r\n  document.body.addEventListener('mouseup', _unpushCell_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n  field.addEventListener('contextmenu', _pushFlag_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n  document.querySelector('.settings__reject').addEventListener('click', _hideSettingsWindow_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/checkClick.js?");

/***/ }),

/***/ "./src/assets/js/checkIfMine.js":
/*!**************************************!*\
  !*** ./src/assets/js/checkIfMine.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkIfMine)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _changeSmile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeSmile.js */ \"./src/assets/js/changeSmile.js\");\n/* harmony import */ var _showOtherMines_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showOtherMines.js */ \"./src/assets/js/showOtherMines.js\");\n/* harmony import */ var _showResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showResult.js */ \"./src/assets/js/showResult.js\");\n/* harmony import */ var _playAudio_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playAudio.js */ \"./src/assets/js/playAudio.js\");\n/* harmony import */ var _clearSavedGame_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearSavedGame.js */ \"./src/assets/js/clearSavedGame.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction checkIfMine(id) {\r\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id] === 'mine') {\r\n    (0,_changeSmile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('mine');\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame = true;\r\n    const cell = document.getElementById(id);\r\n    cell.classList.add('field__cell_boom');\r\n    (0,_showOtherMines_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\r\n    (0,_showResult_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('mine');\r\n    (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('mine');\r\n    clearInterval(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timerId);\r\n    (0,_clearSavedGame_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/checkIfMine.js?");

/***/ }),

/***/ "./src/assets/js/checkIfWin.js":
/*!*************************************!*\
  !*** ./src/assets/js/checkIfWin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkIfWin)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _changeSmile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeSmile.js */ \"./src/assets/js/changeSmile.js\");\n/* harmony import */ var _showResult_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showResult.js */ \"./src/assets/js/showResult.js\");\n/* harmony import */ var _playAudio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playAudio.js */ \"./src/assets/js/playAudio.js\");\n/* harmony import */ var _saveRecord_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saveRecord.js */ \"./src/assets/js/saveRecord.js\");\n/* harmony import */ var _clearSavedGame_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearSavedGame.js */ \"./src/assets/js/clearSavedGame.js\");\n\n\n\n\n\n\n\nfunction checkIfWin() {\n  if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame && _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.length === (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells - _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfMines)) {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame = true;\n    (0,_saveRecord_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    (0,_changeSmile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('win');\n    (0,_showResult_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('win');\n    (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('win');\n    clearInterval(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timerId);\n    (0,_clearSavedGame_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/checkIfWin.js?");

/***/ }),

/***/ "./src/assets/js/checkIfZero.js":
/*!**************************************!*\
  !*** ./src/assets/js/checkIfZero.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkIfZero)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _returnNeighbours_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnNeighbours.js */ \"./src/assets/js/returnNeighbours.js\");\n\r\n\r\n\r\nfunction checkIfZero(id) {\r\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id] === 0) {\r\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen.includes(+id)) {\r\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen.push(+id);\r\n    }\r\n    const neighbours = (0,_returnNeighbours_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(+id);\r\n\r\n    for (let i = 0; i < neighbours.length; i += 1) {\r\n      if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.includes(neighbours[i])\r\n      && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.includes(neighbours[i])\r\n      && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen.includes(neighbours[i])) {\r\n        _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen.push(neighbours[i]);\r\n        checkIfZero(neighbours[i]);\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/checkIfZero.js?");

/***/ }),

/***/ "./src/assets/js/clearChangeMinesNum.js":
/*!**********************************************!*\
  !*** ./src/assets/js/clearChangeMinesNum.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearChangeMinesNum)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\r\n\r\nfunction clearChangeMinesNum() {\r\n  clearTimeout(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].intervalNumMines);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/clearChangeMinesNum.js?");

/***/ }),

/***/ "./src/assets/js/clearSavedGame.js":
/*!*****************************************!*\
  !*** ./src/assets/js/clearSavedGame.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearSavedGame)\n/* harmony export */ });\nfunction clearSavedGame() {\n  localStorage.removeItem('a-v-gor-minesweeper-save');\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/clearSavedGame.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBody)\n/* harmony export */ });\n/* harmony import */ var _addNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNode.js */ \"./src/assets/js/addNode.js\");\n/* harmony import */ var _addField_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addField.js */ \"./src/assets/js/addField.js\");\n\r\n\r\n\r\nfunction createBody() {\r\n  document.body.textContent = '';\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('header', 'header', document.body);\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'wrapper header-wrapper', document.querySelector('.header'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'logo', document.querySelector('.header-wrapper'), 'Minesweeper');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'theme', document.querySelector('.header-wrapper'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('nav', 'header__nav header-nav', document.querySelector('.header-wrapper'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', 'header-nav__menu-toggle', document.querySelector('.header__nav.header-nav'));\r\n  document.querySelector('.header-nav__menu-toggle').setAttribute('id', 'menu-toggle');\r\n  document.querySelector('.header-nav__menu-toggle').setAttribute('type', 'checkbox');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', 'header-nav__menu-btn', document.querySelector('.header__nav.header-nav'));\r\n  document.querySelector('.header-nav__menu-btn').setAttribute('for', 'menu-toggle');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'header-nav__hamburger-line', document.querySelector('.header-nav__menu-btn'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', 'header-nav__ul', document.querySelector('.header__nav.header-nav'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'header-nav__li', document.querySelector('.header-nav__ul'), 'New Game');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'header-nav__li', document.querySelector('.header-nav__ul'), 'Records');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main', 'main', document.body);\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'wrapper main-wrapper', document.querySelector('.main'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'stat', document.querySelector('.main-wrapper'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'stat__left-block', document.querySelector('.stat'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'stat__timer', document.querySelector('.stat__left-block'), 'Time: ');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'stat__seconds', document.querySelector('.stat__timer'), '0');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'stat__moves', document.querySelector('.stat__left-block'), 'Moves: ');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'stat__num-moves', document.querySelector('.stat__moves'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'stat__player', document.querySelector('.stat'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'stat__right-block', document.querySelector('.stat'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'stat__flags', document.querySelector('.stat__right-block'), 'Flags: ');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'stat__num-flags', document.querySelector('.stat__flags'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'stat__mines', document.querySelector('.stat__right-block'), 'Mines: ');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', 'stat__num-mines', document.querySelector('.stat__mines'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'field-wrapper', document.querySelector('.main-wrapper'));\r\n  (0,_addField_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings', document.querySelector('.main-wrapper'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings__sound', document.querySelector('.settings'), 'Sound');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'button settings__save', document.querySelector('.settings'), 'Save');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'button settings__load', document.querySelector('.settings'), 'Load');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings__difficulty', document.querySelector('.settings'), 'Difficulty');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('footer', 'footer', document.body);\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'wrapper footer-wrapper', document.querySelector('.footer'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', 'footer__github', document.querySelector('.footer-wrapper'));\r\n  document.querySelector('.footer__github').setAttribute('href', 'https://github.com/a-v-gor');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'footer__year', document.querySelector('.footer-wrapper'), '2023');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', 'footer__rss-logo', document.querySelector('.footer-wrapper'));\r\n  document.querySelector('.footer__rss-logo').setAttribute('href', 'https://rs.school/js/');\r\n\r\n  // Add settings window\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings__window settings__window_unactive', document.querySelector('.main'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', 'settings__header', document.querySelector('.settings__window'), 'Set Your Game');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', 'settings__field-size-form', document.querySelector('.settings__window'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('fieldset', 'settings__field-size-fieldset', document.querySelector('.settings__field-size-form'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('legend', 'settings__field-size-legend', document.querySelector('.settings__field-size-fieldset'), 'Select field size');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings__field-size-sizes', document.querySelector('.settings__field-size-fieldset'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings__field-size-wrap', document.querySelector('.settings__field-size-sizes'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', 'settings__field-size-radio', document.querySelector('.settings__field-size-wrap'));\r\n  document.querySelector('.settings__field-size-radio').setAttribute('type', 'radio');\r\n  document.querySelector('.settings__field-size-radio').setAttribute('id', 'easy');\r\n  document.querySelector('.settings__field-size-radio').setAttribute('name', 'field-size');\r\n  document.querySelector('.settings__field-size-radio').setAttribute('checked', '');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', 'settings__field-size-label', document.querySelector('.settings__field-size-wrap'), 'easy (10 * 10)');\r\n  document.querySelector('.settings__field-size-label').setAttribute('for', 'easy');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings__field-size-wrap', document.querySelector('.settings__field-size-sizes'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', 'settings__field-size-radio', document.querySelectorAll('.settings__field-size-wrap')[1]);\r\n  document.querySelectorAll('.settings__field-size-radio')[1].setAttribute('type', 'radio');\r\n  document.querySelectorAll('.settings__field-size-radio')[1].setAttribute('id', 'medium');\r\n  document.querySelectorAll('.settings__field-size-radio')[1].setAttribute('name', 'field-size');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', 'settings__field-size-label', document.querySelectorAll('.settings__field-size-wrap')[1], 'medium (15 * 15)');\r\n  document.querySelectorAll('.settings__field-size-label')[1].setAttribute('for', 'medium');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings__field-size-wrap', document.querySelector('.settings__field-size-sizes'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', 'settings__field-size-radio', document.querySelectorAll('.settings__field-size-wrap')[2]);\r\n  document.querySelectorAll('.settings__field-size-radio')[2].setAttribute('type', 'radio');\r\n  document.querySelectorAll('.settings__field-size-radio')[2].setAttribute('id', 'hard');\r\n  document.querySelectorAll('.settings__field-size-radio')[2].setAttribute('name', 'field-size');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label', 'settings__field-size-label', document.querySelectorAll('.settings__field-size-wrap')[2], 'hard (25 * 25)');\r\n  document.querySelectorAll('.settings__field-size-label')[2].setAttribute('for', 'hard');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('fieldset', 'settings__field-size-fieldset', document.querySelector('.settings__field-size-form'));\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('legend', 'settings__field-size-legend', document.querySelectorAll('.settings__field-size-fieldset')[1], 'Enter number of mines');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'settings__num-mines-text', document.querySelectorAll('.settings__field-size-fieldset')[1], '(from 10 to 99)');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings__num-mines-wrap', document.querySelectorAll('.settings__field-size-fieldset')[1]);\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings__num-mines-decrease', document.querySelector('.settings__num-mines-wrap'), '⇩');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', 'settings__num-mines', document.querySelector('.settings__num-mines-wrap'));\r\n  document.querySelector('.settings__num-mines').setAttribute('name', 'num-mines');\r\n  document.querySelector('.settings__num-mines').setAttribute('type', 'number');\r\n  document.querySelector('.settings__num-mines').setAttribute('step', '1');\r\n  document.querySelector('.settings__num-mines').setAttribute('min', '10');\r\n  document.querySelector('.settings__num-mines').setAttribute('max', '99');\r\n  document.querySelector('.settings__num-mines').setAttribute('value', '10');\r\n  document.querySelector('.settings__num-mines').setAttribute('title', 'From 10 to 99');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'settings__num-mines-increase', document.querySelector('.settings__num-mines-wrap'), '⇧');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', 'button settings__submit', document.querySelector('.settings__field-size-form'));\r\n  document.querySelector('.settings__submit').setAttribute('type', 'submit');\r\n  document.querySelector('.settings__submit').setAttribute('value', 'Submit');\r\n  (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'button settings__reject', document.querySelector('.settings__window'), 'Cancel');\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/createBody.js?");

/***/ }),

/***/ "./src/assets/js/data.js":
/*!*******************************!*\
  !*** ./src/assets/js/data.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = {\r\n  difficulty: 'easy',\r\n  numOfCells: 0,\r\n  numOfMines: 10,\r\n  mines: [],\r\n  openedCells: [],\r\n  flagCells: [],\r\n  nums: {},\r\n  stopGame: false,\r\n  timerId: null,\r\n  seconds: 0,\r\n  moves: 0,\r\n  sound: true,\r\n  toOpen: [],\r\n  newSettings: false,\r\n  theme: 'light',\r\n  intervalNumMines: null,\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/data.js?");

/***/ }),

/***/ "./src/assets/js/hideRecords.js":
/*!**************************************!*\
  !*** ./src/assets/js/hideRecords.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hideRecords)\n/* harmony export */ });\nfunction hideRecords() {\n  function removeRecordsTable() {\n    document.querySelector('.records').removeEventListener('transitionend', removeRecordsTable);\n    document.querySelector('.records').remove();\n  }\n\n  if (!document.querySelector('.records_unactive') && document.querySelector('.records')) {\n    document.querySelector('.records').classList.add('records_unactive');\n    document.querySelector('.records').addEventListener('transitionend', removeRecordsTable);\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/hideRecords.js?");

/***/ }),

/***/ "./src/assets/js/hideSettingsWindow.js":
/*!*********************************************!*\
  !*** ./src/assets/js/hideSettingsWindow.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hideSettingsWindow)\n/* harmony export */ });\nfunction hideSettingsWindow() {\n  if (!document.querySelector('.settings__window_unactive')) {\n    document.querySelector('.settings__window').classList.add('settings__window_unactive');\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/hideSettingsWindow.js?");

/***/ }),

/***/ "./src/assets/js/increaseNum.js":
/*!**************************************!*\
  !*** ./src/assets/js/increaseNum.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ increaseNum)\n/* harmony export */ });\nfunction increaseNum(elemClass) {\n  const element = document.querySelector(elemClass);\n  let num = +element.textContent;\n  num += 1;\n  element.textContent = num;\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/increaseNum.js?");

/***/ }),

/***/ "./src/assets/js/loadSavedGame.js":
/*!****************************************!*\
  !*** ./src/assets/js/loadSavedGame.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadSavedGame)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _showResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showResult.js */ \"./src/assets/js/showResult.js\");\n\n\n\nfunction loadSavedGame() {\n  if (localStorage.getItem('a-v-gor-minesweeper-save')) {\n    (0,_showResult_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('load-game');\n    const savedData = JSON.parse(localStorage.getItem('a-v-gor-minesweeper-save'));\n    Object.assign(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], savedData);\n  } else {\n    (0,_showResult_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('no-saved');\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/loadSavedGame.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playAudio)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _audio_click_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio/click.mp3 */ \"./src/assets/audio/click.mp3\");\n/* harmony import */ var _audio_flag_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/flag.mp3 */ \"./src/assets/audio/flag.mp3\");\n/* harmony import */ var _audio_mine_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio/mine.mp3 */ \"./src/assets/audio/mine.mp3\");\n/* harmony import */ var _audio_win_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../audio/win.mp3 */ \"./src/assets/audio/win.mp3\");\n\n\n\n\n\n\nfunction playAudio(str) {\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound) {\n    let sourceStr = '';\n\n    if (str === 'click') {\n      sourceStr = _audio_click_mp3__WEBPACK_IMPORTED_MODULE_1__;\n    } else if (str === 'flag') {\n      sourceStr = _audio_flag_mp3__WEBPACK_IMPORTED_MODULE_2__;\n    } else if (str === 'mine') {\n      sourceStr = _audio_mine_mp3__WEBPACK_IMPORTED_MODULE_3__;\n    } else if (str === 'win') {\n      sourceStr = _audio_win_mp3__WEBPACK_IMPORTED_MODULE_4__;\n    }\n\n    const audio = new Audio(sourceStr);\n    audio.volume = 0.5;\n    audio.play();\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/playAudio.js?");

/***/ }),

/***/ "./src/assets/js/pushCell.js":
/*!***********************************!*\
  !*** ./src/assets/js/pushCell.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pushCell)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _scatterMines_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scatterMines.js */ \"./src/assets/js/scatterMines.js\");\n/* harmony import */ var _countNeighboursMines_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countNeighboursMines.js */ \"./src/assets/js/countNeighboursMines.js\");\n/* harmony import */ var _changeSmile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeSmile.js */ \"./src/assets/js/changeSmile.js\");\n/* harmony import */ var _increaseNum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./increaseNum.js */ \"./src/assets/js/increaseNum.js\");\n/* harmony import */ var _playAudio_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playAudio.js */ \"./src/assets/js/playAudio.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer.js */ \"./src/assets/js/timer.js\");\n\n\n\n\n\n\n\n\nfunction pushCell(event) {\n  if (event.button === 0 && event.target.classList.value === 'field__cell') {\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timerId) {\n      (0,_timer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    }\n    const id = Number(event.target.id);\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.includes(id) && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.includes(id)) {\n      if (event.isTrusted) {\n        (0,_increaseNum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.stat__num-moves');\n        _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moves = document.querySelector('.stat__num-moves').textContent;\n        (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('click');\n      }\n      (0,_changeSmile_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('push');\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.push(id);\n      if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.length) {\n        (0,_scatterMines_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        (0,_countNeighboursMines_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      }\n      event.target.closest('.field__cell').classList.add('field__cell_push');\n    }\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/pushCell.js?");

/***/ }),

/***/ "./src/assets/js/pushFlag.js":
/*!***********************************!*\
  !*** ./src/assets/js/pushFlag.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pushFlag)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.js */ \"./src/assets/js/timer.js\");\n/* harmony import */ var _playAudio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playAudio.js */ \"./src/assets/js/playAudio.js\");\n/* harmony import */ var _updStat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updStat.js */ \"./src/assets/js/updStat.js\");\n\n\n\n\n\nfunction pushFlag(event) {\n  event.preventDefault();\n  if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame) {\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timerId) {\n      (0,_timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n    const id = Number(event.target.id);\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.includes(id) && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.includes(id)) {\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.push(id);\n      event.target.closest('.field__cell').classList.add('field__cell_flag');\n      (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('flag');\n    } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.includes(id)) {\n      event.target.closest('.field__cell').classList.remove('field__cell_flag');\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.filter((el) => el !== id);\n      (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('flag');\n    }\n    (0,_updStat_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/pushFlag.js?");

/***/ }),

/***/ "./src/assets/js/returnNeighbours.js":
/*!*******************************************!*\
  !*** ./src/assets/js/returnNeighbours.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ returnNeighbours)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\r\n\r\nfunction returnNeighbours(id) {\r\n  let neighboursFull;\r\n  let neighboursStartLine;\r\n  let neighboursEndLine;\r\n\r\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'easy') {\r\n    neighboursFull = [-11, -10, -9, -1, 1, 9, 10, 11];\r\n    neighboursStartLine = [-10, -9, 1, 10, 11];\r\n    neighboursEndLine = [-11, -10, -1, 9, 10];\r\n  } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'medium') {\r\n    neighboursFull = [-16, -15, -14, -1, 1, 14, 15, 16];\r\n    neighboursStartLine = [-15, -14, 1, 15, 16];\r\n    neighboursEndLine = [-16, -15, -1, 14, 15];\r\n  } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'hard') {\r\n    neighboursFull = [-26, -25, -24, -1, 1, 24, 25, 26];\r\n    neighboursStartLine = [-25, -24, 1, 25, 26];\r\n    neighboursEndLine = [-26, -25, -1, 24, 25];\r\n  }\r\n\r\n  function createResult(arr) {\r\n    const result = [];\r\n    for (let i = 0; i < arr.length; i += 1) {\r\n      const num = id + arr[i];\r\n      if (num >= 0 && num < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells) {\r\n        result.push(num);\r\n      }\r\n    }\r\n    return result;\r\n  }\r\n\r\n  let neighbours;\r\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'easy') {\r\n    if (String(id).at(-1) === '0') {\r\n      neighbours = neighboursStartLine;\r\n    } else if (String(id).at(-1) === '9') {\r\n      neighbours = neighboursEndLine;\r\n    } else {\r\n      neighbours = neighboursFull;\r\n    }\r\n  } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'medium') {\r\n    if (id === 0 || id % 15 === 0) {\r\n      neighbours = neighboursStartLine;\r\n    } else if ((id + 1) % 15 === 0) {\r\n      neighbours = neighboursEndLine;\r\n    } else {\r\n      neighbours = neighboursFull;\r\n    }\r\n  } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty === 'hard') {\r\n    if (id === 0 || id % 25 === 0) {\r\n      neighbours = neighboursStartLine;\r\n    } else if ((id + 1) % 25 === 0) {\r\n      neighbours = neighboursEndLine;\r\n    } else {\r\n      neighbours = neighboursFull;\r\n    }\r\n  }\r\n\r\n  return createResult(neighbours);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/returnNeighbours.js?");

/***/ }),

/***/ "./src/assets/js/saveGame.js":
/*!***********************************!*\
  !*** ./src/assets/js/saveGame.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveGame)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _showResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showResult.js */ \"./src/assets/js/showResult.js\");\n\n\n\nfunction saveGame() {\n  const dataToSave = {\n    difficulty: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty,\n    numOfMines: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfMines,\n    mines: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines,\n    openedCells: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells,\n    flagCells: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells,\n    nums: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums,\n    seconds: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].seconds,\n    moves: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moves,\n    sound: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound,\n    newSettings: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newSettings,\n    theme: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].theme,\n  };\n\n  localStorage.setItem('a-v-gor-minesweeper-save', JSON.stringify(dataToSave));\n  (0,_showResult_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('save-game');\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/saveGame.js?");

/***/ }),

/***/ "./src/assets/js/saveRecord.js":
/*!*************************************!*\
  !*** ./src/assets/js/saveRecord.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveRecord)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\n\nfunction saveRecord() {\n  const arr = JSON.parse(localStorage.getItem('a-v-gor-minesweeper-records')) || [];\n  const newRec = {\n    date: new Date(),\n    moves: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moves,\n    seconds: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].seconds,\n    difficulty: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty,\n    mines: _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfMines,\n  };\n\n  if (arr.length > 9) {\n    arr.shift();\n  }\n\n  arr.push(newRec);\n  localStorage.setItem('a-v-gor-minesweeper-records', JSON.stringify(arr));\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/saveRecord.js?");

/***/ }),

/***/ "./src/assets/js/scatterMines.js":
/*!***************************************!*\
  !*** ./src/assets/js/scatterMines.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scatterMines)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\r\n\r\nfunction scatterMines() {\r\n  while (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.length < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfMines) {\r\n    const rand = Math.floor(Math.random() * _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfCells);\r\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.includes(rand) && !_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.includes(rand)) {\r\n      _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.push(rand);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/scatterMines.js?");

/***/ }),

/***/ "./src/assets/js/showCellValue.js":
/*!****************************************!*\
  !*** ./src/assets/js/showCellValue.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showCellValue)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _img_bomb_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/bomb.svg */ \"./src/assets/img/bomb.svg\");\n\r\n\r\n\r\nfunction showCellValue(id) {\r\n  const cell = document.getElementById(id);\r\n  if (!cell.innerHTML.length) {\r\n    if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id] === 'mine') {\r\n      const img = document.createElement('img');\r\n      img.className = 'field__img';\r\n      img.setAttribute('src', _img_bomb_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n      cell.append(img);\r\n    } else if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id] !== 0) {\r\n      cell.textContent = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums[id];\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/showCellValue.js?");

/***/ }),

/***/ "./src/assets/js/showOtherMines.js":
/*!*****************************************!*\
  !*** ./src/assets/js/showOtherMines.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showOtherMines)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _openCell_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openCell.js */ \"./src/assets/js/openCell.js\");\n\r\n\r\n\r\nfunction showOtherMines(id) {\r\n  const mines = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.filter((item) => item !== +id);\r\n  for (let i = 0; i < mines.length; i += 1) {\r\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.includes(mines[i])) {\r\n      (0,_openCell_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mines[i]);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/showOtherMines.js?");

/***/ }),

/***/ "./src/assets/js/showRecords.js":
/*!**************************************!*\
  !*** ./src/assets/js/showRecords.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showRecords)\n/* harmony export */ });\n/* harmony import */ var _addNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNode.js */ \"./src/assets/js/addNode.js\");\n/* harmony import */ var _hideRecords_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideRecords.js */ \"./src/assets/js/hideRecords.js\");\n\r\n\r\n\r\nfunction showRecords() {\r\n  function createRecordsTable() {\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'records records_unactive', document.querySelector('.main'));\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', 'records__title', document.querySelector('.records'), 'Records');\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'records__table', document.querySelector('.records'));\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'records__cell-th', document.querySelector('.records__table'), 'Date');\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'records__cell-th', document.querySelector('.records__table'), 'Moves');\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'records__cell-th', document.querySelector('.records__table'), 'Seconds');\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'records__cell-th', document.querySelector('.records__table'), 'Diff');\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'records__cell-th', document.querySelector('.records__table'), 'Mines');\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'button records__btn', document.querySelector('.records'), 'Close');\r\n  }\r\n\r\n  function createRecordsMessage() {\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'records records_unactive', document.querySelector('.main'));\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', 'records__title', document.querySelector('.records'), 'Records');\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'records__message', document.querySelector('.records'), 'It\\'s no records yet.');\r\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'button records__btn', document.querySelector('.records'), 'Close');\r\n  }\r\n\r\n  function showRecordsTable() {\r\n    document.querySelector('.records').classList.remove('records_unactive');\r\n  }\r\n\r\n  function firstZero(str) {\r\n    return (str.length === 1) ? 0 + str : str;\r\n  }\r\n\r\n  function createLine(obj) {\r\n    const valuesArr = Object.values(obj);\r\n    for (let i = 0; i < valuesArr.length; i += 1) {\r\n      const node = document.createElement('div');\r\n      node.className = 'records__cell';\r\n      if (i === 0) {\r\n        const date = new Date(valuesArr[i]);\r\n        const day = firstZero(String(date.getDate()));\r\n        const month = firstZero(String(Number(date.getMonth()) + 1));\r\n        const year = String(date.getFullYear()).slice(2);\r\n        const hours = firstZero(String(date.getHours()));\r\n        const minutes = firstZero(String(date.getMinutes()));\r\n        const str = `${day}.${month}.${year} ${hours}:${minutes}`;\r\n        node.innerHTML = str;\r\n      } else {\r\n        node.innerHTML = valuesArr[i];\r\n      }\r\n      document.querySelector('.records__table').append(node);\r\n    }\r\n  }\r\n\r\n  document.querySelector('.header-nav__menu-toggle').checked = false;\r\n\r\n  let arr = [];\r\n  if (localStorage.getItem('a-v-gor-minesweeper-records')) {\r\n    arr = arr.concat(JSON.parse(localStorage.getItem('a-v-gor-minesweeper-records')));\r\n    createRecordsTable();\r\n    const cells = document.querySelectorAll('.records__cell');\r\n    cells.forEach((cell) => cell.remove());\r\n    if (arr) {\r\n      arr.sort((a, b) => a.seconds - b.seconds);\r\n      arr.forEach((el) => createLine(el));\r\n    }\r\n  } else {\r\n    createRecordsMessage();\r\n  }\r\n  setTimeout(showRecordsTable);\r\n  document.querySelector('.records__btn').addEventListener('click', _hideRecords_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/showRecords.js?");

/***/ }),

/***/ "./src/assets/js/showResult.js":
/*!*************************************!*\
  !*** ./src/assets/js/showResult.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showResult)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _addNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNode.js */ \"./src/assets/js/addNode.js\");\n\n\n\nfunction showResult(rez) {\n  function addResultWindow() {\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'result-msg result-msg_unactive', document.querySelector('.main'));\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('p', 'result-msg__text', document.querySelector('.result-msg'));\n    (0,_addNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'button result-msg__btn', document.querySelector('.result-msg'), 'Close');\n  }\n\n  function showResultWindow() {\n    document.querySelector('.result-msg').classList.remove('result-msg_unactive');\n  }\n\n  function removeResultWindow() {\n    document.querySelector('.result-msg').removeEventListener('transitionend', removeResultWindow);\n    document.querySelector('.result-msg').remove();\n  }\n\n  function hideResult() {\n    document.querySelector('.result-msg').classList.add('result-msg_unactive');\n    document.querySelector('.result-msg__btn').removeEventListener('click', hideResult);\n    document.querySelector('.result-msg').addEventListener('transitionend', removeResultWindow);\n  }\n\n  let str = '';\n  if (rez === 'win') {\n    str = `Hooray! You found all mines in ${_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].seconds} seconds and ${_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moves} moves!`;\n  } else if (rez === 'mine') {\n    str = 'Game over. Try again.';\n  } else if (rez === 'no-saved') {\n    str = 'It\\'s no saved game found. It could happen if You didn\\'t save the game or if You finished last game (lose/win).';\n  } else if (rez === 'save-game') {\n    str = 'Game saved.';\n  } else if (rez === 'load-game') {\n    str = 'Game loaded.';\n  }\n\n  addResultWindow();\n  document.querySelector('.result-msg__text').textContent = str;\n  setTimeout(showResultWindow);\n  document.querySelector('.result-msg__btn').addEventListener('click', hideResult);\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/showResult.js?");

/***/ }),

/***/ "./src/assets/js/showSettingsWindow.js":
/*!*********************************************!*\
  !*** ./src/assets/js/showSettingsWindow.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showSettingsWindow)\n/* harmony export */ });\nfunction showSettingsWindow() {\n  document.querySelector('.settings__window').classList.remove('settings__window_unactive');\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/showSettingsWindow.js?");

/***/ }),

/***/ "./src/assets/js/startGame.js":
/*!************************************!*\
  !*** ./src/assets/js/startGame.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _createBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBody.js */ \"./src/assets/js/createBody.js\");\n/* harmony import */ var _startNewGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startNewGame.js */ \"./src/assets/js/startNewGame.js\");\n/* harmony import */ var _applySettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applySettings.js */ \"./src/assets/js/applySettings.js\");\n/* harmony import */ var _loadSavedGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadSavedGame.js */ \"./src/assets/js/loadSavedGame.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction startGame() {\r\n  (0,_createBody_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_startNewGame_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n  function startSavedGame() {\r\n    (0,_loadSavedGame_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    if (!_data_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].stopGame) {\r\n      (0,_startNewGame_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n  }\r\n\r\n  function startClearGame() {\r\n    _data_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].newSettings = true;\r\n    (0,_startNewGame_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  }\r\n\r\n  document.querySelector('.settings__load').addEventListener('click', startSavedGame);\r\n  document.querySelector('.header-nav__li').addEventListener('click', startClearGame);\r\n  document.querySelector('.stat__player').addEventListener('click', startClearGame);\r\n  document.querySelector('.settings__field-size-form').addEventListener('submit', _applySettings_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/startGame.js?");

/***/ }),

/***/ "./src/assets/js/startNewGame.js":
/*!***************************************!*\
  !*** ./src/assets/js/startNewGame.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startNewGame)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _checkClick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkClick.js */ \"./src/assets/js/checkClick.js\");\n/* harmony import */ var _calcSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calcSettings.js */ \"./src/assets/js/calcSettings.js\");\n/* harmony import */ var _updSoundIcon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updSoundIcon.js */ \"./src/assets/js/updSoundIcon.js\");\n/* harmony import */ var _openCell_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCell.js */ \"./src/assets/js/openCell.js\");\n/* harmony import */ var _addField_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addField.js */ \"./src/assets/js/addField.js\");\n/* harmony import */ var _updStat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updStat.js */ \"./src/assets/js/updStat.js\");\n/* harmony import */ var _applyTheme_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./applyTheme.js */ \"./src/assets/js/applyTheme.js\");\n/* harmony import */ var _hideSettingsWindow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hideSettingsWindow.js */ \"./src/assets/js/hideSettingsWindow.js\");\n\n\n\n\n\n\n\n\n\n\nfunction startNewGame() {\n  document.querySelector('.header-nav__menu-toggle').checked = false;\n  clearInterval(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timerId);\n  document.querySelector('.stat__player').classList = 'stat__player';\n  document.querySelector('.stat__seconds').textContent = '0';\n  _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timerId = null;\n\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame || _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newSettings) {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame = false;\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines = [];\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells = [];\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells = [];\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nums = {};\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].seconds = 0;\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moves = 0;\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newSettings = false;\n  }\n\n  (0,_hideSettingsWindow_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n  (0,_applyTheme_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  (0,_calcSettings_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_addField_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  (0,_updSoundIcon_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openedCells.forEach((el) => (0,_openCell_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(el));\n  _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.forEach((el) => document.getElementById(el).classList.add('field__cell_flag'));\n  document.querySelector('.stat__seconds').textContent = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].seconds;\n  (0,_updStat_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  (0,_checkClick_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/startNewGame.js?");

/***/ }),

/***/ "./src/assets/js/timer.js":
/*!********************************!*\
  !*** ./src/assets/js/timer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ timer)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _increaseNum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./increaseNum.js */ \"./src/assets/js/increaseNum.js\");\n\n\n\nfunction timer() {\n  function startTimer() {\n    (0,_increaseNum_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.stat__seconds');\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].seconds = document.querySelector('.stat__seconds').textContent;\n  }\n\n  if (!_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame) {\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timerId = setInterval(startTimer, 1000);\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/timer.js?");

/***/ }),

/***/ "./src/assets/js/toggleSound.js":
/*!**************************************!*\
  !*** ./src/assets/js/toggleSound.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleSound)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _playAudio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playAudio.js */ \"./src/assets/js/playAudio.js\");\n/* harmony import */ var _updSoundIcon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updSoundIcon.js */ \"./src/assets/js/updSoundIcon.js\");\n\r\n\r\n\r\n\r\nfunction toggleSound() {\r\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound) {\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound = false;\r\n  } else {\r\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound = true;\r\n    (0,_playAudio_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('click');\r\n  }\r\n  (0,_updSoundIcon_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n}\r\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/toggleSound.js?");

/***/ }),

/***/ "./src/assets/js/unpushCell.js":
/*!*************************************!*\
  !*** ./src/assets/js/unpushCell.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ unpushCell)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n/* harmony import */ var _changeSmile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeSmile.js */ \"./src/assets/js/changeSmile.js\");\n/* harmony import */ var _openCell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./openCell.js */ \"./src/assets/js/openCell.js\");\n/* harmony import */ var _checkIfZero_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkIfZero.js */ \"./src/assets/js/checkIfZero.js\");\n/* harmony import */ var _checkIfMine_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkIfMine.js */ \"./src/assets/js/checkIfMine.js\");\n/* harmony import */ var _checkIfWin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkIfWin.js */ \"./src/assets/js/checkIfWin.js\");\n/* harmony import */ var _pushCell_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pushCell.js */ \"./src/assets/js/pushCell.js\");\n\n\n\n\n\n\n\n\nfunction unpushCell() {\n  const field = document.querySelector('.field');\n\n  (0,_changeSmile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('unpush');\n  const pushedCell = document.querySelector('.field__cell_push');\n  if (pushedCell) {\n    (0,_openCell_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pushedCell.id);\n    (0,_checkIfZero_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pushedCell.id);\n    for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen.length; i += 1) {\n      (0,_openCell_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen[i]);\n    }\n    _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toOpen = [];\n    (0,_checkIfMine_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pushedCell.id);\n    (0,_checkIfWin_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  }\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stopGame) {\n    field.removeEventListener('mousedown', _pushCell_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    document.body.removeEventListener('mouseup', unpushCell);\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/unpushCell.js?");

/***/ }),

/***/ "./src/assets/js/updSoundIcon.js":
/*!***************************************!*\
  !*** ./src/assets/js/updSoundIcon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updSoundIcon)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\n\nfunction updSoundIcon() {\n  const soundBtn = document.querySelector('.settings__sound');\n  if (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sound) {\n    soundBtn.classList.remove('settings__sound_mute');\n  } else {\n    soundBtn.classList.add('settings__sound_mute');\n  }\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/updSoundIcon.js?");

/***/ }),

/***/ "./src/assets/js/updStat.js":
/*!**********************************!*\
  !*** ./src/assets/js/updStat.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updStat)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/assets/js/data.js\");\n\n\nfunction updStat() {\n  document.querySelector('.stat__num-moves').textContent = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].moves;\n  document.querySelector('.stat__num-flags').textContent = _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.length;\n  document.querySelector('.stat__num-mines').textContent = (_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mines.length || _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfMines) - _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flagCells.length;\n}\n\n\n//# sourceURL=webpack://minesweeper/./src/assets/js/updStat.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/normalize.css */ \"./src/assets/css/normalize.css\");\n/* harmony import */ var _assets_css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/main.scss */ \"./src/assets/css/main.scss\");\n/* harmony import */ var _assets_js_startGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/startGame.js */ \"./src/assets/js/startGame.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', _assets_js_startGame_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\n\n//# sourceURL=webpack://minesweeper/./src/index.js?");

/***/ }),

/***/ "./src/assets/audio/click.mp3":
/*!************************************!*\
  !*** ./src/assets/audio/click.mp3 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b18220351551961ec985.mp3\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/audio/click.mp3?");

/***/ }),

/***/ "./src/assets/audio/flag.mp3":
/*!***********************************!*\
  !*** ./src/assets/audio/flag.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f45eee7a4b5597df1080.mp3\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/audio/flag.mp3?");

/***/ }),

/***/ "./src/assets/audio/mine.mp3":
/*!***********************************!*\
  !*** ./src/assets/audio/mine.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"471fb9181d0a2c66ecd8.mp3\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/audio/mine.mp3?");

/***/ }),

/***/ "./src/assets/audio/win.mp3":
/*!**********************************!*\
  !*** ./src/assets/audio/win.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b6fdbb18a9a84938acd.mp3\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/audio/win.mp3?");

/***/ }),

/***/ "./src/assets/img/bomb.svg":
/*!*********************************!*\
  !*** ./src/assets/img/bomb.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a55e176a1e5ec69cc5b0.svg\";\n\n//# sourceURL=webpack://minesweeper/./src/assets/img/bomb.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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