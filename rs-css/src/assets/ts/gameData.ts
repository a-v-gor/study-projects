import IGameObj from './IGameObj';

export default function returnGameData(): IGameObj[][] {
  const gameData: IGameObj[][] = [
  [
    {
      tag: 'plate',
      toSelect: true,
    },
    {
      tag: 'plate',
      toSelect: true,
    },
  ],
];
  return gameData;
}
