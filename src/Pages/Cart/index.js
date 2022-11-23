import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletecartaction, getcart } from "../../Store/Action";
const Cart=()=>{
    const [cartData,setCartData]=useState();
useEffect(()=>{
    setCartData (JSON.parse(localStorage.getItem("cartdata")))
},[])

const dispatch=useDispatch();
      const cartitems = useSelector((state) => state.getcartreducer?.productData);
     
      useEffect(() => {
        if(localStorage.getItem('token')){
            getcart(dispatch);
        }
      }, [dispatch]);
   
    const Removeitem=(y)=>{

      if(localStorage.getItem('token')){
        deletecartaction(dispatch,cartitems?.[0]?._id);
      }else{
        var localstoragedata = JSON.parse(localStorage.getItem("cartdata"));
        for(let i in localstoragedata){
          if(localstoragedata[i].id==y.id)
          {
            
          localstoragedata.splice(i,1);
          localStorage.setItem("cartdata", JSON.stringify(localstoragedata));
          }
      } 
      setCartData(JSON.parse(localStorage.getItem("cartdata")));
      }
      }
      
  
return(
<>
<div>This is Cart Page</div>

{localStorage.getItem('token')?
(
    <div>
    { cartitems?.map(((item,index)=>{
        return(
<div key={index}>
<div>{item.productData[0].Title}</div>
<div>{item.BrandData[0].name}</div>
<div>{item.productData[0].Price.sell_price.$numberDecimal}</div>
<img src={item.productData[0].default_image} />
<button onClick={()=>Removeitem(item)}>Remove from Cart</button>
</div>
        );
    }))
}
</div>
)
:
(
    <div>
{cartData?.map((value,index)=>{
    return(
   <div key={index}>
  
    <img style={{ width: '200px' }} src={value.image} alt="" className="img-responsive" />
    <div>
{value.brand}
    </div>
    <div>{value.name}</div>
    <div>{value.price}</div>
<button onClick={()=>Removeitem(value)}>Remove from Cart</button>

   </div>
    );
})}
</div>
)
}
<h4>Total  ₹ </h4>
<Link to="/checkout">
<button>Proceed To Checkout</button>
</Link>
</>
);
}
export default Cart;