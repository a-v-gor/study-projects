import ILevel from './ILevel';

export default function returnGameData(): ILevel[] {
  const gameData: ILevel[] = [
    {
      description: 'Select the plates',
      tags: [
        {
          tag: 'plate',
          toSelect: true,
        },
        {
          tag: 'plate',
          toSelect: true,
        },
      ],
    },
];
  return gameData;
}
