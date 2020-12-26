import Game from './Game';
import Cell from './Cell';

describe('Game class tests', () => {
  it('should initialize a game with a grid of cell objects', () => {
    const grid = [
      [new Cell(), new Cell()],
      [new Cell(), new Cell()],
    ];

    const game = new Game();
  })
})