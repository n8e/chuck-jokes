import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { CategoryDropDown, Loading } from '../components';
import Joke from './joke';

export const GET_CATEGORIES = gql`
  query GetCategoryList($after: String) {
    categories(after: $after) {
      cursor
      hasMore
      categories {
        id
        name
      }
    }
  }
`;

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
    }
  }

  onChangeHandler = (e) => {
    this.setState({ category: e.target.value });
  }
  
  render() {
    const { category } = this.state;

    return (
      <Query query={GET_CATEGORIES}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <p>ERROR</p>;
  
          return (
            <Fragment>
              {data.categories &&
                data.categories.categories &&
                (
                  <CategoryDropDown
                    categories={data.categories.categories}
                    onChangeHandler={this.onChangeHandler}
                  />
                )
              }{
                category 
                  ? (<Joke category={category} />)
                  : null
              }
            </Fragment>
          );
        }}
      </Query>
    );
  }
}
