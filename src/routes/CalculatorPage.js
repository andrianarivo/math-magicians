import Calculator from '../components/Calculator';
import styles from '../styles/CalculatorPage.module.css';

export default function CalculatorPage() {
  return (
    <div className={styles.calcontainer}>
      <h3>Let&lsquo;s do some maths !</h3>
      <div className={styles.calwrapper}>
        <Calculator />
      </div>
    </div>
  );
}
