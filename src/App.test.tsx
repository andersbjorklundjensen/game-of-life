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

  it('should change the state and color of cell when clicking it', () => {
    render(<App />)

    const firstCell = screen.getAllByRole('cell')[0];
    fireEvent.click(firstCell)

    expect(firstCell).toHaveClass('alive');
  })

  it('should render next state when click next state button', () => {
    render(<App />);

    const allCells = screen.getAllByRole('cell');

    fireEvent.click(allCells[5]);
    fireEvent.click(allCells[5 + 10]);
    fireEvent.click(allCells[5 + 20]);

    const nextStateButton = screen.getByRole('button', { name: 'Next state' });

    fireEvent.click(nextStateButton);

    expect(allCells[4 + 10]).toHaveClass('alive');
    expect(allCells[5 + 10]).toHaveClass('alive');
    expect(allCells[6 + 10]).toHaveClass('alive');
  })
})