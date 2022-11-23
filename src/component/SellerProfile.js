import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSellerData, getSellerProducts } from "../Store/Action";

const SellerProfile=()=>{
    const {id} = useParams();

const dispatch=useDispatch();
const sellerproductsdata = useSelector((state) => state.sellerproducts?.productData);

    useEffect(() => {
        getSellerProducts(dispatch,id);
      }, []);

// console.log(sellerproductsdata.data);
console.log(id);
const sellerdata = useSelector((state) => state.sellerdata?.productData);


useEffect(() => {
  getSellerData (dispatch,id);
}, []);
console.log(sellerdata);
    return(
        <>
        {sellerdata?.map((value,index)=>{
        return(
          <div className="seller-wrap">
          <div className="about-seller">
            <div className="view-seller">
              <div className="seller-prof-img"><img style={{width:"80px"}} src={value.sellerData[0].sellerImage} alt="seller1346"/>
              </div>
            </div>
          </div>
          <div className="tittle-wrap">
            <div className="naming-wrap">
              <h4 className="info-title">{value.sellerData[0].sellerName}</h4>
              <div className="follow-txt-info">
                <div className="follow-txt"><span className="total">{value.sellerData[0].followers}</span><span className="txt" style={{cursor:'pointer'}}>Followers</span>
                </div>
                <div className="follow-txt"><span className="total">{value.sellerData[0].following}</span><span className="txt" style={{cursor:'pointer'}}>Following</span>
                </div>
              </div>
              <div className="sell-items"><span><strong>1</strong> Item listed |</span><span><strong>{value.sales[0].count}</strong> Sales </span></div>
            </div>
            <div className="profile-badges">
              <div className="seller-badges">Seller Badges<a className="query-link" href=""><img src="/assets/images/query-mark.png"
                    alt="icon"/>
                  <div className="query-msg">Go to Help Center</div>
                </a></div>
              <div className="badges-container">
                <div className="badge-container"><img src="/assets/images/badge_member_since_2019-01.svg" alt="memberFrom"/>
                  <div className="since-value">2022</div>
                  <p>Member Since</p>
                </div>
              </div>
            </div>
            <div className="share-wrapper"><button className="share-profile"><i className="far fa-share-alt"></i>Share</button></div>
            <div className="follow-unfollow view-follow"><button className="complete-purchase ">Follow</button></div>
          </div>
        </div>
        );
        })}
 


{sellerproductsdata?.data?.map((value,index)=>{
  return(
    <>
    <div key={index}>
    <div className="popular-costumes seller-profile">
  <div className="costume-box">
    <div className="costume-block">
      <div className="costume-action">
        <span className="wish">
          <i className="icon-wishlist ">

          </i>
        </span>
      </div>
      <a className="product-pack"
        href="/product/Electronics/62e0d6b3ffb3e945afd6b392/?cat=">
  <div className="costumes"><img src={value.Image[0].original} alt="costume-img"/>
                    </div>
      </a>
    </div>
    <a href="/product/Electronics/62e0d6b3ffb3e945afd6b392/?cat=undefined">
      <div className="costume-info my-list my-list-wrap">
        <div className="product-name">
          
          <strong className="prod-name">{value.Title}</strong>
          <div className="free-ship-wrap"></div>
        </div>
        <div className="brand">{value.brandData.name}</div>
        <p>
        <div className="costs-wrap">
          <span className="buy-info">₹{value.Price.sell_price.$numberDecimal}</span>
          <span className="old-price">(₹{value.Price.current_store_price.$numberDecimal})</span>
        </div><span
          className="discount">17% OFF</span></p>
      </div>
    </a>
  </div>
</div>

    </div>
    </>
  )
})}


        
        </>
    );
}
export default SellerProfile;