import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Collection from './Pages/Collection.jsx';
import About from './Pages/about';
import Contact from './Pages/contact';
import Card from './Pages/card';
import Login from './Pages/login';
import SignUp from './Pages/SignUp.jsx';
import Orders from './Pages/Orders';
import PleaseOrder from './Pages/please_order';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopContextProvider from './context/ShopContextProvider.jsx';
import ProductDetails from './Pages/ProductDetails';
import ErrorBoundary from './ErrorBoundary';


const App = () => {
  return (
    <ErrorBoundary>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
             <Route path="/product/:id" element={<ProductDetails />} /> {/* ✅ Only this */}
            <Route path='/collection' element={<Collection />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/card' element={<Card />} />
            <Route path='/login' element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/please_order' element={<PleaseOrder />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
