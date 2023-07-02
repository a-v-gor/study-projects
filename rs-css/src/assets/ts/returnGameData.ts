import ILevel from './ILevel';

export default function returnGameData(): ILevel[] {
  const gameData: ILevel[] = [
    {
      description: 'Select the plates',
      tags: [
        {
          tag: 'plate',
          position: 'onTable',
          toSelect: true,
        },
        {
          tag: 'plate',
          position: 'onTable',
          toSelect: true,
        },
      ],
    },
    {
      description: 'Select the bento boxes',
      tags: [
        {
          tag: 'bento',
          position: 'onTable',
          toSelect: true,
        },
        {
          tag: 'plate',
          position: 'onTable',
          toSelect: false,
        },
        {
          tag: 'bento',
          position: 'onTable',
          toSelect: true,
        },
      ],
    },
    {
      description: 'Select the fancy plate',
      tags: [
        {
          tag: 'plate',
          id: 'fancy',
          position: 'onTable',
          toSelect: true,
        },
        {
          tag: 'plate',
          position: 'onTable',
        },
        {
          tag: 'bento',
          position: 'onTable',
        },
      ],
    },
    {
      description: 'Select the apple on the plate',
      tags: [
        {
          tag: 'bento',
          position: 'onTable',
        },
        {
          tag: 'plate',
          position: 'onTable',
          children: [
            {
              tag: 'apple',
              position: 'child',
            }
          ]
        },
        {
          tag: 'apple',
          position: 'onTable',
        },
      ],
    },
];
  return gameData;
}
