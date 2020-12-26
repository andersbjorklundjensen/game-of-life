import Cell from "./Cell";
import CellState from "./ECellState";

export default class Game {
  private grid: Cell[][];

  public constructor($grid: CellState[][]) {
    this.grid = $grid.map((row) => row.map(cellState => new Cell(cellState)));
  }

  public getGrid() {
    return this.grid;
  }
}