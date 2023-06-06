import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './routes/HomePage';
import QuotePage from './routes/QuotePage';
import CalculatorPage from './routes/CalculatorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quote" element={<QuotePage />} />
      </Route>
    </Routes>
  );
}

export default App;
