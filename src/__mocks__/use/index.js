const useItem = {
  name: 'Use Item',
  description: {
    en: 'A nice item',
    'pt-br': 'Um item bem legal'
  }
};

const useItemWithExtras = {
  name: 'Use Item with Extras',
  description: {
    en: 'A nice item with extras',
    'pt-br': 'Um item bem legal com extras'
  },
  extras: [
    {
      label: 'Extra #1',
      url: 'https://extra.one'
    }
  ]
};

const useCategory = {
  key: 'categ',
  lang: 'en',
  label: {
    en: 'Category',
    'pt-br': 'Categoria'
  },
  items: [useItem]
};

const createCustomUseItem = (props) => ({
  ...useItem,
  ...props
});

const createCustomUseCategory = (props) => ({
  ...useCategory,
  ...props
});

export { useItem, useItemWithExtras, useCategory, createCustomUseItem, createCustomUseCategory };
