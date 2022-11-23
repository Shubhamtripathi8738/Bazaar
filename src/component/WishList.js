import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishList, removeFromWishlist} from "../Store/Action";


const WishList=()=>{

  const dispatch=useDispatch();
const wishlistdata = useSelector((state) => state.getwishlistreducer?.productData);

// var token=localStorage.getItem('token')

useEffect(()=>{
  getWishList(dispatch)
},[])      

const removeToWishList=(data)=>{
  removeFromWishlist(dispatch,data)
}

console.log(wishlistdata);
   
   return(
    <>
    <div className="wishlist-section" >
  <h2>Wishlist</h2>
  <div className="plp-product-screen" >
    <div className="costume-box">
     {wishlistdata?.map((item,index)=>{
      return (
        <>
             <div key={index}>
  <div className="costume-block">
  <div className="costumes"><img src={item?.productData?.Image[0]?.original}
      alt="costume-img"/></div>
<div>{item.productData.Title}</div>
<div className="wishlist-btns">
  
  <div className="add-cart-wishlist add-cart-wishlist-wrap">Add to cart</div>
  <div className="remove-wishlist remove-wishlist-wrapper" onClick={()=>removeToWishList(item._id)}>Remove</div>
</div>
</div>
</div>
        </>
      )
 
     })}
    </div>
  </div>
</div>
    
    
    </>
   );
}
export default WishList;