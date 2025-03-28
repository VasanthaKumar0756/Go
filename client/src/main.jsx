import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/@flaticon/flaticon-uicons/css/all/all.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';


// import '../public/css/owl.carousel.min.css';
import './index.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
