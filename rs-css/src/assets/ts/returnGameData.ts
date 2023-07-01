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
    {
      description: 'Select the bento boxes',
      tags: [
        {
          tag: 'bento',
          onTable: true,
          toSelect: true,
        },
        {
          tag: 'plate',
          onTable: true,
          toSelect: false,
        },
        {
          tag: 'bento',
          onTable: true,
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
          onTable: true,
          toSelect: true,
        },
        {
          tag: 'plate',
          onTable: true,
        },
        {
          tag: 'bento',
          onTable: true,
        },
      ],
    },
    {
      description: 'Select the apple on the plate',
      tags: [
        {
          tag: 'bento',
          onTable: true,
        },
        {
          tag: 'plate',
          onTable: true,
          children: [
            {
              tag: 'apple',
              onTable: false,
              isChild: true,
            }
          ]
        },
        {
          tag: 'apple',
          onTable: true,
        },
      ],
    },
];
  return gameData;
}
