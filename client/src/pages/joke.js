import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { JokeCard, Loading } from '../components';

export const JOKE_BY_CATEGORY = gql`
  query GetJokeByCategory($category: String!) {
    joke(category: $category) {
      id
      value
    }
  }
`;

export default function Joke({ category }) {
  return (
    <Query query={JOKE_BY_CATEGORY} variables={{category}}>
      {({ data, loading, error }) => {
        if (loading) return <Loading />;
        if (error) return <p> ERROR </p>

        return (
          <Fragment>
            <JokeCard value={data.joke.value} />
          </Fragment>
        );
      }}
    </Query>
  );
}
