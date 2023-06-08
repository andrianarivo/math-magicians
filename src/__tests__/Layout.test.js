import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/Layout';

describe('testing Layout component', () => {
  test('render', () => {
    const tree = renderer
      .create(
        <Router>
          <Layout />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
