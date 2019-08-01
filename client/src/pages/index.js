import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Categories from './categories';
import { PageContainer } from '../components';

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Categories path="/" />
        </Router>
      </PageContainer>
    </Fragment>
  );
}
