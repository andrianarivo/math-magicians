import './Calculator.css';
import Button from './Button';

const Calculator = () => (
  <div className="calculator">
    <Button
      text="0"
      textAlign="right"
      color="#858693"
      textColor="#fff"
      cursor="auto"
    />
    <div className="row">
      <Button text="AC" />
      <Button text="+/-" />
      <Button text="%" />
      <Button text="÷" color="#f5913e" />
    </div>
    <div className="row">
      <Button text="7" />
      <Button text="8" />
      <Button text="9" />
      <Button text="x" color="#f5913e" />
    </div>
    <div className="row">
      <Button text="4" />
      <Button text="5" />
      <Button text="6" />
      <Button text="-" color="#f5913e" />
    </div>
    <div className="row">
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      <Button text="+" color="#f5913e" />
    </div>
    <div className="row">
      <Button text="0" flex={2} />
      <Button text="." />
      <Button text="=" color="#f5913e" />
    </div>
  </div>
);

Calculator.defaultProps = {};

Calculator.propTypes = {};

export default Calculator;
