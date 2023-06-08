import { useState } from 'react';
import styles from '../styles/Calculator.module.css';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatedObj, setCalculatedObj] = useState({
    next: null,
    total: null,
    operator: null,
  });
  const handleClick = (buttonName) => {
    const newObj = calculate(calculatedObj, buttonName);
    setCalculatedObj(newObj);
  };

  const resultText = () => {
    const { next, operation, total } = calculatedObj;
    let resultString = '0';
    if (next || operation) {
      resultString = next ?? operation;
    }
    if (total && !next && !operation) {
      resultString = total;
    }
    return resultString;
  };

  return (
    <div className={styles.calculator}>
      <Button
        text={`${resultText()}`}
        textAlign="right"
        color="#858693"
        textColor="#fff"
        cursor="auto"
        testId="result-text-button"
        onClick={() => {}}
      />
      <div className={styles.row}>
        <Button text="AC" onClick={handleClick} />
        <Button text="+/-" onClick={handleClick} />
        <Button text="%" onClick={handleClick} />
        <Button text="÷" color="#f5913e" onClick={handleClick} />
      </div>
      <div className={styles.row}>
        <Button text="7" onClick={handleClick} />
        <Button text="8" onClick={handleClick} />
        <Button text="9" onClick={handleClick} />
        <Button text="x" color="#f5913e" onClick={handleClick} />
      </div>
      <div className={styles.row}>
        <Button text="4" onClick={handleClick} />
        <Button text="5" onClick={handleClick} />
        <Button text="6" onClick={handleClick} />
        <Button text="-" color="#f5913e" onClick={handleClick} />
      </div>
      <div className={styles.row}>
        <Button text="1" onClick={handleClick} />
        <Button text="2" onClick={handleClick} />
        <Button text="3" onClick={handleClick} />
        <Button text="+" color="#f5913e" onClick={handleClick} />
      </div>
      <div className={styles.row}>
        <Button text="0" flex={2} onClick={handleClick} />
        <Button text="." onClick={handleClick} />
        <Button text="=" color="#f5913e" onClick={handleClick} />
      </div>
    </div>
  );
}

Calculator.defaultProps = {};

Calculator.propTypes = {};

export default Calculator;
