import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layouts/Layout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import DestinationPage from './pages/Destination/DestinationPage';
import BlogPage from './pages/Blogs/BlogPage';
import ContactUsPage from './pages/ContactUs/ContactUsPage';
import BlogViewPage from './pages/Blog/BlogViewPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='destinations' element={<DestinationPage />} />
        <Route path='blogs' element={<BlogPage />} />
        <Route path='contact' element={<ContactUsPage />} />
        <Route path='blog' element={<BlogViewPage />} />
      </Route>
    </Routes>
  )
}

export default App