import React, { useState } from 'react';
import Game from './game-of-life-code/Game';
import generateGrid from './game-of-life-code/generateGrid';

const generatedGrid = generateGrid(10, 10);
const game = new Game(generatedGrid);

const App = () => {
  return (
    <div>
      <h1>Game of life</h1>
      <div>
        <table>
          <tbody>
            {game.getGrid().map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => <td key={cellIndex}></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
