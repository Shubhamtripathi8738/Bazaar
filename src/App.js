// import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';

import Header from './component/Header';
import Home from './Pages/Home';
import MenuBar from './component/MenuBar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lazy, Suspense } from 'react';
import AttributeCatId from './component/AttributeCatId';
import ProductPage from './ProductPage';
import WishList from './component/WishList';
import Checkout from './component/Checkout';
import SellerProfile from './component/SellerProfile';
import Notification from './component/Notification';
import Profile from './component/Profile';
import ManageAddress from './component/ManageAddress';
import ChangePassword from './component/ChangePassword';

const Cart=lazy(()=> import ("./Pages/Cart"));

function App() {
  return (
   <>
  <BrowserRouter>
        <Header/>
        <MenuBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/category/:slug' element={<AttributeCatId />}/>
          <Route path='/product/:category/:id' element={<ProductPage/>}/>
          <Route path="/cart" element={
            <div>
              <Suspense fallback={<div>Page Loading...</div>}>
                <Cart/>
              </Suspense>

            </div>
          }/>
      <Route path="/WishList" element={<WishList/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/seller/:id" element={<SellerProfile/>}/>
      <Route path="/Notification" element={<Notification/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/profile/manage_address" element={<ManageAddress/>}/>
      <Route path="/profile/change-password" element={<ChangePassword/>}/>
        </Routes>
      </BrowserRouter>
      

 
   </>
  );
}

export default App;
