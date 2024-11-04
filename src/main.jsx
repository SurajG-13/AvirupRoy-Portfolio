import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

import Layout from './Layout';

import Home from './component/Home/Home';
import Services from './component/Service/Services';
import ContactForm from './component/Contact/Contact';
import Gallery from './component/Gallery/Gallery';
import About from './component/About/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />{' '}
      <Route path="/Services" element={<Services />} />
      <Route path="/AboutMe" element={<About />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/ContactMe" element={<ContactForm />} />
    </Route>,
  ),
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
