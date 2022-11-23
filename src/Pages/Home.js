import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import KitchenAndDining from "../component/KitchenAndDining";
import NewBrands from "../component/NewBrands";
import SeasonalDecor from "../component/SeasonalDecor";
import TrendsAlert from "../component/TrendsAlert";
import UpgradeYourWork from "../component/UpgradeYourWork";
import { getHomePageNewAction } from "../Store/Action";
import SellingSlider from "../component/SellingSlider";
import Activewear from "../component/Activewear";




const Home=()=>{
    const dispatch = useDispatch()

    useEffect(() => {
        getHomePageNewAction(dispatch);
    }, [dispatch]);

    const Homepagedata = useSelector(state => state.homePageReducer?.productData)

    const homepagesection = (item, id) => {

        switch (item.name?.toLowerCase()) {
            case "see what's selling":
                return (
                    < SellingSlider data={item} key={id} />
                )
            case "trend alerts":
                return (
                    <TrendsAlert data={item} key={id} />
                )
            case "seasonal decor":
                return (
                    <SeasonalDecor data={item} key={id} />
                )
            case "upgrade your workspace":
                return (
                    <UpgradeYourWork data={item} key={id} />
                )
            case "kitchen & dining":
                return (
                    <KitchenAndDining data={item} key={id} />
                )
            case "activewear":
                    return (
                        <Activewear data={item} key={id} />
                    )
            default: return;
        }
    }
    return(
<>

<Banner/>
<NewBrands/>
{
            Homepagedata ? Homepagedata.map((item, id) => homepagesection(item, id)) : null
        }
</>

    )
}
export default Home;