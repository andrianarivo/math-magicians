import operate from '../logic/operate';

describe('testing operate', () => {
  test('addition', () => {
    const result = operate(1, 1, '+');
    expect(result).toBe('2');
  });
  test('substraction', () => {
    const result = operate(1, 1, '-');
    expect(result).toBe('0');
  });
  test('multiplication', () => {
    const result = operate(1, 1, 'x');
    expect(result).toBe('1');
  });
  test('division', () => {
    const result = operate(1, 1, '÷');
    expect(result).toBe('1');
  });
  test('modulo', () => {
    const result = operate(1, 1, '%');
    expect(result).toBe('0');
  });
});
