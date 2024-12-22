function fixDriveLink(shareUrl) {
  // Example input: "https://drive.google.com/file/d/1ABC123/view?usp=drive_link"
  // We extract "1ABC123" and return: "https://drive.google.com/uc?export=view&id=1ABC123"
  const match = shareUrl.match(/\/d\/([^/]+)\//);
  if (!match) {
    // If we can't parse, fallback to original or a placeholder
    return shareUrl;
  }
  const fileId = match[1];
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

const categoriesData = [
  {
    id: 1,
    name: 'Desejos',
    image: fixDriveLink('https://drive.google.com/file/d/1ek7Rw8ZpvLF15iHtbltq3uBD-UobGfq9/view?usp=drive_link'),
    products: [
      {
        id: 101,
        name: 'Harmonia',
        variants: [
          {
            id: 'harmonia-lavanda',
            name: 'Lavanda',
            price: 40,
            image: fixDriveLink('https://drive.google.com/file/d/12s1iaSYz6foLSWjPjWdE0-vyMbbdf4nD/view?usp=drive_link')
          },
        ]
      },
      {
        id: 102,
        name: 'Serenidade',
        variants: [
          {
            id: 'serenidade-orquidia',
            name: 'Orquídia',
            price: 40,
            image: fixDriveLink('https://drive.google.com/file/d/1L-Mq6LjbQ9UndSbmRHkp8S0TE0-hGmXa/view?usp=drive_link')
          },
        ]
      },
      {
        id: 103,
        name: 'Sorte',
        variants: [
          {
            id: 'sorte-herbal',
            name: 'Herbal',
            price: 40,
            image: fixDriveLink('https://drive.google.com/file/d/1ek7Rw8ZpvLF15iHtbltq3uBD-UobGfq9/view?usp=drive_link')
          }
        ]
      },
      {
        id: 104,
        name: 'Abundância',
        variants: [
          {
            id: 'abundancia-alecrim',
            name: 'Alecrim',
            price: 40,
            image: fixDriveLink('https://drive.google.com/file/d/1MBoVGnBn5CZMyO-YEWD1c0X19XGUVxRV/view?usp=drive_link')
          }
        ]
      },
      {
        id: 105,
        name: 'Vitalidade',
        variants: [
          {
            id: 'vitalidade-laranjeira',
            name: 'Flor de Laranjeira',
            price: 40,
            image: fixDriveLink('https://drive.google.com/file/d/1sSmTwQ7_uydwHvSsDKnrzAsPukmlhuU0/view?usp=drive_link')
          }
        ]
      },
      {
        id: 106,
        name: 'Paixão',
        variants: [
          {
            id: 'paixao-cravoecanela',
            name: 'Cravo e Canela',
            price: 40,
            image: fixDriveLink('https://drive.google.com/file/d/1sSmTwQ7_uydwHvSsDKnrzAsPukmlhuU0/view?usp=drive_link')
          }
        ]
      },
    ],
  },
  {
    id: 2,
    name: 'Clássicas',
    image: fixDriveLink('https://drive.google.com/file/d/12s1iaSYz6foLSWjPjWdE0-vyMbbdf4nD/view?usp=drive_link'),
    products: [
      {
        id: 201,
        name: 'Glitter',
        variants: [
          {
            id: 'glitter-lavanda',
            name: 'Lavanda',
            price: 50,
            image: fixDriveLink('https://drive.google.com/file/d/1sSmTwQ7_uydwHvSsDKnrzAsPukmlhuU0/view?usp=drive_link')
          },
          {
            id: 'glitter-orquidia',
            name: 'Orquídia',
            price: 50,
            image: fixDriveLink('https://drive.google.com/file/d/1sSmTwQ7_uydwHvSsDKnrzAsPukmlhuU0/view?usp=drive_link')
          },
          {
            id: 'glitter-herbal',
            name: 'Herbal',
            price: 50,
            image: fixDriveLink('https://drive.google.com/file/d/1sSmTwQ7_uydwHvSsDKnrzAsPukmlhuU0/view?usp=drive_link')
          },
          {
            id: 'glitter-laranjeira',
            name: 'Flor de Laranjeira',
            price: 50,
            image: fixDriveLink('https://drive.google.com/file/d/1sSmTwQ7_uydwHvSsDKnrzAsPukmlhuU0/view?usp=drive_link')
          },
        ],
      },
      {
        id: 202,
        name: 'Pote 230g',
        variants: [
          {
            id: 'pote230g-laranjeira',
            name: 'Flor de Laranjeira',
            price: 50,
            image: fixDriveLink('https://drive.google.com/file/d/1sSmTwQ7_uydwHvSsDKnrzAsPukmlhuU0/view?usp=drive_link')
          }
        ]
      },
    ],
  },
  {
    id: 3,
    name: 'Gesso',
    image: fixDriveLink('https://drive.google.com/file/d/1L-Mq6LjbQ9UndSbmRHkp8S0TE0-hGmXa/view?usp=drive_link'),
    products: [
      {
        id: 301,
        name: 'Verde',
        variants: [
          {
            id: 'verde-herbal',
            name: 'Herbal',
            price: 45,
            image: fixDriveLink('https://drive.google.com/file/d/1sSmTwQ7_uydwHvSsDKnrzAsPukmlhuU0/view?usp=drive_link')
          }
        ]
      },
      {
        id: 302,
        name: 'Roxo',
        variants: [
          {
            id: 'roxo-lavanda',
            name: 'Lavanda',
            price: 45,
            image: fixDriveLink('https://drive.google.com/file/d/1sSmTwQ7_uydwHvSsDKnrzAsPukmlhuU0/view?usp=drive_link')
          }
        ]
      },
    ],
  },
];

export default categoriesData; 