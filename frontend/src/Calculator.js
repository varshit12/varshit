import React, { useState } from 'react';
import './Calculator.css';



const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);

  const handleDigitClick = (digit) => {
    if (displayValue === '0' || isOperatorClicked) {
      setDisplayValue(digit);
      setIsOperatorClicked(false);
    } else {
      setDisplayValue((prevDisplay) => prevDisplay + digit);
    }
  };

  const handleOperatorClick = (op) => {
    if (currentValue === null) {
      setCurrentValue(parseFloat(displayValue));
    } else if (operator) {
      calculate();
    }

    setOperator(op);
    setIsOperatorClicked(true);
  };

  const calculate = () => {
    if (operator && currentValue !== null) {
      const prevValue = currentValue;
      const nextValue = parseFloat(displayValue);

      let result;
      switch (operator) {
        case '+':
          result = prevValue + nextValue;
          break;
        case '-':
          result = prevValue - nextValue;
          break;
        case '*':
          result = prevValue * nextValue;
          break;
        case '/':
          result = prevValue / nextValue;
          break;
        case'^':
            result = Math.pow(prevValue, nextValue);
          break;
        default:
          break;
      }

      setDisplayValue(result.toString());
      setCurrentValue(result);
    }
  };

  const handleEqualClick = () => {
    calculate();
    setCurrentValue(null);
    setOperator(null);
    setIsOperatorClicked(false);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setCurrentValue(null);
    setOperator(null);
    setIsOperatorClicked(false);
  };

  return (

    <>
    <table className='q1'>
    <h1 className='H1'>Calculator</h1>
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>

        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>

        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>

        <button onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={() => handleOperatorClick('.')}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>

        <button onClick={handleClearClick}>C</button>
        <button onClick={() => handleOperatorClick('^')}>^</button> 
        <button aria-colspan={4}></button> 
      </div>
    </div>
    </table>
    </>
  );
};

export default Calculator;
