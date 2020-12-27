import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
  it('render headline', () => {
    render(<App />);
    const headline = screen.getByRole('heading');

    expect(headline).toHaveTextContent('Game of life');
  });

  it('renders a 10x10 grid', () => {
    render(<App />);

    const expectedNumberOfCells = 100; 

    const allCells = screen.getAllByRole('cell');

    expect(allCells.length).toBe(expectedNumberOfCells);
  })
})