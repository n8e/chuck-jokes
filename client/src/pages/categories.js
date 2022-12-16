import React, { Fragment, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

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

const Categories = () => {
  const [category, setCategory] = useState(null);
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const onChangeHandler = (e) => setCategory(e.target.value);
  

  return (
    <>
      {loading && <Loading />}
      {error && (<p>ERROR</p>)}
      {data && (
          <Fragment>
            {data.categories &&
              data.categories.categories &&
              (
                <CategoryDropDown
                  categories={data.categories.categories}
                  onChangeHandler={onChangeHandler}
                />
              )
            }{
              category 
                ? (<Joke category={category} />)
                : null
            }
          </Fragment>
        )}
    </>
  );
}

export default Categories;
