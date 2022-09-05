
import { getAttributeByCatId, getBanner, getBrands, getCategory, getProductList } from "../../Api/api"
import { GET_ATTRIBUTE_BY_CATID, GET_BANNER, GET_BRANDS, GET_CATEGORY, GET_PRODUCT_LIST} from "./ActionType"

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