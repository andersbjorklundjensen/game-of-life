import React, { useState } from 'react';

const App = () => {
  const [gridSize, setGridSize] = useState(0)
  return (
    <div>
      <h1>Game of life</h1>
      <div data-testid="gridSize">{gridSize}</div>
      <button onClick={() => setGridSize(prev => prev + 1)}>+</button>
      <button onClick={() => setGridSize(prev => prev - 1)}>-</button>
    </div>
  )
}

export default App
