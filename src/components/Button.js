import PropTypes from 'prop-types';
import styles from '../styles/Button.module.css';

function Button(props) {
  const { text, textAlign, flex, color, textColor, cursor, onClick, testId } =
    props;
  let alignment = 'center';
  let paddingRight = '0';
  switch (textAlign) {
    case 'right':
      alignment = 'flex-end';
      paddingRight = '2em';
      break;
    default:
    case 'center':
      break;
  }

  const handleClick = () => {
    onClick(text);
  };

  return (
    <button
      data-testid={testId}
      className={styles.button}
      style={{
        justifyContent: alignment,
        color: textColor,
        flex,
        backgroundColor: color,
        paddingRight,
        cursor,
      }}
      type="button"
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <p>{text}</p>
    </button>
  );
}

Button.defaultProps = {
  textAlign: 'center',
  flex: 1,
  color: '#e0e0e0',
  textColor: '#000',
  cursor: 'pointer',
  testId: 'button',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string,
  textAlign: PropTypes.string,
  flex: PropTypes.number,
  color: PropTypes.string,
  textColor: PropTypes.string,
  cursor: PropTypes.string,
};

export default Button;
