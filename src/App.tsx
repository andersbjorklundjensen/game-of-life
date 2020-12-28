import React, { useState } from 'react';
import Game from './game-of-life-code/Game';
import generateGrid from './game-of-life-code/generateGrid';
import './App.css';
import CellState from './game-of-life-code/ECellState';
import Cell from './game-of-life-code/Cell';

const generatedGrid = generateGrid(10, 10);
const game = new Game(generatedGrid);

const App = () => {
  const [grid, setGrid] = useState(game.getGrid());

  const setCellState = (rowIndex: number, cellIndex: number, isCellAlive: boolean) => {
    const newGrid = game.getGrid()
      .map((row, rowI) =>
        row.map((cell, cellI) => {
          if (rowIndex == rowI && cellIndex === cellI) {
            const newCellState = isCellAlive ? CellState.DEAD : CellState.ALIVE;
            return new Cell(newCellState);
          } else {
            return cell;
          }
        })
      )

    game.setGrid(newGrid);
    setGrid(newGrid);
  }

  return (
    <div>
      <h1>Game of life</h1>
      <div>
        <table>
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) =>
                  <td
                    onClick={() => setCellState(rowIndex, cellIndex, cell.isAlive())}
                    className={cell.isAlive() ? 'alive' : ''} key={cellIndex}>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
