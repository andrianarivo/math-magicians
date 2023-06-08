import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';
import renderWithRoutes from '../utils/testUtils';

describe('testing NavBar component', () => {
  test('render', () => {
    const tree = renderer.create(
      <Router>
        <NavBar />
      </Router>
    );

    expect(tree).toMatchSnapshot();
  });

  test('user interaction', async () => {
    render(
      <Router>
        {renderWithRoutes(
          <>
            <NavBar />
            <Outlet />
          </>
        )}
      </Router>
    );

    await userEvent.click(screen.getByText('Calculator'));

    expect(screen.getByText('=')).toBeInTheDocument();
  });
});
