import { useEffect, useState } from "react"
import Slider from "react-slick"
import { api } from "../Api/api"
import { HOMEPAGEDATA } from "../Api/endPoints"
import ProductCard from "./ProductData"


const UpgradeYourWork = ({ data }) => {
    const [UpgradeWorkspacedata, SetUpgradeWorkspacedata] = useState()
    useEffect(() => {
        const requestpayload = {
            block_name: data.block_name,
            id: data.id

        }
        api.post(HOMEPAGEDATA, requestpayload).then((res) => { SetUpgradeWorkspacedata(res.data.data) })
            .catch((err) => console.log(err))
    }, [data])
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    return (<>
        <div className="arrival-costumes">
            <div className="arrival-caption">
                <h2>Upgrade your workspace</h2>
                <a className="shop-now" href="/product-listing-page/block?block_name=category-product&amp;id=60891257f69aad04d897d3bf">View All</a>
            </div>
            <div className="popular-costumes">
                <Slider{...settings}>
                    {
                        UpgradeWorkspacedata ? UpgradeWorkspacedata.map((item, id) => {
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

export default UpgradeYourWork;