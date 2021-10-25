const academic = {
  key: 'acad',
  name: {
    en: 'Academic Experience',
    'pt-br': 'Experiência acadêmica'
  },
  institution: 'Some great institution',
  date: '2020 - 2021',
  img: '',
  text: {
    en: `
      <p>Some nice description about this experience.</p>
      `,
    'pt-br': `
      <p>Uma bela descrição sobre a experiência em questão.</p>
      `
  },
  lang: 'en'
};

const createCustomAcademic = (props) => ({
  ...academic,
  ...props
});

export { academic, createCustomAcademic };
