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
import SellOwn from '../SellHome/Admin/Own/SellOwn';
import SellInside from '../SellHome/Admin/Own/SellInside';
import SellCustomer from "../SellHome/Admin/Customer/SellCustomer";
import SellinsideCustomer from "../SellHome/Admin/Customer/SellInsideCustomer";
import SellPayment from "../SellHome/Admin/Payment/SellPayment";
import SellinsidePayment from '../SellHome/Admin/Payment/SellInsidePayment'
const route = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index={true} element={<Cards />} />
          <Route path="/Kart/:id" element={<InsideCard />} />
          <Route path="/satılıq-ev" element={<CardsSell />} />
          <Route path="/Satılıq-ev/Kart/:id" element={<InsideCardsSell />} />
          <Route path="/satılıq-ev/səbət" element={<Basket />} />
          <Route path="/kiraye-ev-form" element={<Rent />} />

          <Route path="*" element={<Error />} />

          <Route path="/satılıq-ev-form" element={<Sell />} />
          <Route path="/səbət" element={<Basket />} />
          <Route path="/Obyekt" element={<Obyekt />} />
          <Route path="/obyekt/Kart/:id" element={<InsideCardsObyekt />} />
          <Route path="/Obyekt/səbət" element={<Basket />} />
          <Route path="/Obyekt-form" element={<ObyektForm />} />
          <Route path="/HomeLogin" element={<Login />} />
          <Route path="/HomeLogin/MainAdmin" element={<MainAdmin />} />
          <Route path="/HomeLogin/MainAdmin/Renthome/Customer" element={<Costumer />} />
          <Route path="/HomeLogin/MainAdmin/Renthome/Customer/Kart/:id" element={<InsideCostumer />}/>

          <Route path="/HomeLogin/MainAdmin/Renthome/Own" element={<Own />} />
          <Route path="/HomeLogin/MainAdmin/Renthome/Own/Kart/:id" element={<InsideCardOwn />}/>
          <Route path="/HomeLogin/MainAdmin/Renthome/Payment" element={<Payment />} />
          <Route path="/HomeLogin/MainAdmin/Renthome/Payment/Kart/:id" element={<InsideCardPayment />}/>

          <Route path="/HomeLogin/MainAdmin/Sell/Own" element={<SellOwn />} />
          <Route path="/HomeLogin/MainAdmin/Sell/Own/Kart/:id" element={<SellInside />}/>

          <Route path="/HomeLogin/MainAdmin/Sell/Customer" element={<SellCustomer />} />
          <Route path="/HomeLogin/MainAdmin/Sell/Customer/Kart/:id" element={<SellinsideCustomer />}/>

          <Route path="/HomeLogin/MainAdmin/Sell/Payment" element={<SellPayment />} />
          <Route path="/HomeLogin/MainAdmin/Sell/Payment/Kart/:id" element={<SellinsidePayment />}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default route;
