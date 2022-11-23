import axios from 'axios';
import { GETATTRIBUTEBYCATID, GETBANNER, GETBRAND, 
  GETCATEGORY,
   GETPRODUCTLIST,
   HOMEPAGE,
 

} from './endPoints';

let token = localStorage.getItem('token')

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + process.env.REACT_APP_BASE_URL_PREFIX + process.env.REACT_APP_BASE_URL_VERSION,
    headers: {
      Authorization:  'Bearer' + " " + token

  }
  })




// api.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     // Object.assign(config, { test: "123" })
//     document.getElementById('overlay').style.display = 'block'
//     config = { ...config, test: 12345 }
//     config = { ...config, Auth: "Sandeep" };
//     config.xyz = { ...config.xyz, Auth: "Gautam" };
//     // console.log("Request===>", config)
//     return config;

// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// // Add a response interceptor
// api.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     document.getElementById('overlay').style.display = 'none'
//     response = { ...response, test2: "5478" };
//     // console.log("Respone=====>", response)
//     return response;
// }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     alert("Network error")
//     return Promise.reject(error);
// });

export const getCategory=()=>{
    return api.get(GETCATEGORY)
}

export const getBrands=()=>{
    return api.get(GETBRAND)
}

export const getBanner=()=>{
    return api.post(GETBANNER,{type:"slider"})
}

export const getAttributeByCatId=(filterData)=>{
    return api.post(GETATTRIBUTEBYCATID,{categoryId: "60826c273c535579f4bbe1b6",FilterData : filterData})
}

export const getProductList=(data)=>{
    return api.post(GETPRODUCTLIST,data)
}

export const getHomePageNew=(item)=>{
  return api.get(HOMEPAGE,{item})
}

api.interceptors.request.use(
    function (config) {
       config.headers = { ...config.headers, Auth: "Shubham" };
      return config;
    },
    function (error) {
      alert("Network Error");
      return Promise.reject(error);
    }
   );
   
   api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      alert("Network Error");
      return Promise.reject(error);
    }
   );
   