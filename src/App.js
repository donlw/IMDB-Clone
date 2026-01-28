import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { routePath } from './constants/routes';

// components
import { Home, CategoryMovie } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* Redirect root to home */}
          <Route path="/" element={<Navigate to={routePath.home} />} />

          <Route path={routePath.home} element={<Home />} />
          <Route path={routePath.categories} element={<CategoryMovie />} />

          {/* fallback route */}
          <Route path="*" element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
