import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAddress, getuserAddress } from "../Store/Action";

const ManageAddress=()=>{
    const getuseraddress = useSelector((state) => state.getuseraddress?.userAddress);
 console.log(getuseraddress);
const dispatch=useDispatch();
useEffect(()=>{
    getuserAddress(dispatch)
},[])

const removeAddress=(id)=>{
    deleteAddress(dispatch,id)
console.log(id);
}

    return(
        <>
        {getuseraddress?.map((value,index)=>{
            return(
<div key={index}>
<div className="address-box get_default"><span className="triangle-topright"></span>
  <div className="default-address">
    <h3>Address</h3><span className="name">{value.first_name}</span><span className="tick-mark"><i className="fa fa-check"
        aria-hidden="true"></i></span>
    <address>{value.flat_no},{value.street},{value.landmark}<span> {value.city} :{value.postcode}</span></address>
    <div className="number">Mobile - <a href="tel:1234567890">{value.phone}</a></div>
  </div>
  <div className="address-buttons">
 <button>Edit</button>
<button onClick={()=>removeAddress(value._id)}>Remove</button>
</div>
</div>
</div>
            );
        })}
    <Link to="/Notification">Notification</Link>
    
    
        </>
    );
}
export default ManageAddress;