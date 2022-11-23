import { Link } from "react-router-dom";

const ProductCard=({data})=>{

    return(
<>
<Link to={`/product/${data.categoryData.slug}/${data._id}`}>
<div className="costume-block">
<div className="costumes">
    <img src={data.default_image} alt="img" />
</div>

</div>

<div className="costume-info my-list">
<div className="product-name">
    <strong className="prod-name">{data.Title}</strong>
    <div className="free-ship-wrap">
        <span className="free-ship">{data.delievery_charge === null ? 'free shipping' : ''}</span>
        <i className="fa fa-flag" aria-hidden="true"></i>
    </div>
</div>
<span className="brand"> {data.brandData.name}</span>
<p>
    <span className="costs-wrap">
        <span className="buy-info">{data.Price.sell_price.$numberDecimal}</span>
        <span className="old-price">({data.Price.current_store_price.$numberDecimal})</span>
    </span>
    <br />
    <span className="discount">9% OFF</span>
    <span className="h-24"></span>
</p>
</div>
</Link>
</>
    );
}
export default ProductCard;