import { combineReducers } from "redux";
import { addtocart } from "./AddToCartReducer";
import { addtowishlistreducer } from "./AddToWishlistReducer";
import { addUserAddress } from "./AddUserAddress";
import { attributeByCatId } from "./AttributeByCatIdReducer";
import { availableCoupons } from "./AvailableCouponsReducer";
import { banner } from "./BannerReducer";
import { brands } from "./BrandsReducer";
import { cartQuantityReducer } from "./ChangeCartQuantityReducer";
import { countrylist } from "./CountryListReducer";
import { deleteUserAddress } from "./DeleteAddressReducer";
import { deletecart } from "./DeleteCartReducer";
import { getcartreducer } from "./GetCartReducer";
import { getuseraddress } from "./GetUserAddress";
import { getwishlistreducer } from "./GetWishListReducer";
import { homePageReducer } from "./HomePageReducer";
import { localdata } from "./LocalDataReducer";
import { myProfile } from "./MyProfileReducer";
import { notificationData } from "./NotificationReducer";
import { productlist } from "./ProductListReducer";
import { productpage } from "./ProductPageReducer";
import { category } from "./Reducer";
import { sellerdata } from "./SellerDataReducer";
import { sellerproducts } from "./SellerProductReducer";
import { signindata } from "./SignInReducer";
import { similardata } from "./SimilarDataReducer";


const reducer = combineReducers({
    category :category,
    brands :brands,
    banner :banner,
    attributeByCatId :attributeByCatId,
    productlist:productlist,
    productpage:productpage,
    sellerdata:sellerdata,
    similardata:similardata,
    signindata:signindata,
    myProfile:myProfile,
    addtocart:addtocart,
    getcartreducer:getcartreducer,
    deletecart:deletecart,
    localdata:localdata,
    addtowishlistreducer:addtowishlistreducer,
    getwishlistreducer:getwishlistreducer,
    getuseraddress:getuseraddress,
    sellerproducts:sellerproducts,
    availableCoupons:availableCoupons,
    countrylist:countrylist,
    addUserAddress:addUserAddress,
    notificationData:notificationData,
    cartQuantityReducer:cartQuantityReducer,
    deleteUserAddress:deleteUserAddress,
    homePageReducer:homePageReducer
});

export default reducer;