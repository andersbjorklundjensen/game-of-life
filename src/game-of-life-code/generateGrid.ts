import CellState from "./ECellState";

export default function generateGrid(x: number, y: number) {
  let generatedGrid = [];

  for (let i = 0; i < x; i++) {
    let temp = [];
    for (let j = 0; j < y; j++)
      temp.push(CellState.DEAD);
    generatedGrid.push(temp);
  }

  return generatedGrid;
}