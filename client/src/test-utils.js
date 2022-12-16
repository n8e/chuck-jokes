import React from 'react';
// this adds custom jest matchers from jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

const renderApollo = (
  node,
  { mocks, addTypename, defaultOptions, cache, ...options } = {},
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
    >
      {node}
    </MockedProvider>,
    options,
  );
};

export * from '@testing-library/react';
export { renderApollo };
