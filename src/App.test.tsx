import { render, screen } from '@testing-library/react';
import { TodoApp } from './components/TodoApp';

test('renders learn react link', () => {
  render(<TodoApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
