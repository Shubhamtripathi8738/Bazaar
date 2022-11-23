import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToWishListAction, deletecartaction, getAddToCart, getMyProfile, getProductPage, localDataAction } from "../Store/Action";
import Magnifier from "react-magnifier";
import SellerData from "../component/SellerData";
import SimilarProducts from "../component/SimilarProducts";
import SignUpPage from "../component/SignUpPage";

const ProductPage=()=>{
const dispatch=useDispatch()
const {id,category} = useParams();
const [state,setState]=useState()
const productpagedata = useSelector((state) => state.productpage?.productData);
var cartitems = useSelector((state) => state.getcartreducer?.productData);
var localdata = useSelector((state) => state.localdata?.productData);



useEffect(() => {
    getProductPage(dispatch, {id,category});
  },[]);

const myprofiledata = useSelector((state) => state.myProfile?.productData);
useEffect(()=>{
  if(localStorage.getItem("token")){
    getMyProfile(dispatch);

  }
},[])

var token=localStorage.getItem("token");

console.log(productpagedata?.[0]?._id);
useEffect(()=>{
if(token){
  cartitems?.forEach((value)=>{
  if(id==value?.productData[0]?._id){
    setState(true);
  }else{
    setState(false);
  }
  })
}else{
  if(localdata && localdata.length){
    localdata?.forEach((item)=>{
      console.log(item?.id, id);
  if(id==item?.id){
    setState(true);
  }else{
    setState(false);
  }
  })
  }
  else{
    setState(false);
  }
}
},[cartitems,localdata])


var isLocalProduct=false;
var product_id=productpagedata?.[0]._id;
var save_for_later=false;
var sellerId=productpagedata?.[0].userData[0]._id;
var user_id=myprofiledata?.userdata?._id


const Addcart=(x)=>{
  if(!localStorage.getItem("token")){
    const localdata=[{
      id:x._id,
      name:x.Title,
      price:x.Price.sell_price.$numberDecimal,
      brand:x.brandData[0].name,
      image:x.default_image,
      sellerId:sellerId,
      product_id:product_id
    }]
    
    var localItem =JSON.parse(localStorage.getItem("cartdata"))
    if (localItem && localItem?.length) {
      if(localItem[0].sellerId===x.userData[0]._id){
          localItem.push(localdata[0])
          localStorage.setItem('cartdata', JSON.stringify(localItem)) 
    }else{
      alert('different seller items could not added ');
    }
  }
  else {
    localStorage.setItem('cartdata', JSON.stringify(localdata))
  }
}else{
  getAddToCart(dispatch,{isLocalProduct,product_id,save_for_later,sellerId,user_id});
}
localDataAction(dispatch)
getAddToCart(dispatch,{isLocalProduct,product_id,save_for_later,sellerId,user_id});
}


const Removeitem=(y)=>{
  
  if(localStorage.getItem('token')){
    deletecartaction(dispatch,cartitems?.data[0]?._id);
  }else{
    var localstoragedata = JSON.parse(localStorage.getItem("cartdata"));
    for(let i in localstoragedata){
      if(localstoragedata[i].id==y._id)
      {
      localstoragedata.splice(i,1);
      localStorage.setItem("cartdata", JSON.stringify(localstoragedata));
      }
    }  
  }
  localDataAction(dispatch)
  deletecartaction(dispatch,cartitems?.data[0]?._id);
}
 


const addToWishList=(id)=>{
  if(localStorage.getItem('token')){
    addToWishListAction(dispatch,id)
  }else{
    console.log('jwejiowfope');
    <SignUpPage/>
  }
   
    
  
}



  useEffect(() => {
    localDataAction(dispatch);
  }, [dispatch]);

console.log(productpagedata);
    return(
        <>
<div>This is product page</div>


{productpagedata?.map((value,Index)=>{
  return(
<>
<div key={Index}>
<div>{value.brandData[0].name}</div>
<h5>{value.Title}</h5>
<div>old price:{value.Price.current_store_price.$numberDecimal}</div>
<div>selling price:{value.Price.sell_price.$numberDecimal}</div>


<div className="costumes">   
<Magnifier src={value.default_image} width={500} />   
                          </div>
                          <span className="costumes"><img style={{width:"80px"}}
                          src={value?.Image[1]?.original}
                        alt="product-img2"/></span>
<span className="costumes"><img style={{width:"80px"}}
                            src={value?.Image[2]?.original}
                          alt="product-img3"/></span>
<span className="costumes"><img style={{width:"80px"}} src={value?.Image[3]?.original}/></span>
{state ?   (<button onClick={()=>Removeitem(value)}>Remove from Cart</button>):(<button onClick={()=>Addcart(value)}>Add to Cart</button>)}
<button onClick={()=>addToWishList(value._id)} >Add To Wishlist</button>

<h5 dangerouslySetInnerHTML={{__html: value.returnPolcyData[0].returnPolicy}} />
<SellerData  id={value.userData[0]._id}/>

</div>
</>
  );
})}
<SimilarProducts/>
        </>   
    )
}
export default ProductPage;