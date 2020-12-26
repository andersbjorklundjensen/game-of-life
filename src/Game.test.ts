import Game from './Game';
import CellState from './ECellState';
import Cell from './Cell';

const { DEAD, ALIVE } = CellState;

const deadGrid = [
  [DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD],
];

describe('Game class tests', () => {
  it('should initialize a game with a grid of cell objects', () => {
    const game = new Game(deadGrid);

    expect(game.getGrid()).toEqual([
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
    ])
  })

  it('should be able to get number of alive neighbors for a cell in a dead grid', () => {
    const game = new Game(deadGrid)

    expect(game.getAliveNeighborsForCell(1, 1)).toBe(0);
  })

  it('should be able to get number of alive neighbors for a cell with a 3x3 grid with 2 alive neighbors', () => {
    const grid = [
      [ALIVE, DEAD, DEAD],
      [DEAD, ALIVE, DEAD],
      [DEAD, DEAD, ALIVE],
    ]
    const game = new Game(grid)

    expect(game.getAliveNeighborsForCell(1, 1)).toBe(2);
  })

  it('should generate new grid state, testing this with a blinker oscillator', () => {
    const grid = [
      [DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD],
    ]

    const game = new Game(grid);

    expect(game.generateNextGridState()).toEqual([
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
    ])
  })

  it('should set the grid property in game class to next state, when calling tick method', () => {
    const grid = [
      [DEAD, DEAD, DEAD, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, ALIVE, DEAD, DEAD],
      [DEAD, DEAD, DEAD, DEAD, DEAD],
    ]

    const game = new Game(grid);

    game.tick();

    expect(game.getGrid()).toEqual([
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
      [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
    ])
  });
})