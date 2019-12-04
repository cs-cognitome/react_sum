import React from 'react';
import Sum from './components/Sum';

function App() {
  const a = 8;
  const b = 7;

  return (
    <div className = "App">
     {/* Sum of {a} and {b} is
     <Sum firstNumber = {a} secondNumber = {b} /> */}
     <Sum x={a} y={b} />
    </div>
  );
}

export default App;
