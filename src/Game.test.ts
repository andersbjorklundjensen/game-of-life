import Game from './Game';
import CellState from './ECellState';
import Cell from './Cell';

const { DEAD, ALIVE } = CellState;

describe('Game class tests', () => {
  it('should initialize a game with a grid of cell objects', () => {
    const grid = [
      [DEAD, DEAD],
      [DEAD, DEAD],
    ];

    const game = new Game(grid);

    expect(game.getGrid()).toEqual([
      [new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD)],
    ])
  })
})