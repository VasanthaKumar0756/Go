import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App