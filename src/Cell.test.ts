import Cell from "./Cell";
import ECellState from './ECellState';

const { DEAD, ALIVE } = ECellState;

describe('Cell class tests', () => {
  it('should change state from ALIVE to DEAD, if it has fewer than 2 live neighbors', () => {
    const cell = new Cell(ALIVE);

    expect(cell.getNextState(1)).toBe(DEAD);
    expect(cell.getNextState(0)).toBe(DEAD);
  })

  it('should not change state from ALIVE, if it has 2 or 3 live neighbors', () => {
    const cell = new Cell(ALIVE);

    expect(cell.getNextState(2)).toBe(ALIVE);
    expect(cell.getNextState(3)).toBe(ALIVE);
  })

  it('should change state from ALIVE to DEAD, if it has more than 3 live neighbors', () => {
    const cell = new Cell(ALIVE);

    for (let i = 4; i <= 8; i++)
      expect(cell.getNextState(i)).toBe(DEAD);
  })

  it('should change state from DEAD to ALIVE, if it has exactly 3 live neighbors', () => {
    const cell = new Cell(DEAD);

    expect(cell.getNextState(3)).toBe(ALIVE);
  })
});