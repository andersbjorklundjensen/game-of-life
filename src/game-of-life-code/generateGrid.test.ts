import Cell from './Cell';
import generateGrid from './generateGrid';
import CellState from './ECellState';

const { DEAD } = CellState;

describe('Function for generating grids', () => {
  it('should generate a 3x3 grid with dead cells', () => {
    const generatedGrid = generateGrid(3, 3);

    const expectedGrid = [
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
      [DEAD, DEAD, DEAD],
    ]

    expect(generatedGrid).toEqual(expectedGrid);
  })
})