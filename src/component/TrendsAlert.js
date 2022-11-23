import { useEffect, useState } from "react"
import Slider from "react-slick"
import { api } from "../Api/api"
import { HOMEPAGEDATA } from "../Api/endPoints"
import ProductCard from "./ProductData"


const TrendsAlert = ({ data }) => {
    const [TrendSliderdata, SetTrendSliderdata] = useState()
    useEffect(() => {
        const requestpayload = {
            block_name: data.block_name,
            id: data.id,
        }
        api.post(HOMEPAGEDATA, requestpayload).then(res => {
            SetTrendSliderdata(res.data.data);
        })
    }, [data])
    const settings = {
        dots: false,
        fade: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    // console.log("l;hklh;fw;l")
    return (<>
        <div className="arrival-costumes">
            <div className="arrival-caption">
                <h2>Trend Alerts</h2>
                <a className="shop-now" href="/product-listing-page/block?block_name=selling-product&amp;id=6093bd0b1b8f957871fdc7d9">View All</a>
            </div>
            <div className="popular-costumes">
                <Slider{...settings}>
                    {TrendSliderdata ? TrendSliderdata.map((item, id) => {
                        return (
                            <ProductCard data={item} key={id} />

                        )
                    }) : null
                    }
                </Slider>


            </div>
        </div>

    </>)
}

export default TrendsAlert;