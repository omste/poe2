import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading message', () => {
  render(<App />);
  const textElement = screen.getByText(/loading/i);
  expect(textElement).toBeInTheDocument();
});
