import React from 'react';
import { render, screen } from '@testing-library/react';
import { chooseBg, RepoRow } from './repoRow';

import '@testing-library/jest-dom';

test('gives correct background colour', () => {
  const bg = chooseBg(1);
  expect(bg).toBe('#ccc');
  const bg2 = chooseBg(2);
  expect(bg2).toBe('#aaa');
});

test('renders row', () => {
  render(<RepoRow idx={1} title={'test title'} url={'testUrl'} stars={'3'} forks={'1001'} />);
  const textElement = screen.getByText(/test title/i);
  expect(textElement).toBeInTheDocument();
});
