import {
  useItem as mockedUseItem,
  useCategory as mockedUseCategory,
  createCustomUseItem,
  createCustomUseCategory
} from '__mocks__';

describe('create custom mocked use item', () => {
  it('return mocked use item with custom arguments', async () => {
    const use = createCustomUseItem({
      name: 'A random item'
    });

    expect(use).toMatchObject({
      ...mockedUseItem,
      ...use
    });
  });

  it('return mocked use category with custom arguments', async () => {
    const category = createCustomUseCategory({
      key: 'categ',
      lang: 'en',
      label: {
        en: 'Custom Category',
        'pt-br': 'Categoria Customizada'
      },
      items: []
    });

    expect(category).toMatchObject({
      ...mockedUseCategory,
      ...category
    });
  });
});
