import { language, isEn } from 'helpers/language';

describe('helpers/language', () => {
  it('language', () => {
    expect(language()).toBe('en');
    expect(language('/en/about')).toBe('en');
    expect(language('/pt-br/sobre')).toBe('pt-br');
    expect(language('/es/sobre')).toBe('en');
  });

  it('isEn', () => {
    expect(isEn()).toBe(false);
    expect(isEn('en')).toBe(true);
    expect(isEn('pt-br')).toBe(false);
    expect(isEn('es')).toBe(false);
  });
});
