import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBrandsAction } from "../Store/Action";

const NewBrands = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brands?.productData);
  const brandsLoading = useSelector((state) => state.brands?.loading);
  useEffect(() => {
    getBrandsAction(dispatch);
  }, [dispatch]);
  if (brandsLoading) {
    return <div>Brand loading....</div>;
  }

  return (
    <>
      <div className="container">
        <div className="trends-caption shop-brand-wrapper">
          <h2>Shop brands you know and love</h2>
          <h3>Create stuff new and used items added every day</h3>
        </div>
        <div className="trends-wrap">
          <div className="trends-list">
            <div className="slick-slider slick-initialized">
              <div className="slick-list">
                 <div>
                  {brands?.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="trend-gallery">
                          <a
                            className="trend-img trends-gallery-img"
                            href="/product-listing-page/Mi?tagId=62b418ff4c215122d0a8c162"
                          >
                            <img src={item.brandlogo} alt="trend-img" />
                          </a>
                          {/* <strong></strong> */}
                        </div>
                        <Link to={`/${item.slug}`}>{item.name}</Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewBrands;
