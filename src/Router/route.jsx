import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import Cards from "../mainpage/cards";
import Index from "../mainpage/index";
import Rent from "../mainpage/answer/rent";
import InsideCard from "../mainpage/İnsideCard";
import Login from "../mainpage/ADMIN/Login";
import MainAdmin from "../mainpage/ADMIN/mainAdmin";
import Costumer from "../mainpage/ADMIN/RentHomeCustomer";
import InsideCostumer from "../mainpage/ADMIN/Customer/insideCardCostumer";
import Own from "../mainpage/ADMIN/RentHomeOwn";
import InsideCardOwn from "../mainpage/ADMIN/Own/insideCardOwn";
import InsideCardPayment from "../mainpage/ADMIN/payment/insideCardPayment";
import Payment from "../mainpage/ADMIN/RentPayment";
import Basket from "../Sebet/Basket";
import CardsSell from "../SellHome/CardsSell";
import Sell from "../SellHome/Sell";
import Obyekt from "../Obyekt/CardsObyekt";
import ObyektForm from "../Obyekt/ObyektForm";
import InsideCardsSell from "../SellHome/insideCardSell";
import InsideCardsObyekt from "../Obyekt/InCardObyekt";
import Error from "../Error/Error";
import SellOwn from "../SellHome/Admin/Own/SellOwn";
import SellInside from "../SellHome/Admin/Own/SellInside";
import SellCustomer from "../SellHome/Admin/Customer/SellCustomer";
import SellinsideCustomer from "../SellHome/Admin/Customer/SellInsideCustomer";
import SellPayment from "../SellHome/Admin/Payment/SellPayment";
import SellinsidePayment from "../SellHome/Admin/Payment/SellInsidePayment";
import ObyektOwn from "../Obyekt/Admin/Own/ObyektOwn";
import ObyektInsideOwn from "../Obyekt/Admin/Own/ObyektInsideOwn";
import ObyektCustomer from "../Obyekt/Admin/Costumer/ObyektCustomer";
import ObyektCustomerInside from "../Obyekt/Admin/Costumer/ObyectCustomerInside";
import ObyektPayment from "../Obyekt/Admin/Payment/ObyektPayment";
import ObyektinsidePayment from "../Obyekt/Admin/Payment/ObyektInsidePayment";
import ProtectedRoute from "./ProtectedRoute";
import MapSection from "../mainpage/MapSection";
import OnlyMyPage from "../Director/OnlyMyPage";
const route = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index={true} element={<Cards />} />
          <Route path="/Kart/:id" element={<InsideCard />} />
          <Route path="/Sell" element={<CardsSell />} />
          <Route path="/Sell/Kart/:id" element={<InsideCardsSell />} />
          <Route path="/Sell/səbət" element={<Basket />} />
          <Route path="/kiraye-ev-form" element={<Rent />} />

          <Route path="*" element={<Error />} />

          <Route path="/satılıq-ev-form" element={<Sell />} />
          <Route path="/səbət" element={<Basket />} />
          <Route path="/mapSearch" element={<MapSection link={"RentHome/Coordinate"} Rent={true}/>} />
          <Route path="/Sell/mapSearch" element={<MapSection link={"Sell/Coordinate"} Sell={true}/>} />
          <Route path="Obyekt/mapSearch" element={<MapSection link={"Obyekt/Coordinate"} Obyekt={true}/>} />
          <Route path="/Obyekt" element={<Obyekt />} />
          <Route path="/obyekt/Kart/:id" element={<InsideCardsObyekt />} />
          <Route path="/Obyekt/səbət" element={<Basket />} />
          <Route path="/Obyekt-form" element={<ObyektForm />} />
          <Route path="/HomeLogin" element={<Login />} />
          <Route path="/HomeLogin/MainAdmin/Director" element={<ProtectedRoute><OnlyMyPage/></ProtectedRoute>} />
          <Route
            path="/HomeLogin/MainAdmin"
            element={
              <ProtectedRoute>
                <MainAdmin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/HomeLogin/MainAdmin/Renthome/Customer"
            element={<ProtectedRoute><Costumer /></ProtectedRoute>}
          />
          <Route
            path="/HomeLogin/MainAdmin/Renthome/Customer/Kart/:id"
            element={<ProtectedRoute><InsideCostumer /></ProtectedRoute>}
          />

          <Route path="/HomeLogin/MainAdmin/Renthome/Own" element={<ProtectedRoute><Own /></ProtectedRoute>} />
          <Route
            path="/HomeLogin/MainAdmin/Renthome/Own/Kart/:id"
            element={<ProtectedRoute><InsideCardOwn /></ProtectedRoute>}
          />
          <Route
            path="/HomeLogin/MainAdmin/Renthome/Payment"
            element={<ProtectedRoute><Payment /></ProtectedRoute>}
          />
          <Route
            path="/HomeLogin/MainAdmin/Renthome/Payment/Kart/:id"
            element={<ProtectedRoute><InsideCardPayment /></ProtectedRoute>}
          />

          <Route path="/HomeLogin/MainAdmin/Sell/Own" element={<ProtectedRoute><SellOwn /> </ProtectedRoute>} />
          <Route
            path="/HomeLogin/MainAdmin/Sell/Own/Kart/:id"
            element={<ProtectedRoute><SellInside /></ProtectedRoute>}
          />

          <Route
            path="/HomeLogin/MainAdmin/Sell/Customer"
            element={<ProtectedRoute><SellCustomer /></ProtectedRoute>}
          />
          <Route
            path="/HomeLogin/MainAdmin/Sell/Customer/Kart/:id"
            element={<ProtectedRoute><SellinsideCustomer /></ProtectedRoute>}
          />

          <Route
            path="/HomeLogin/MainAdmin/Sell/Payment"
            element={<ProtectedRoute><SellPayment /></ProtectedRoute>}
          />
          <Route
            path="/HomeLogin/MainAdmin/Sell/Payment/Kart/:id"
            element={<ProtectedRoute><SellinsidePayment /></ProtectedRoute>}
          />

          <Route
            path="/HomeLogin/MainAdmin/Obyekt/Own"
            element={<ProtectedRoute><ObyektOwn /></ProtectedRoute>}
          />
          <Route
            path="/HomeLogin/MainAdmin/Obyekt/Own/Kart/:id"
            element={<ProtectedRoute><ObyektInsideOwn /></ProtectedRoute>}
          />

          <Route
            path="/HomeLogin/MainAdmin/Obyekt/Customer"
            element={<ProtectedRoute><ObyektCustomer /></ProtectedRoute>}
          />
          <Route
            path="/HomeLogin/MainAdmin/Obyekt/Customer/Kart/:id"
            element={<ProtectedRoute><ObyektCustomerInside /></ProtectedRoute>}
          />

          <Route
            path="/HomeLogin/MainAdmin/Obyekt/Payment"
            element={<ProtectedRoute><ObyektPayment /></ProtectedRoute>}
          />
          <Route
            path="/HomeLogin/MainAdmin/Obyekt/Payment/Kart/:id"
            element={<ProtectedRoute><ObyektinsidePayment /></ProtectedRoute>}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default route;
