import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile, getSimilarProducts } from "../Store/Action";

const SimilarProducts=()=>{


const productpagedata = useSelector((state) => state.productpage?.productData);


var categoryId=productpagedata?.[0]?.categoryData[0]?._id;
var price=productpagedata?.[0]?.Price.sell_price?.$numberDecimal;
var id=productpagedata?.[0]?._id;


useEffect(() => {
    if(categoryId,price,id){
        getSimilarProducts(dispatch, {categoryId,price,id});
    } 
}, [productpagedata]);

const dispatch = useDispatch();
const similarProducts = useSelector((state) => state.similardata?.productData);
const similardataLoading = useSelector((state) => state.similardata?.loading);





    return(
        <>
        <div className="arrival-costumes">
  <div className="arrival-caption arrival-costumes-wrapper">
    <h2>Similar Items</h2><a className="shop-now view-all-btn-wrap"
      href="/product-listing-page/block?result=Similar product&amp;productId=62fde1387bff2f10164d90c5&amp;categoryId=60826c013c535579f4bbe1b4&amp;range=35000">View
      all</a>
  </div>
  <div className="popular-costumes">
    <div className="slick-slider similar-items slick-initialized">
      <div className="slick-list">
        <div className="slick-track" style={{width: "584px", opacity: "1"}}>
          <div data-index="0" className="slick-slide slick-active slick-current" tabIndex="-1" aria-hidden="false"
            style={{outline: "none", width: "292px"}}>
{similarProducts?.map((value,Index)=>{
    return(
        <>
         <div key={Index}>
              <div className="costume-box">
                <div className="costume-block"><a className=""
                    href="/product/Electronics/62c67921736a803d161276e5/?cat=electronics"></a>
                  <div className="costume-action"><span className="wish"><i className="icon-wishlist"></i></span></div><a
                    className="product-pack" href="/product/Electronics/62c67921736a803d161276e5/?cat=electronics">
                    <div className="costumes"><img src={value.Image[0].original} alt="costume-img"/>
                    </div>
                  </a>
                </div><a href="/product/Electronics/62c67921736a803d161276e5/?cat=electronics">
                  <div className="costume-info my-list my-list-wrap">
                    <div className="product-name"><strong className="prod-name">{value.Title}</strong>
                      <div className="free-ship-wrap"></div>
                    </div><span className="brand">{value.brandData[0].name}</span>
                    <p>
                    <div className="costs-wrap"><span className="buy-info">₹{value.Price.sell_price.$numberDecimal}</span><span className="old-price">(₹{value.Price.current_store_price.$numberDecimal})</span>
                    </div><span className="discount">6% OFF</span><span className="h-24"></span></p>
                  </div>
                </a>
              </div>
            </div>
        
        </>
    );
})}

           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default SimilarProducts;