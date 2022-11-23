import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomePageNewAction } from "../Store/Action";

const HomePageNew=()=>{

    const dispatch = useDispatch();
    const homepagenew= useSelector((state) => state.homepagenew?.productData);
    const homepagenewLoading = useSelector((state) => state.homepagenew?.loading);
    useEffect(() => {
        getHomePageNewAction(dispatch);
    }, [dispatch]);
    if (!homepagenewLoading) {
      return <div>Home page loading....</div>;
    }
  

    return(
<>
<div>


</div>
</>
    )
}
export default HomePageNew;