import React from 'react';
import { Link } from 'gatsby';

import { PAGES } from 'constants/pages';
import { List } from 'components/List';
import { Anchor } from 'assets/styled';

const Menu = ({ lang }) => {
  const menuItems = PAGES[lang].map(({ key, label, path }) => ({
    key,
    render: () => (
      <Anchor as={Link} to={path} activeClassName="active">
        {label}
      </Anchor>
    )
  }));

  return <List items={menuItems} />;
};

Menu.defaultProps = {
  lang: 'en'
};

export { Menu };
