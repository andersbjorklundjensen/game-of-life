import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
  it('render headline', () => {
    render(<App />);
    const headline = screen.getByRole('heading');

    expect(headline).toHaveTextContent('Game of life');
  });

  it('renders an adjustable grid size variable', () => {
    render(<App />);

    const incrementButton = screen.getByRole('button', {
      name: '+'
    });
    const decrementButton = screen.getByRole('button', {
      name: '-'
    });
    const counter = screen.getByTestId('gridSize')

    expect(counter).toHaveTextContent('0');

    fireEvent.click(incrementButton);
    expect(counter).toHaveTextContent('1');

    fireEvent.click(decrementButton);
    expect(counter).toHaveTextContent('0');
  });
})