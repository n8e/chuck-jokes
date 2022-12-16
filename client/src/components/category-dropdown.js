import React from 'react';
import styled from '@emotion/styled';

import { unit } from '../styles';

const CategoryDropDown = ({ categories, onChangeHandler }) => {
  return (
    <StyledSelectContainer>
      <h4>Select a joke category</h4>
      <StyledSelect onChange={onChangeHandler}>
        {categories.map(category => {
          const { id, name } = category;

          return (<option key={id}>{name}</option>);
        })}
      </StyledSelect>
    </StyledSelectContainer>
  );
};

const StyledSelectContainer = styled.div`
  color: #444;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 500;
  margin: 0 auto;
  margin-top: ${unit * 2}px;
  padding: .6em 1.4em .5em .8em;
  width: 40%;
`;

const StyledSelect = styled.select`
  padding: ${unit * 4}px ${unit * 5}px;
  border-radius: 7px;
  color: #444;
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 500;
  height: 29px;
  line-height: 1.3;
  margin: 0 auto;
  margin-top: ${unit * 2}px;
  width: 100%;
`;

export default CategoryDropDown;
