import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { text, textAlign, flex, color, textColor, cursor } = props;
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
  return (
    <div
      className="button"
      style={{
        justifyContent: alignment,
        color: textColor,
        flex,
        backgroundColor: color,
        paddingRight,
        cursor,
      }}
    >
      <p>{text}</p>
    </div>
  );
};

Button.defaultProps = {
  textAlign: 'center',
  flex: 1,
  color: '#e0e0e0',
  textColor: '#000',
  cursor: 'pointer',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
  flex: PropTypes.number,
  color: PropTypes.string,
  textColor: PropTypes.string,
  cursor: PropTypes.string,
};

export default Button;
