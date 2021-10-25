import React from 'react';

import { Anchor } from 'assets/styled';

import {
  StyledContainer,
  StyledCategory,
  StyledList,
  StyledListItem,
  StyledExtras
} from './styled';

const UsesList = ({ categories }) => {
  return (
    <StyledContainer>
      {categories.map((category) => {
        const { lang, items } = category;

        return (
          <StyledCategory key={category.key} data-testid={`category--${category.key}`}>
            <h3>{category.label[lang]}</h3>

            <StyledList data-testid="uses-list">
              {category.items.map(({ name, description, extras }) => {
                const hasExtras = extras?.length > 0 || false;

                return (
                  <StyledListItem key={name} data-testid={`use--${name}`}>
                    <h4>{name}</h4>
                    <p>{description[lang]}</p>

                    {hasExtras && (
                      <StyledExtras data-testid="extras-list">
                        <ul>
                          {extras.map(({ label, url }) => (
                            <li key={label} data-testid={`extra--${label}`}>
                              <Anchor as="a" href={url} target="_blank" rel="noopener noreferrer">
                                {label}
                              </Anchor>
                            </li>
                          ))}
                        </ul>
                      </StyledExtras>
                    )}
                  </StyledListItem>
                );
              })}
            </StyledList>
          </StyledCategory>
        );
      })}
    </StyledContainer>
  );
};

export { UsesList };
