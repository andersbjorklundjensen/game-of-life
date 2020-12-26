import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
  it('render headline', () => {
    render(<App />);
    const headline = screen.getByRole('heading');

    expect(headline).toHaveTextContent('Game of life');
  });
})