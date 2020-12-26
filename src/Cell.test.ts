import Cell from "./Cell";
import ECellState from './ECellState';

const { DEAD, ALIVE } = ECellState;

describe('Cell class tests', () => {
  it('should change state from ALIVE to DEAD, if it has fewer than 2 live neighbors', () => {
    const cell = new Cell(ALIVE);

    expect(cell.getNextState(1)).toBe(DEAD);
    expect(cell.getNextState(0)).toBe(DEAD);
  })
});