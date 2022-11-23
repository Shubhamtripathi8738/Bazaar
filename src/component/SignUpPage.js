import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { getSignUp } from "../Store/Action";


const SignupSchema = yup.object().shape({
    firstName: yup.string().required(),
    // date: yup.string(),
    Email: yup.string().email(),
    lastName:yup.string().required(),
    mobile:yup.string().required(),
    password:yup.string().required()
  });

const SignUpPage = () =>{

const dispatch=useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(SignupSchema),
      });
      const onSubmit = (data) => {
        
        
        const data1 = {
          "browser": "Chrome",
          "email": data.email,
          "first_name": data.firstName,
          "ip": "45.65.41.66",
          "last_name": data.lastName,
          "login": false,
          "mobile": data.mobile,
          "password": data.password,
          "gender": data.gender,       
          "dob": "1998-12-15"    
      }
     

      getSignUp(dispatch,data1);
      };

   
    
    return(
        <>
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
                                              <label>Email</label>
                                              <input
                                              
                                              {...register("email")} />
                                              {errors.email && (
                                                <p>{errors.email.message}</p>
                                              )}
                                            </div>
                                            <div>
                                              <label>Mobile</label>
                                              <input
                                              
                                              {...register("mobile")} />
                                              {errors.mobile && (
                                                <p>{errors.mobile.message}</p>
                                              )}
                                            </div>
                                            {/* <div>
                                              <label>Age</label>
                                              <input
                                            
                                                {...register("date", {
                                                  valueAsNumber: true,
                                                })}
                                              />
                                              {errors.date && (
                                                <p>{errors.date.message}</p>
                                              )}
                                            </div> */}
                                            <div>
                                              <label>Password</label>
                                              <input
                                              type={'password'}
                                              {...register("password")} />
                                              {errors.gender && (
                                                <p>{errors.password.message}</p>
                                              )}
                                            </div>
                                           
                                            <div>
                                              <label>Gender</label>
                                              <input
                                              
                                              {...register("gender")} />
                                              {errors.gender && (
                                                <p>{errors.gender.message}</p>
                                              )}
                                            </div>
                                            <input type="submit" />
                                          </form>
        </>
    );
}
export default SignUpPage;