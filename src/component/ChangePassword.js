import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { changePassword, getMyProfile } from "../Store/Action";

const ChangePassword=()=>{


    const dispatch=useDispatch();
    const navigate=useNavigate();
const profileData = useSelector((state) => state.myProfile?.productData);

useEffect(()=>{
    getMyProfile(dispatch)
},[])

// console.log(profileData);

const SignupSchema = yup.object().shape({
    CurrentPassword: yup.string().required(),
    NewPassword:yup.string().required(),
  
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit=(data)=>{
 console.log(data)

 const dataNew={
    confirmPassword:data.ConfirmPassword,
    currentPassword:data.CurrentPassword,
    full_name:profileData.full_name,
    mobile:profileData.mobile,
    newPassword:data.NewPassword,
    userId:data._id
 }
 changePassword(navigate,dispatch,dataNew)
  }

    return(
<>
<h5>My Profile</h5>
<form
                                            onSubmit={handleSubmit(onSubmit)}
                                          >
                                            <div>
                                              <label>Current Password</label>
                                              <input
                                            
                                              
                                                {...register("CurrentPassword")}
                                              />
                                              {errors.CurrentPassword && (
                                                <p>
                                                  {errors.CurrentPassword.message}
                                                </p>
                                              )}
                                            </div>
                                            <div>
                                                <label>New Password</label>
                                                <input
                                                {...register("NewPassword")}
                                                />
                                               {errors.NewPassword &&(
                                                <p>
                                                    {errors.NewPassword.message}
                                                </p>
                                               )}
                                            </div>
                                            <div>
                                                <label>Confirm Password</label>
                                                <input
                                                {...register("ConfirmPassword")}
                                                />
                                                {errors.ConfirmPassword && (
                                                    <p>
                                                        {errors.ConfirmPassword.message}
                                                    </p>
                                                )}
                                            </div>
                                           <button type="Submit">Submit</button>
                                            </form>
                
</>
    );
}
export default ChangePassword;