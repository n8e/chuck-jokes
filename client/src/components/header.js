import React from 'react';
import styled from '@emotion/styled';

import { unit } from '../styles';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Chuck Norris Jokes</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: ${unit * 4}px ${unit * 5}px;
  background-color: #444;
  color: #fff;
  display: block;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 400;
  height: 10%;
  margin: 0 auto;
  margin-top: 0px;
  padding: .8em 1.4em .5em 1.0em;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

export default Header;
