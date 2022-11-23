import React, { useEffect } from "react";
import logoBazaar from "../assets/Images/bazar-new-png.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getAddToCart, getcart} from "../Store/Action";
import SignIn from "./SignIn";
import SignUpPage from "./SignUpPage";






const Header = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [SignUp, setSignUp] = useState(false);
  const [localData,setLocalData]=useState(localStorage.getItem("token"))
  const [wishListData,setWishListData]=useState(false);
  const [notificationData,setNotificationData]=useState(false);
  const [myProfile,setMyProfile]=useState(false);
  const [changePassword,setChangePassword]=useState(localStorage.getItem("token"))

useEffect(()=>{
  if(localStorage.getItem("token")){
    setWishListData(true);
    setNotificationData(true);
    setMyProfile(true);
  }

},[])


 
  const dispatch= useDispatch();
  const LoginClick = (e) => {
    setIsShowLogin(true);
   
  };
 
  const OpenSignup = () => {
    setSignUp(true);
  };


const handleLogOut=()=>{
  localStorage.removeItem("token")
  window.location.reload();
}



var localtoken=localStorage.getItem('token');
var cartdata=localStorage.getItem('cartdata')

useEffect(()=>{
  if(localtoken){
    
    if(localStorage.getItem('token')){
      getcart(dispatch);
  }

   if(cartdata){
    
   var newarr=JSON.parse(localStorage.getItem("cartdata"))
   
   const requiredlocalstoragepayload = newarr?.map(
    (item) => {
      return {
        isLocalProduct: false,
        product_id: item.id,
        save_for_later: false,
        sellerId: item.sellerId,
      };
    }
  );
  
  const reqpayload = {
    cart: [requiredlocalstoragepayload ],
  };
  
 
  requiredlocalstoragepayload?.forEach((item,index)=>{
    
   getAddToCart(dispatch,item);
   window.location.reload();
 })  
 localStorage.removeItem('cartdata')
   }
  
  }
 },[])
//  const cartitems = useSelector((state) => state?.getcartreducer?.productData);
   


  return (
    <>
      <header className="header">
        <div className="header-login">
          <div className="container">
            <div className="login">
              <div>
                <span className="logo-class logo-class-wrapper">
                  <img src={logoBazaar} alt="Bazaar" />
                </span>
              </div>
              <div className="search-brand">
                <form>
                  <input
                    type="text"
                    aria-autocomplete="list"
                    aria-controls="reactAutoWhatever-1"
                    className="react-autosuggest__input"
                    placeholder="Search for anything"
                  />
                  <div
                    id="reactAutoWhatever-1"
                    className="react-autosuggest__suggestions-container"
                  ></div>
                </form>
                <i className=""></i>
              </div>
            </div>
            <div className="header-address header-address-wrapper">
              <div className="product-location-wraps product-location-main-wrp">
                <div className="product-location">
                  <div className="location-mark">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="location-text">
                      <div className="deliver-text"></div>
                      <div className="wrap-delivery">
                        <div className="delivery-text"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span>   {notificationData? <Link to="/Notification">Notification</Link>:null} </span>
            <div className="signup-register">
              <div>
                <div className="signIn-register signup-register-wrapper">
                  <span className="header-text"></span>
                </div>
                <div
                  className="signIn-register homepage-signIn-btn"
                  style={{ paddingRight: "20px" }}
                >
                  <span className="header-text">
                    {!localData ? <button onClick={LoginClick}>Sign in</button>:<button onClick={handleLogOut}>Sign out</button>}
                    {isShowLogin && (
                      <div className="popup-wrap">
                        <div className="signup-form signup-frm-wrp user-login login-page-wrapp">
                          <button className="close-btn">
                            <i className="fal fa-times-circle">
                              <button
                                onClick={() => setIsShowLogin(!isShowLogin)}
                              >
                                close
                              </button>
                            </i>
                            <i className="fal fa-times-circle">
                              <div>
                                <button onClick={OpenSignup}>Sign Up</button>
                                {SignUp && (
                                  <div>
                                    <div className="popup-wrap">
                                      <div className="signup-form signup-frm-wrp user-login login-page-wrapp">
                                        <button className="close-btn">
                                          <i className="fal fa-times-circle">
                                            <button
                                              onClick={() => setSignUp(!SignUp)}
                                            >
                                              close
                                            </button>
                                          </i>
                                        </button>
                                        <div>
                                     <SignUpPage/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </i>
                          </button>



                         <SignIn/>
                        </div>


                      </div>
                    )}
                  </span>
               
                 
                </div>
              </div>
              <span>   {wishListData? <Link to="/WishList">WishList</Link>:null} </span>

              <div className="cart-wrap">
                <div className="tooltip">Cart</div>
                <i className="fa fa-shopping-cart"></i>
                <Link to="/cart">Cart Page</Link>
              </div>
            </div>
           {myProfile? <Link to="/profile">My Profile</Link>:null} 
           {changePassword? <Link to="/profile/change-password">Change Password</Link>:null}
          </div>
        </div>
     

      </header>
    
    </>
  );
};

export default Header;
