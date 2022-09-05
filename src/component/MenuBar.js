import React from "react";
import { useEffect } from "react";
import { getCategoryAction } from "../Store/Action";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const MenuBar=()=>{

const dispatch = useDispatch();
const products = useSelector((state) => state.category?.productData);
const categoryLoading = useSelector((state) => state.category?.loading);
    useEffect(() => {
        getCategoryAction(dispatch);
      }, [dispatch]);

      if(!categoryLoading){
        return <div>Category loading....</div>
    }

    

        

 



return(
<>
<div className="container">
    <div className="main-menu"><span className="menu-strip"><span></span></span>
        <div className="hamburger-menu">
            <div className="overlay"></div>
            <ul className="menu about-menu-wrapper"><i className="fa fa-times" aria-hidden="true"></i>
                <div className="custom-signing-wrap">
                </div>
                <li className="sublist-menu brand-sub-menu "><span>Brands</span>
                    <ul className="sub-menu "></ul>
                    <div className="arrow-outer-wrap">
                        <div className="arrow-wrap"></div>
                            {products?.map((val,index)=>{
                               return( 
                                <div key={index}>
                       <Link to={`/category/${val.slug}`}>{val.name}</Link>
              
                    </div>
                               )
                            })}
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
</div>
</>
)
}
export default MenuBar;
