import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  getAttributeByCatIdAction,
  getProductListAction,
} from "../Store/Action";
import Input from "./Input";

const AttributeCatId = () => {

  const [brands,setBrands]=useState();
  const [condition,setCondition]=useState();
  const[delivery,setDelivery]=useState();
  const[sortedData,setSortedData]=useState(
    {
      brand:[],
      category:[],
      condition:[],
      delivery:[],
    
    }
  );


  const { slug } = useParams();
 
  const dispatch = useDispatch();

  const datalist = useSelector((state) => state.attributeByCatId?.productData);

  const attributeLoading = useSelector((state) => state.attributeByCatId?.loading);

  const productlist = useSelector((state) => state.productlist?.productData);

  const [filterData, setFilterData] = useState();

  const productloading = useSelector((state) => state.productlist?.loading);

  useEffect(() => {
if(sortedData.category.length){
    getProductListAction(dispatch, sortedData);
}
  }, [sortedData]);

   useEffect(()=>{
 setSortedData({...sortedData,category:[slug]});
  },[slug])
  

  useEffect(() => {
    setFilterData(productlist?.FilterData);
  }, [productlist]);

  useEffect(() => {
    if(filterData){
      getAttributeByCatIdAction(dispatch, filterData);
    }
  }, [filterData,productlist]);

  useEffect(()=>{
    setBrands(datalist?.brand);
  },[datalist])
 
  useEffect(()=>{
    setCondition(datalist?.condition);
  },[datalist])

  useEffect(()=>{
    setDelivery(datalist?.delivery);
  },[datalist])



  if (!attributeLoading) {
    return <div>Category loading....</div>;
  }

if(productloading){
  return <div>products Loading....</div>
}

const handleBrand = (e) =>{
var newarr=sortedData.brand;
var arrindex= newarr.indexOf(e)

if(newarr.includes(e)){
  newarr.splice(arrindex,1);
  setSortedData({...sortedData,brand:newarr})
  
}else{
 
  newarr.push(e)
  setSortedData({...sortedData,brand:newarr});
}
 
}
const handleCondition =(e)=>{
  var newarr1=sortedData.condition;
  var arrindex1= newarr1.indexOf(e)

if(newarr1.includes(e)){
  newarr1.splice(arrindex1,1);
  setSortedData({...sortedData,condition:newarr1})
  
}else{
  newarr1.push(e)
  setSortedData({...sortedData,condition:newarr1});
}

}

const handleDelivery =(e)=>{
  var newarr2=sortedData.delivery;
  var arrindex2= newarr2.indexOf(e)

if(newarr2.includes(e)){
  newarr2.splice(arrindex2,1);
  setSortedData({...sortedData,delivery:newarr2})
  
}else{
  newarr2.push(e)
  setSortedData({...sortedData,delivery:newarr2});
}
}

  return (
    <>

<div className="brand-attr-block cat-box">
  <button className="accordian-header fal fa-angle-right active"> brand </button>
    <div className="accordian-panel expanded">
      <ul>
        <div className="brand-list brand-listing">
          <div className="scrollarea " >
            <div className="scrollarea-content ">
     {brands?.map((val,index)=>{
      return (
       <div key={index}>
          <Input handleprops={handleBrand} name={val.name} Id={val._id}/>
        </div>
      )
     })}
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>



<div className="condition-attr-block cat-box"><button className="accordian-header fal fa-angle-right active">condition</button>
  <div className="accordian-panel expanded">
    <ul>
      <div className="brand-list brand-listing">
        <div className="scrollarea " >
          <div className="scrollarea-content " tabIndex="1" >
          {condition?.map((val,index)=>{
    return (
      <div key={index}>
<Input handleprops={handleCondition} name={val.name} Id={val.name}/>
      </div>
    )
   })}      
          </div>
        </div>
      </div>
    </ul>
  </div>
</div> 



<div className="-attr-block cat-box">
  <button className="accordian-header fal fa-angle-right active">delivery</button>
  <div className="accordian-panel expanded">
{delivery?.map((val,index)=>{
  return(
    <div key={index}>
   <Input handleprops={handleDelivery} name={val.name} Id={val.name}/>
  </div>
  )
})}
    </div>
     </div>

      <div className="plp-header product-listhead null">
        <div>
          <div className="breadcrumb-wrap"></div>
        </div>
        <div className="cat-head category-head-wrap category-wrap"></div>
        <div>
          {datalist?.category.length && datalist?.category?.map((val, index) => {
            return (
              <div key={index}>
                <div> {val.CategoryName} </div>
              </div>
            );
          })}
        </div>
        <div>
          {datalist?.attr_name.length>0 && datalist?.attr_name?.map((item,index)=>{
            return(
              <div key={index}>
            

              </div>
            )
          })}
        </div>
        <div>
          {datalist?.brand.length>0 && datalist?.brand?.map((item,index)=>{
            return(
              <div key={index}>
               
             <div>{item.name}</div>

              </div>
            )
          })}
        </div>
        <div>
          {datalist?.condition.length>0 && datalist?.condition?.map((item,index)=>{
            return(
              <div key={index}>
              
             <div>{(item.name)}</div>
             </div>
            )
          })}
        </div>
        <div>
          {datalist?.delivery.length>0 && datalist?.delivery?.map((item,index)=>{
            return(
              <div key={index}>
                
             <div>{(item.name)}</div>

              </div>
            )
          })}
        </div>
        <div className="costume-box">
    {productlist?.data?.length ? productlist?.data.map((item, index1) => {
      return (
        <div key={index1}>
  
  <div className="costume-block">
  <Link to={`/product/${item.categoryData.slug}/${item._id}`}>

    <div className="costume-action"><span className="wish"><i className="icon-wishlist "></i></span></div>
    <Link to={`/product/${item.categoryData.slug}/${item._id}`}>
      <div className="costumes">
        <img src={item.default_image} alt="trend-img" />
          </div>
    </Link>
    </Link>
  </div>
  <Link to={`/product/${item.categoryData.slug}/${item._id}`}>
    <div className="costume-info my-list my-list-wrap">
      <div className="product-name"><strong className="prod-name"></strong>
        <div className="free-ship-wrap"></div>
      </div>
      <div className="brand">{item.brandData.name} </div>
      <p>
      <div className="costs-wrap">
        <span className="buy-info">{item.Price.sell_price.$numberDecimal} </span><span className="old-price"> {item.Price.current_store_price.$numberDecimal}</span></div><span
        className="discount">1% OFF</span></p>
    </div>
  </Link> 
  </div>
  );
}):<div>No</div>}

</div>


        <div className="cat-head-wrap category-filter-head category-wrap-head">
          <div className="plp-filters">
            <div className="sort-drop">
              <select className="my_class new-filter my-new-filter"></select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AttributeCatId;
