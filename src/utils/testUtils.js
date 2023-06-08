import { Route, Routes } from 'react-router-dom';
import HomePage from '../routes/HomePage';
import CalculatorPage from '../routes/CalculatorPage';
import QuotePage from '../routes/QuotePage';

export default function renderWithRoutes(ui, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);

  return (
    <Routes>
      <Route path="/" element={ui}>
        <Route index element={<HomePage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quote" element={<QuotePage />} />
      </Route>
    </Routes>
  );
}
