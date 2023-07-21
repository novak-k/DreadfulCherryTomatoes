import { render, screen } from '@testing-library/react';
import { Home } from "./Home";

test('Home renders code section', () => {
  render(<Home>Test</Home>);
  const codeMessage = screen.getByText("Test");
  expect(codeMessage).toBeInTheDocument();
});
