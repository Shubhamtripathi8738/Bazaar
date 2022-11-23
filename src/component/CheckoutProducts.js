import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartQuantity } from "../Store/Action";

const CheckoutProducts = (data) => {
  const [num, setNum] = useState(data.data.Quantity);
  const dispatch = useDispatch();

  const cartitems = useSelector((state) => state.getcartreducer?.productData);
  var products = data;

  const incNum = (id) => {
    setNum(num + 1);
    changeCartQuantity(dispatch, { cartId: id, quantity: num + 1 });
  };
  const decNum = (id) => {
    if (num > 0) {
      setNum(num - 1);
    }
    changeCartQuantity(dispatch, { cartId: id, quantity: num - 1 });
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <>
      <div className="cartmenu cart-itemlist cart-list-item">
        <div className="cart-product cart-product-wrapper ">
          <figure>
            <a
              className="product-img"
              href="/product/Electronics/6352770bfc48e879cec2a6de/?cat=electronics"
            >
              <img
                src={products?.data.productData?.[0].default_image}
                alt="product"
              />
            </a>
          </figure>
        </div>
        <div
          className="cart-product-text brand-text-wrp"
          style={{ display: "flex", flex_direction: "column", width: "80%" }}
        >
          <div className="cart-base" style={{ display: "flex" }}>
            <div className="cart-des cart-des-link">
              <a href="/product/Electronics/6352770bfc48e879cec2a6de/?cat=electronics">
                <span className="brandName">
                  {products?.data.BrandData?.[0].name}
                </span>
              </a>
              <a
                className="cart-product-wrap"
                href="/product/Electronics/6352770bfc48e879cec2a6de/?cat=electronics"
              >
                <span className="product-name">
                  {products?.data.productData?.[0].Title}
                </span>
              </a>
              <span className="price">
                <span className="new-price">
                  ₹
                  {
                    products?.data.productData?.[0].Price.sell_price
                      .$numberDecimal
                  }
                </span>
                <span className="old-price">
                  ₹
                  {
                    products?.data.productData?.[0].Price.current_store_price
                      .$numberDecimal
                  }
                </span>
              </span>
            </div>
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => decNum(products.data._id)}
            >
              -
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            value={num}
            onChange={handleChange}
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => incNum(products.data._id)}
            >
              +
            </button>
            <div className="delete-cart-product" style={{ width: "20%" }}>
              <div className="qty-input">
                <button
                  className="qty-decrement qty-decrement-active"
                  type="button"
                >
                  <i className="fal fa-minus"></i>
                </button>
                {/* <input id="quantity" type="number" disabled="" value="1"/> */}
                <button className="qty-increment" type="button">
                  <i className="fal fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutProducts;
