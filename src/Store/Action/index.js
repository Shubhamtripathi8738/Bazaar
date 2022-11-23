
import { getAttributeByCatId,
          getBanner, 
          getBrands, 
          getCategory, 
          getHomePageNew,  
          getProductList, 
        } from "../../Api/api"
import { ADD_USER_ADDRESS, GET_ADD_TO_CART, GET_ADD_TO_WISHLIST, GET_ATTRIBUTE_BY_CATID, GET_AVAILABLE_COUPONS, GET_BANNER, GET_BRANDS, GET_CART, GET_CARTQUANTITY, GET_CATEGORY, GET_CHANGE_PASSWORD, GET_COUNTRY_LIST, GET_DELETE_ADDRESS, GET_DELETE_CART, GET_HOME_PAGE, GET_HOME_PAGE_DATA, GET_HOME_PAGE_NEW, GET_KITCHEN_AND_DINING, GET_LOCAL_DATA, GET_MY_PROFILE_DATA, GET_NOTIFICATION, GET_PRODUCT_LIST, GET_PRODUCT_PAGE, GET_SEASONAL_DECOR, GET_SELLER_DATA, GET_SELLER_PRODUCTS, GET_SIGN_IN, GET_SIGN_UP, GET_SIMILAR_PRODUCTS, GET_TRENDS_ALERT, GET_UPGRADE_WORK, GET_USER_ADDRESS, GET_WISHLIST, GET_WISH_LIST, LOGOUT, PRODUCT_PAGE, REMOVE_FROM_WISHLIST} from "./ActionType"
import { api } from "../../Api/api"
import { ADDTOCART, ADDTOWISHLIST, ADDUSERADDRESS, AVAILABLECOUPONS, CHANGECARTQUANTITY, CHANGEPASSWORD, COUNTRYLIST, DELETEADDRESS, DELETECART, GETCART, GETNOTIFICATION, GETWISHLIST, MYPROFILE, PRODUCTPAGE, REMOVEFROMWISHLIST, REMOVEFROMWISHLISTAPI, SELLERPRODUCTS, SELLERPROFILE, SIGNIN, SIGNUP, SIMILARPRODUCTS, USERADDRESS, WISHLIST } from "../../Api/endPoints"


// export default   getProducts().then((Response) => { return ((Response.data)) })
export const getCategoryAction=(dispatch)=>{
   getCategory()
   .then(response => 
  {dispatch({ type: GET_CATEGORY, payload:response.data.data})})
}

export const getBrandsAction=(dispatch)=>{
  getBrands()
  .then(response=>
    {dispatch({type: GET_BRANDS, payload:response.data.data})})
}

export const getBannerAction=(dispatch)=>{
getBanner().then(response=>{
  dispatch({type: GET_BANNER, payload:response.data.data})
})
}

export const getAttributeByCatIdAction=(dispatch, filterData)=>{
getAttributeByCatId(filterData).then(response=>{
  dispatch({type: GET_ATTRIBUTE_BY_CATID, payload:response.data})
})
}

export const getProductListAction=(dispatch, data)=>{
  getProductList(data).then(response=>{
    dispatch({type: GET_PRODUCT_LIST,payload:response.data})
  })
}

export const getProductPage=(dispatch,data)=>{
api.post(`${PRODUCTPAGE}/${data.id}`,{type:data.category}).then(response=>{
  dispatch({type:GET_PRODUCT_PAGE,payload:response.data.data})
})
}

export const getSellerData=(dispatch,data)=>{
  
  api.post(`${SELLERPROFILE}`,{sellerId:data}).then(response=>{
    dispatch({type:GET_SELLER_DATA,payload:response.data.data})
  })
}

export const getMyProfile=(dispatch)=>{
  api.post(MYPROFILE).then(response=>{
    dispatch({type:GET_MY_PROFILE_DATA,payload:response.data})
  })
}

export const getSimilarProducts=(dispatch,data)=>{
  api.post(`${SIMILARPRODUCTS}`,{categoryId:data.categoryId,price:data.price,productId:data.id}).then(response=>{
    dispatch({type:GET_SIMILAR_PRODUCTS,payload:response.data.data})
  })
}

