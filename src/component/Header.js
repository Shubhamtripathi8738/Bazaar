import React from "react";
import logoBazaar from "../assets/Images/bazar-new-png.png";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";



const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  website: yup.string().url(),
});
const Header = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [SignUp, setSignUp] = useState(false);


  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    
    console.log(data);
    

  };

  const LoginClick = () => {
    setIsShowLogin(true);
  };
 
  const OpenSignup = () => {
    setSignUp(true);
  };
const loginButton=(event)=>{
console.log(event);
}
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
                    <button onClick={LoginClick}>Sign in</button>
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
                                          <form
                                            onSubmit={handleSubmit(onSubmit)}
                                          >
                                            <div>
                                              <label>First Name</label>
                                              <input
                                            
                                              
                                                {...register("firstName")}
                                              />
                                              {errors.firstName && (
                                                <p>
                                                  {errors.firstName.message}
                                                </p>
                                              )}
                                            </div>
                                            <div style={{ marginBottom: 10 }}>
                                              <label>Last Name</label>
                                              <input
                                              
                                    
                                                {...register("lastName")}
                                              />
                                              {errors.lastName && (
                                                <p>{errors.lastName.message}</p>
                                              )}
                                            </div>
                                            <div>
                                              <label>Age</label>
                                              <input
                                            
                                                {...register("age", {
                                                  valueAsNumber: true,
                                                })}
                                              />
                                              {errors.age && (
                                                <p>{errors.age.message}</p>
                                              )}
                                            </div>
                                            <div>
                                              <label>Website</label>
                                              <input
                                              
                                              {...register("website")} />
                                              {errors.website && (
                                                <p>{errors.website.message}</p>
                                              )}
                                            </div>
                                            <input type="submit" />
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </i>
                          </button>
                          <div className="inner-sign sign-in-without-img">
                            <div className="sign-form forget-password-signin-form">
                              <form>
                                <div className="detail-from">
                                  <div className="user-detail-edit user-signin-details">
                                    <h4 className="form-title signin-head">
                                      <span className="login login-head">
                                        Sign in
                                      </span>
                                    </h4>
                                  </div>
                                  <div className="enter-mobile">
                                    Please enter your mobile number
                                  </div>
                                  <div className="form-input number-code-wrapper sign-in-mobile">
                                    <span className="number-code">+91</span>
                                    <div
                                      className="MuiFormControl-root MuiTextField-root"
                                      maxlength="10"
                                    >
                                      <label
                                        className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required"
                                        data-shrink="false"
                                      >
                                        Mobile Number
                                        <span
                                          aria-hidden="true"
                                          className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
                                        >
                                          &thinsp;*
                                        </span>
                                      </label>
                                      <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                                        <input
                                         
                                          className="MuiInputBase-input MuiOutlinedInput-input"
                                          
                                        ></input>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="sign-btn login-btn-wrapper">
                                    <button type="submit" className="shop-now" onClick={loginButton}>
                                      Continue
                                    </button>
                                    <br />
                                  </div>
                                  <div className="use-email-wrapper">
                                    <span className="email-text">
                                      Use your{" "}
                                      <a>
                                        <span className="login">
                                          Sign in &nbsp;
                                        </span>
                                      </a>
                                    </span>
                                  </div>
                                  <div className="login-terms-condition">
                                    <p>
                                      By continue you are agree to{" "}
                                      <a
                                        target="_blank"
                                        className="sub-text"
                                        href="/page/terms"
                                      >
                                        Terms and Conditions
                                      </a>{" "}
                                      &amp;{" "}
                                      <a
                                        target="_blank"
                                        className="sub-text"
                                        href="/policy"
                                      >
                                        privacy policy
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </span>
                </div>
              </div>
              <div className="cart-wrap">
                <div className="tooltip">Cart</div>
                <i className="fa fa-shopping-cart"></i>
                <Link to="/cart">Cart Page</Link>
              </div>
            </div>
          </div>
        </div>
     

      </header>
    
    </>
  );
};

export default Header;
