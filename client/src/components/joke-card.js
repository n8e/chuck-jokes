import React from 'react';
import styled from '@emotion/styled';

import { unit } from '../styles';

const JokeCard = ({ value }) => {
  return (
    <StyledDiv>
      <p>{value}</p>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
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
  padding: .6em 1.4em .5em .8em;
  text-decoration: none;
  width: 40%;
`;

export default JokeCard;
