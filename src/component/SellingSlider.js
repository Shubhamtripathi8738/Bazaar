import { useEffect, useState } from "react"
import Slider from "react-slick"
import { api } from "../Api/api"
import { HOMEPAGEDATA } from "../Api/endPoints"
import ProductCard from "./ProductData"

const SellingSlider = ({ data }) => {
    const [Sellingdata, SetSellingdata] = useState()

    useEffect(() => {
        const requestpayload = {

            block_name: data.block_name,
            id: data.id
        }
        
        api.post(HOMEPAGEDATA, requestpayload).then(res => {
            SetSellingdata(res.data.data)

        })
    }, [data])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    // console.log(Sellingdata)

    return (<>
        <div className="popular-arrival" id="609cd1a28f640238755ca497">
            <div className="container">
                <div className="arrival-costumes">
                    <div className="arrival-caption">
                        <h2>See what's selling</h2>
                        <a className="shop-now" href="/product-listing-page/block?block_name=category-product&amp;id=609cd1a28f640238755ca497">
                            View All
                        </a>
                    </div>
                    <div className="popular-costumes">
                        <Slider {...settings}>
                            {
                                Sellingdata ? Sellingdata.map((item, id) => {
                                    // console.log("sectionData===>", sectionData)
                                    return (
                                        <ProductCard data={item} key={id} />
                                    )
                                }) : null
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default SellingSlider