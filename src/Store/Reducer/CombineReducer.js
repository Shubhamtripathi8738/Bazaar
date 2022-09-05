import { combineReducers } from "redux";
import { attributeByCatId } from "./AttributeByCatIdReducer";
import { banner } from "./BannerReducer";
import { brands } from "./BrandsReducer";
import { productlist } from "./ProductListReducer";
import { category } from "./Reducer";


const reducer = combineReducers({
    category :category,
    brands :brands,
    banner :banner,
    attributeByCatId :attributeByCatId,
    productlist:productlist
});

export default reducer;