import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Categories from './categories';
import { PageContainer } from '../components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Categories />,
  },
]);

const Pages = () => (
  <PageContainer>
    <RouterProvider router={router} />
  </PageContainer>
);

export default Pages;
