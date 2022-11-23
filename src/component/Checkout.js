import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduseraddress, changeCartQuantity, getAvailableCoupons, getcart, getCountryList,getuserAddress } from "../Store/Action";
import { useForm } from "react-hook-form";
import CheckoutProducts from "./CheckoutProducts";



const Checkout=()=>{
    const dispatch=useDispatch();
    const [seeAddress,setSeeAddress]=useState(false);
    const [userAddress,setUserAddress]=useState()
    const[inputFilled,setInputFilled] = useState(false)
    const[data,setData] = useState({phone:"",landmark:"",postcode:"",street:"",state:"",city:""})
    


useEffect(()=>{
        getuserAddress(dispatch);
        getAvailableCoupons(dispatch,"addToCart")
        getCountryList(dispatch)
    },[])

    const getuseraddress = useSelector((state) => state.getuseraddress?.userAddress);
    const countrylistdata = useSelector((state) => state.countrylist?.countryData);
    const cartitems = useSelector((state) => state.getcartreducer?.productData);
   

const addressClick=()=>{
  setSeeAddress(true);
}

useEffect(()=>{
  setUserAddress(getuseraddress);
})

var userId=userAddress?.[0]?.user_id;
useEffect(() => {
  if(localStorage.getItem('token')){
      getcart(dispatch,userId);
  }
}, [dispatch]);

const { register, handleSubmit, formState: { errors }, reset } = useForm();


 const handleRegistration = (data) =>{ 
  console.log(data);
  const reqpayload = {
    "first_name": data.name,
    "email": data.email,
    "phone": data.mobile_number,
    "postcode": data.post_code,
    "street": data.street,
    "flat_no":data.flat_number,
    "landmark": data.landmark,
    "country": data.country,
    "state": data.state,
    "city": data.city,
    "addressType":"office",
    "last_name":"jdhdjjd",
    "makeDefault":true
}
  adduseraddress(dispatch,reqpayload)
}

const editFormData=(value)=>{
  setData((prevState) => ({
    ...prevState,
    phone:value.phone,
    landmark:value.landmark,
    postcode: value.postcode,
    street:value.street,
    city:value?.city,
    state:value.name,

  }));
  setInputFilled(true)
  setSeeAddress(true)
}
console.log(cartitems);


let sum = cartitems ? cartitems.reduce((accumulator, curValue) =>
 accumulator + parseFloat(curValue.productData[0]?.Price?.sell_price?.$numberDecimal) * curValue.Quantity, 0) : null
console.log(sum);

let cost = 0
    cartitems?.forEach(ele => {
        if (ele?.productData[0]?.shippingCost == "Free") {
            ele.shippingCost = 0
        }
        return cost = cost + ele?.productData[0]?.shippingCost
    })
    console.log(cost);
    
    let finalamount = cost + sum




const getUserAddress1=[{phone:1,street:"jhjhj",landmark:"fg",postcode:1102},{phone:202,street:"jhjhj",landmark:"fg",postcode:1102}]

    return(
        <>
        <div className="checkout-left __web-inspector-hide-shortcut__">
  <div className="head-wrap checkout-wrap"><span className="checkout-headings"> Shipping</span></div>
  <div className="shipping-itemwrap shipping-remade">
   {userAddress?.map((value,index)=>{
   return(
    <>
    <div key={index}>
    <div className="shipping-inner shipping-remade">
      <div className="head-wrap ship-edit" onClick={()=>{editFormData(value)}}><span className="edit-link edit-btn"><i className="fas fa-user-edit"></i><b
            className="edit-address-pen">edit</b></span></div>
      <div className="desc-txt">
        <div><span className="ship-add-name"></span><span>{value.phone}</span></div>
        <div className="address-checkout shipping-address shipping-checkout shipping-check-wrapper"><i
            className="fas fa-map-marker-alt"></i>
          <div className="ship-wrapper-main"><span className="ship-add"></span><span className="ship-add">{value.street},
            </span><span className="ship-add">{value.landmark}, </span><span>{value.postcode}, </span><span className="ship-add">{value?.city},
            </span>
            <span className="ship-add">{value.state[0].name}</span>
            </div>
        </div>
      </div>  
    </div>
 </div>
    </>
   );  
   })}
<button onClick={addressClick}>Add New Address</button>

{seeAddress&&(<div className="desc-txt edit-address address-edit-wrp">
  

  <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input type="text" name="name"    {...register("name", {
          required: "This field is required",
          value: inputFilled==true?"shubham":"",
          pattern: {
            message: "Entered value does not match email format"
          }
        })} />
          {errors.name && <span role="alert">{errors.name.message}</span>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email"    {...register("email", {
          required: "required",
          value: inputFilled==true?"shubham@gmail.com":"",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format"
          }
        })} />
          {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>
    
      <div>
        <label>Mobile Number</label>
        <input type="text" name="mobile number"    {...register("mobile_number", {
          required: "This field is required",
          value:inputFilled==true?data.phone:"",
          minLength: {
            value: 10,
            message: "mobile number should be of 10 digit"
          },
          maxLength:{
           value:10,
           message:"mobile number should not be more than 10 digit"
          }
        })} />
          {errors.mobile_number && <span role="alert">{errors.mobile_number.message}</span>}
      </div>

      <div>
        <label>Flat Number</label>
        <input type="text" name="flat number"    {...register("flat_number", {
          required: "This field is required",
          value: inputFilled==true?"123456789":"",
          pattern: {
        
            message: "Entered value does not match password format"
          }
        })} />
          {errors.flat_number && <span role="alert">{errors.flat_number.message}</span>}
      </div>

      <div>
        <label>Street</label>
        <input type="text" name="street"    {...register("street", {
          required: "This field is required",
          value: inputFilled==true&&seeAddress==true?data.street:"",
          pattern: {
        
            message: "Entered value does not match password format"
          }
        })} />
          {errors.street && <span role="alert">{errors.street.message}</span>}
      </div>

      <div>
        <label>landmark</label>
        <input type="text" name="landmark"    {...register("landmark", {
          required: "This field is required",
          value: inputFilled==true?data.landmark:"",
          pattern: {
        
            message: "Entered value does not match password format"
          }
        })} />
          {errors.landmark && <span role="alert">{errors.landmark.message}</span>}
      </div>

      <div>
        <label>Post Code</label>
        <input type="number" name="post code"    {...register("post_code", {
          required: "This field is required",
          value: inputFilled==true?data.postcode:"",
          minLength: {
            value: 6,
            message: "min length is 6"
          },
          maxLength:{
            value:6,
            message:"max length is 6"
          }
        })} />
          {errors.post_code&& <span role="alert">{errors.post_code.message}</span>}
      </div>

      <div className="edit-wrapper">
<label className="edit-label">Country<span className="highlighted">*</span></label>
<div className="select-state"><select {...register("country", {
          required: "This field is required",
          

          pattern: {
        
            message: "Entered value does not match password format"
          }
        })}>
           
<option value="">Please select country</option>
{countrylistdata?.data?.map((value,index)=>{
return(
  <option key={index} value={value?._id}>{value?.name}</option>
)
})}


</select>
{errors.country&& <span role="alert">{errors.country.message}</span>}
</div>
</div>

<label className="edit-label">Town/City<span className="highlighted">*</span></label>
<input type="text" name="city"    {...register("city", {
          required: "This field is required",
          value: inputFilled==true?data.city:"",
          pattern: {
        
            message: "Entered value does not match password format"
          }
        })} />
          {errors.city&& <span role="alert">{errors.city.message}</span>}

<div className="edit-wrap">
<label className="edit-label">State<span className="highlighted">*</span></label>
<div className="select-state"><select {...register("state", {
          required: "This field is required",
          value: inputFilled==true?data.state:"",
          pattern: {
            message: "Entered value does not match password format"
          }
        })}>
<option value="">Please select state</option>
{countrylistdata?.data[0]?.stateData.map((value,index)=>{
return(
  <>

<option value={value._id}>{value.name}</option>
</>
)
})}
</select>
{errors.state&& <span role="alert">{errors.state.message}</span>}
</div>
</div>

<div className="default-add default-add-block"><input type="checkbox" name="makeDefault"/>
<label > Make this my default address</label></div>
<div className="edit-wrapper">
<label className="edit-label">Address Type<span className="highlighted">*</span></label>
    <div className="select-state">
      <select name="addressType">
        <option value="">Select an address type</option>
        <option value="Home">Home (7 am - 9 pm delivery)</option>
        <option value="Office">Office (10 am - 6 pm delivery)</option>
      </select>
      </div>
  </div>
  <button className="complete-purchase purchase-address" onClick={()=>{setSeeAddress(false)
  setInputFilled(false) }}>Cancel </button>
      <button>Submit</button>
    </form>
</div>
)}
<div className="shipping-itemwrap shipping-remade">
  <div className="head-wrap">
    <span className="checkout-headings"> Coupon</span>
    </div>
  <div className="desc-txt coupon-block">
    <input type="text" name="landmark" placeholder="Enter coupon code" value=""/>
    <button
      className="complete-purchase complete-purchase-wrapper">Apply coupon</button>
      </div>
      <span className="view-promo-code">View
    available coupons</span>
  <div className="applied-msg"></div>
</div>
   </div>
   </div>
   {cartitems?.map((value,index)=>{
    return(
<CheckoutProducts key={index} data={value}/>
    );
   })}
<div className="checkout-total">
  <div><span>Total Amount</span><span>₹{sum}</span></div>
  <div><span>Shipping</span><span>{cost}</span></div>
  <div><span>Final Amount</span><span>₹{finalamount}</span></div>
</div>


        </>
    );
}
export default Checkout;