import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSellerData } from "../Store/Action";

const SellerData=(props)=>{


const dispatch = useDispatch();
const sellerdata = useSelector((state) => state.sellerdata?.productData);
const sellerdataLoading = useSelector((state) => state.sellerdata?.loading);


useEffect(() => {
  getSellerData (dispatch,props.id);
}, []);

if (sellerdataLoading) {
  return <div>Home page loading....</div>;
}
// console.log(sellerdata);
    return(
<>
<div className="update_wrapper_box">
  <div className="updt-info-wrp">
    <div className="updated-bar"><span className="updated-time">updated 2 months ago</span><span className="reports"><span
          className="report-btns"><i className="fas fa-exclamation-triangle"></i>
          <div className="report">Report</div>
        </span>&nbsp; &nbsp; &nbsp;<button><i className="fa-thumbs-up  fal "></i></button></span></div>
    
    {sellerdata?.map((value,index)=>{
      return(
        <>
        <div key={index}>
        <div className="seller-info">
      <div className="seller-wrap">
        <div className="about-seller ">
          <h4> About the seller </h4>
          <div className="about-seller-text" style={{display: "flex"}}>
            <div className="seller-prof-img seller-proof-img">
            <img style={{width:"80px"}} src={value?.sellerData[0].sellerImage} alt="seller img" />
            </div>
            <div className="tittle-wrap">
            <Link to={`/seller/${value?.sellerData[0]?._id}`}>
              <h4 className="info-title">{value?.sellerData[0]?.sellerName}</h4>
              </Link>

              <div className="follow-txt-info">
                <div className="follow-txt"><span className="total">{value?.sellerData[0]?.followers}</span><span className="txt"
                    style={{cursor: "pointer"}}>Followers</span></div>
                <div className="follow-txt"><span className="total">{value?.sellerData[0]?.following}</span><span className="txt"
                    style={{cursor: "pointer"}}>Following</span></div>
              </div>
              <div className="confirmed"><span>Confirmed</span></div>
              <div className="sell-items"><span><strong> 12</strong> Items listed</span><span><strong>{value?.sales[0]?.count}</strong>
                  Sales</span></div>
            </div>
          </div>
          <div className="rating-review-wrap ratings-wrapper">
            <div className="react-stars-wrapper-07993095663429375" style={{display: "flex"}}>
              <div aria-label="add rating by typing an integer from 0 to 5 or pressing arrow keys"
                className="undefined react-stars" style={{overflow: "hidden", position: "relative"}}>
               <span className="" data-index="0" data-forhalf="0"
                  style={{position: "relative", overflow: "hidden", cursor: "default" , display: "block", float: "left", color: "red"}}><i
                    className="fa fa-star" style={{color: "rgb(248, 98, 2)"}}></i></span><span className="" data-index="1"
                  data-forhalf="1"
                  style={{position: "relative", overflow: "hidden", cursor: "default", display: "block", float: "left", color: "red" }}><i
                    className="fa fa-star" style={{color: "rgb(248, 98, 2)"}}></i></span><span className="" data-index="2"
                  data-forhalf="2"
                  style={{position: "relative", overflow: "hidden", cursor: "default", display: "block", float: "left", color: "red", fontsize: "30px"}}><i
                    className="fa fa-star" style={{color: "rgb(248, 98, 2)"}}></i></span><span className="" data-index="3"
                  data-forhalf="3"
                  style={{position: "relative", overflow: "hidden", cursor: "default", display: "block", float: "left", color: "red", fontsize: "30px"}}><i
                    className="fa fa-star" style={{color: "rgb(248, 98, 2)"}}></i></span><span className="" data-index="4"
                  data-forhalf="4"
                  style={{position: "relative", overflow: "hidden", cursor: "default", display: "block", float: "left", color: "black", fontsize: "30px"}}><i
                    className="fas fa-star" style={{color: "rgb(248, 98, 2)"}}></i></span>
                <p role="status" style={{position: "absolute", left: "-200rem"}}>4.4</p>
              </div>
            </div><span><b>{value?.reviews[0].count}</b> Reviews</span>
          </div>
          <div className="seller-badges">Seller Badges<a className="query-link" href=""><img src="/assets/images/query-mark.png"
                alt="icon"/>
              <div className="query-msg">Go to Help Center</div>
            </a></div>
          <div className="badges-container">
            <div className="badge-container"><img src="/assets/images/badge_member_since_2019-01.svg" alt="icon"/>
              <div className="since-value">2022</div>
              <p>Member Since</p>
            </div>
            <div className="badge-container"><img src="/assets/images/badge_fast_response.svg" alt="icon"/>
              <p>Fast Responder</p>
            </div>
            <div className="badge-container"><img src="/assets/images/badge_speedy_shipping.svg" alt="icon"/>
              <p>Quick Shipper</p>
            </div>
            <div className="badge-container"><img src="/assets/images/badge_reliable.svg" alt="icon"/>
              <p>Reliable</p>
            </div>
          </div>
        </div>
        <div className="msg-seller-wrap" style={{display: "flex", flexdirection: "column"}}></div>
      </div>
    </div>

        </div>
        </>
      )
    })}
    
 
  </div>
</div>

</>
    );
}
export default SellerData;