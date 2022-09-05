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
          <Route path="/cart" element={
            <div>
              <Suspense fallback={<div>Page Loading...</div>}>
                <Cart/>
              </Suspense>

            </div>
          }/>

        </Routes>
      </BrowserRouter>
      

 
   </>
  );
}

export default App;
