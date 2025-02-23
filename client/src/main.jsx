import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/@flaticon/flaticon-uicons/css/all/all.css';

// import '../public/css/owl.carousel.min.css';
import './index.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
