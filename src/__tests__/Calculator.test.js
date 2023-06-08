import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('testing Calculator component', () => {
  test('render', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  test('user interaction', () => {
    render(<Calculator />);

    const resultButton = screen.getByTestId('result-text-button');
    fireEvent.click(screen.getByText('1'));

    expect(resultButton.innerHTML).toBe('<p>1</p>');
  });
});
