import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('testing Button component', () => {
  test('render', () => {
    const tree = renderer.create(<Button onClick={() => {}} text="1" />);
    expect(tree).toMatchSnapshot();
  });

  test('user interaction', () => {
    let value = 'fail';
    render(
      <Button
        onClick={() => {
          value = 'clicked';
        }}
        text="1"
      />
    );

    fireEvent.click(screen.getByText('1'));

    expect(value).toBe('clicked');
  });
});
