import ILevel from './ILevel';

export default function returnGameData(): ILevel[] {
  const gameData: ILevel[] = [
    {
      description: 'Select the plates',
      tags: [
        {
          tag: 'plate',
          onTable: true,
          toSelect: true,
        },
        {
          tag: 'plate',
          onTable: true,
          toSelect: true,
        },
      ],
    },
];
  return gameData;
}
