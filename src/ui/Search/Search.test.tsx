import { render, screen } from '@testing-library/react';
import { Search } from './Search';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';

test('Search contains Text input', () => {

  const store = configureStore({
    reducer: {},
  });

  const wrapper = ({ children }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );

  render(wrapper({ children: <Search /> }))

  const button = screen.getByText((content, element) => element?.tagName.toLowerCase() === 'input');
});

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);
