import Game from './Game';
import CellState from './ECellState';
import Cell from './Cell';

const { DEAD, ALIVE } = CellState;

const deadGrid = [
  [DEAD, DEAD],
  [DEAD, DEAD],
];

describe('Game class tests', () => {
  it('should initialize a game with a grid of cell objects', () => {
    const game = new Game(deadGrid);

    expect(game.getGrid()).toEqual([
      [new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD)],
    ])
  })

  it('should be able to get number of alive neighbors for a cell in a dead grid', () => {
    const game = new Game(deadGrid)

    expect(game.getAliveNeighborsForCell(1, 1)).toBe(0);
  })
})