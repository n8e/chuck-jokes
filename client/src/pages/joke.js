import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

import { JokeCard, Loading } from '../components';

export const JOKE_BY_CATEGORY = gql`
  query GetJokeByCategory($category: String!) {
    joke(category: $category) {
      id
      value
    }
  }
`;

const Joke = ({ category }) => {
  const { loading, error, data } = useQuery(JOKE_BY_CATEGORY, { variables: { category } });

  return (
    <>
      {loading && <Loading />}
      {error && (<p> ERROR </p>)}
      {data && (
        <Fragment>
          <JokeCard value={data.joke.value} />
        </Fragment>
      )}
    </>
  );
};

export default Joke;
