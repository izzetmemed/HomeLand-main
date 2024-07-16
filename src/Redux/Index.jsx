import { configureStore } from '@reduxjs/toolkit';
import deleteBasketReducer from './DeleteBasket';
import sectionReducer from './RentGet'; 
import SellReducer from "./SellGet";
import OfficeReducer from "./OfficeGet";
import ObyektReducer from "./ObyektGet";
import LandReducer from "./LandGet";
import LandRecommendReducer from "./LandRecommendRedux";
import SellRecommendReducer from "./SellRecommendRedux";
import RentRecommendReducer from "./RentRecommendRedux";
import OfficeRecommendReducer from "./OfficeRecommendRedux";
import ObyektRecommendReducer from "./ObyektRecommendRedux";
import RentAdminReducer from "./RentAdmin";
import SellAdminReducer from "./SellAdmin";
import OfficeAdminReducer from "./OfficeAdmin";
import ObyektAdminReducer from "./ObyektAdmin";
import LandAdminReducer from "./LandAdmin";

export const store = configureStore({
  reducer: {
    deleteBasket: deleteBasketReducer,
    GetAll: sectionReducer ,
    Sell:SellReducer,
    Office:OfficeReducer,
    Obyekt:ObyektReducer,
    Land:LandReducer,
    LandRecommend:LandRecommendReducer,
    SellRecommend:SellRecommendReducer,
    RentRecommend:RentRecommendReducer,
    OfficeRecommend:OfficeRecommendReducer,
    ObyektRecommend:ObyektRecommendReducer,
    RentAdmin:RentAdminReducer,
    OfficeAdmin:OfficeAdminReducer,
    SellAdmin:SellAdminReducer,
    ObyektAdmin:ObyektAdminReducer,
    LandAdmin:LandAdminReducer,
  },
});
