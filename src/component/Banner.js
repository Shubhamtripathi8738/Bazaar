import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannerAction } from "../Store/Action";
import Slider from "react-slick";
const Banner=()=>{

    const dispatch = useDispatch();
    const banner = useSelector((state) => state.banner?.productData);
    const bannerLoading = useSelector((state) => state.banner?.loading);
        useEffect(() => {
            getBannerAction(dispatch);
          }, [dispatch]);
        if(bannerLoading){
            return <div>Banner loading....</div>
        }

        var settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1
          };

    return(
        <>
       <div>
       <div className="home-banner">
       <button className="btn-bannerprev btn-banner">
        <i className="icon-bannerprev"></i> 
        </button>
        <button
        className="btn-bannernext btn-banner">
        <i className="icon-bannernext"></i>
         </button>
         <a className="click-banner-img"
      target="_blank">
       <Slider {...settings}>
     
       {banner[0]?.images?.map((item,index)=>{
  return(
      <div key={index}>
      <img src={item.name}/> 
      </div>
  )
 })} 
      </Slider>
        </a>
        </div>
       </div>

        </>
    )
}
export default Banner;