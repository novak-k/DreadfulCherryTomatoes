import { render, screen } from '@testing-library/react';
import { Header } from "./Header";
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';

test('Header contains Title text', () => {

  const store = configureStore({
    reducer: {},
  });

  const wrapper = ({ children }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );

  render(wrapper({ children: <Header /> }))
  const titleText = screen.getByText(/Dreadful Cherry Tomatoes/i);
  expect(titleText).toBeInTheDocument();
});

test('Header contains logo', () => {

  const store = configureStore({
    reducer: {},
  });

  const wrapper = ({ children }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );

  render(wrapper({ children: <Header /> }))
  const element = screen.getByAltText(/logo/i);
  expect(element).toBeInTheDocument();
});

test('Header contains search bar text', () => {

  const store = configureStore({
    reducer: {},
  });

  const wrapper = ({ children }) => (
    <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
  );

  render(wrapper({ children: <Header /> }))
  const titleText = screen.getByPlaceholderText(/Title/i);
  expect(titleText).toBeInTheDocument();
});

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);
