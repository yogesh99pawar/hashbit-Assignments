import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let calculatedResult;

    switch (operation) {
      case '+':
        calculatedResult = number1 + number2;
        break;
      case '-':
        calculatedResult = number1 - number2;
        break;
      case '*':
        calculatedResult = number1 * number2;
        break;
      case '/':
        calculatedResult = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        calculatedResult = 'Invalid operation';
    }

    setResult(calculatedResult);
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <br />
      <button onClick={() => calculate('+')}>Addition (+)</button>
      <button onClick={() => calculate('-')}>Subtraction (-)</button>
      <button onClick={() => calculate('*')}>Multiplication (*)</button>
      <button onClick={() => calculate('/')}>Division (/)</button>
      <div id="result">Result: {result}</div>
    </div>
  );
}

export default App;
