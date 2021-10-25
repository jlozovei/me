const work = {
  name: 'Work',
  role: 'Principal mocker',
  date: '2020 - 2021',
  img: '',
  text: {
    en: `
      <p>Some nice description about this work.</p>
      `,
    'pt-br': `
      <p>Uma bela descrição sobre esse trabalho em questão.</p>
      `
  },
  lang: 'en'
};

const createCustomWork = (props) => ({
  ...work,
  ...props
});

export { work, createCustomWork };
