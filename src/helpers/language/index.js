const language = (location = '') => {
  return location.includes('pt-br') ? 'pt-br' : 'en';
};

const isEn = (lang = '') => {
  return lang === 'en';
};

export { language, isEn };
