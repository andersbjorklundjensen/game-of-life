import CellState from "./ECellState";

export default class Cell {
  private state: CellState;

  constructor($state: CellState) {
    this.state = $state;
  }

  public isAlive() {
    return this.state === CellState.ALIVE;
  }
}