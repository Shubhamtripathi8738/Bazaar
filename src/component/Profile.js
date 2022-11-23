import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMyProfile } from "../Store/Action";

const Profile=()=>{


const dispatch=useDispatch();
const profileData = useSelector((state) => state.myProfile?.productData);

useEffect(()=>{
    getMyProfile(dispatch)
},[])

    return(



<>
<div>
    <Link to='/profile/manage_address'>Manage Address</Link>
</div>
<div className="group-wrap main-group-wrapper profile-number-grp">
  <div className="form-input"><span>First Name</span><input type="text" disabled="" name="firstname" value={profileData?.userdata?.first_name} /></div>
  <div className="form-input"><span>Last Name</span><input type="text" disabled="" name="firstname" value=""/></div>
  <div className="form-input"><span>Email Address</span><input type="email" disabled="" name="email"
      value={profileData?.userdata?.email}/></div>
  <div className="form-input"><span>Mobile Number</span>
    <div className="mob-number-wrap number-profile-mobile"><input type="text" disabled="" className="number-code"
        value="+91"/><input type="text" disabled="" name="phone" value={profileData?.userdata?.mobile}/></div>
  </div>
</div>
</>



    );
}
export default Profile;