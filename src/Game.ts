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

  public getAliveNeighborsForCell(x: number, y: number) {
    if (!this.grid[x][y]) return 0;

    let total = 0;

    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (!(i > this.grid.length - 1 || j > this.grid[0].length - 1)) {
          if (!(j < 0 || i < 0)) {
            if (!(j === y && i === x)) {
              if (this.getGrid()[i][j].isAlive())
                total++;
            }
          }
        }
      }
    }

    return total;
  }

  public generateNextGridState(): Cell[][] {
    return this.grid
      .map((row, rowIndex) => row
        .map((cell, cellIndex) => {
          const aliveNeighbors = this.getAliveNeighborsForCell(rowIndex, cellIndex);
          return new Cell(cell.getNextState(aliveNeighbors));
        }));
  }

  public tick() {
    const nextState = this.generateNextGridState();
    this.grid = nextState;
  }
}