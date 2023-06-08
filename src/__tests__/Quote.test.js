import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('testing Quote component', () => {
  test('render', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
