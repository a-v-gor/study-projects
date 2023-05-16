import data from './data.js';

export default function saveGame() {
  if (data.newSettings) {
    return;
  }
  const dataToSave = {
    difficulty: data.difficulty,
    numOfMines: data.numOfMines,
    mines: data.mines,
    openedCells: data.openedCells,
    flagCells: data.flagCells,
    nums: data.nums,
    seconds: data.seconds,
    moves: data.moves,
    sound: data.sound,
    newSettings: data.newSettings,
  };

  localStorage.setItem('minesweeper-save', JSON.stringify(dataToSave));
}
