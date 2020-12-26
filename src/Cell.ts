import CellState from "./ECellState";

export default class Cell {
  private state: CellState;

  constructor($state: CellState) {
    this.state = $state;
  }

  public isAlive() {
    return this.state === CellState.ALIVE;
  }

  public getNextState(numberOfAliveNeighbors: number) {
    if (numberOfAliveNeighbors < 2) return CellState.DEAD;
    if (numberOfAliveNeighbors === 2 || numberOfAliveNeighbors === 3) return CellState.ALIVE;
    if (numberOfAliveNeighbors > 3) return CellState.DEAD;
  }
}