export const getSignIn=(dispatch,data)=>{
  api.post(`${SIGNIN}`,data).then(response=>{
    
    localStorage.setItem("token", response.data.token);
    dispatch({type:GET_SIGN_IN,payload:response.data})
    
    window.location.reload();

  })
}


export const getSignUp=(dispatch,data)=>{
  api.post(`${SIGNUP}`,data).then(response=>{
    dispatch({type:GET_SIGN_UP,payload:response.data})
  
  })
}

export const getAddToCart=(dispatch,data)=>{
  api.post(ADDTOCART,{cart:[{isLocalProduct:data.isLocalProduct,product_id:data.product_id,save_for_later:data.save_for_later,sellerId:data.sellerId,user_id:data.user_id}]}).then(response=>{
    dispatch({type:GET_ADD_TO_CART,payload:response.data})
  })
}

export const getcart=(dispatch,data)=>{
  api.post(GETCART,{data}).then(response=>{
    dispatch({type:GET_CART,payload:response.data.data})
  })
}

export const deletecartaction=(dispatch,data)=>{
  api.post(DELETECART,{cartId:[data]}).then(response=>{
    dispatch({type:GET_DELETE_CART,payload:response.data})
  })
}

export const localDataAction=(dispatch)=>{
  dispatch({type:GET_LOCAL_DATA,payload:JSON.parse(localStorage.getItem("cartdata"))})
}

export const addToWishListAction=(dispatch,data)=>{
  api.post(ADDTOWISHLIST,{productId:data}).then(response=>{
  dispatch({type:GET_ADD_TO_WISHLIST,payload:response.data})
})
}

export const getWishList=(dispatch)=>{
  api.post(GETWISHLIST).then(response=>{
    dispatch({type:GET_WISH_LIST,payload:response.data.data})
  })
}

export const removeFromWishlist=(dispatch,data)=>{
  api.post(REMOVEFROMWISHLISTAPI,{wishlistId:data}).then(response=>{
    getWishList(dispatch)
    dispatch({type:REMOVE_FROM_WISHLIST,payload:response.data})
  })
}

export const getuserAddress=(dispatch)=>{
  api.post(USERADDRESS).then(response=>{
    dispatch({type:GET_USER_ADDRESS,payload:response.data.data})
  })
}

export const getSellerProducts=(dispatch,data)=>{
  api.post(SELLERPRODUCTS,{sellerId:data}).then(response=>{
    dispatch({type:GET_SELLER_PRODUCTS,payload:response.data})
  })
} 

export const getAvailableCoupons=(dispatch,data)=>{
  api.post(AVAILABLECOUPONS,{orderMethod:data}).then(response=>{
    dispatch({type:GET_AVAILABLE_COUPONS,payload:response.data})
  })
}

export const getCountryList=(dispatch)=>{
  api.get(COUNTRYLIST).then(response=>{
    dispatch({type:GET_COUNTRY_LIST,payload:response.data})
  })
}

export const adduseraddress=(dispatch,data)=>{
  api.post(ADDUSERADDRESS,data).then(response=>{
    dispatch({type:ADD_USER_ADDRESS,payload:response.data})
    window.location.reload();
  })
}

export const getNotification=(dispatch,data)=>{
  api.post(GETNOTIFICATION,data).then(response=>{
    dispatch({type:GET_NOTIFICATION,payload:response.data})
  })
}

export const changeCartQuantity=(dispatch,data)=>{
  api.post(CHANGECARTQUANTITY,data).then(response=>{
    dispatch({type:GET_CARTQUANTITY,payload:response.data})
  })
}

export const deleteAddress=(dispatch,data)=>{
  api.post(DELETEADDRESS,{addId:data}).then(response=>{
    dispatch({type:GET_DELETE_ADDRESS,payload:response.data})
  })
}

export const changePassword=(navigate,dispatch,data)=>{
  api.post(CHANGEPASSWORD,data).then(response=>{
    dispatch({type:GET_CHANGE_PASSWORD,payload:response.data})
    if (response.data) {
      navigate("/profile");
    }
  })
}

export const getHomePageNewAction = (dispatch) => {
  getHomePageNew(1).then((response) => {
      let payload = response.data.data.map((item) => {
        
          return ({
              block_name: item.block_name,
              id: item._id,
              name: item.translation_data[0].name
          })
      })
      dispatch({ type: GET_HOME_PAGE_NEW, payload: payload })
  })
}
