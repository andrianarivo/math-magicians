import calculate from '../logic/calculate';

describe('testing calculate', () => {
  test('addition', () => {
    const result = calculate({ total: 1, next: 1, operation: '+' }, '=');
    expect(result).toEqual({ total: '2', next: null, operation: null });
  });
  test('substraction', () => {
    const result = calculate({ total: 1, next: 1, operation: '-' }, '=');
    expect(result).toEqual({ total: '0', next: null, operation: null });
  });
  test('multiplication', () => {
    const result = calculate({ total: 1, next: 1, operation: 'x' }, '=');
    expect(result).toEqual({ total: '1', next: null, operation: null });
  });
  test('division', () => {
    const result = calculate({ total: 1, next: 1, operation: '÷' }, '=');
    expect(result).toEqual({ total: '1', next: null, operation: null });
  });
  test('modulo', () => {
    const result = calculate({ total: 1, next: 1, operation: '%' }, '=');
    expect(result).toEqual({ total: '0', next: null, operation: null });
  });
});
