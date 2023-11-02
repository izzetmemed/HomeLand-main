import Header from './header';
import Search from './search';
 import Footer from './footer';
import Cards from './cards';
import Pagenation from './pagenation';
import Answer from './answer/rent';
import Login from "./ADMIN/Login"
import MainAdmin from "./ADMIN/mainAdmin"
import İnsideKart from "./İnsideCard"
import RentHomeOwn from './ADMIN/RentHomeOwn';
import InsideCardOwn from './ADMIN/Own/insideCardOwn';
import RentHomeCustomer from './ADMIN/RentHomeCustomer';
import InsideCardCostumer from './ADMIN/Customer/insideCardCostumer';
import RentPayment from './ADMIN/RentPayment';
import InisecardPayment from './ADMIN/payment/insideCardPayment';
import './fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/fontawesome.min.css';
import './fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/solid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './scss/main.css';
function App() {
  return (
      <div >
        <div className='d-flex flex-column align-items-center'>
          <div className='  col-12 col-xl-10  col-xxl-8'>
            {/* <InisecardPayment/> */}
            {/* <RentPayment/> */}
            {/* <InsideCardCostumer/> */}
            {/* <RentHomeCustomer/> */}
            {/* <İnsideKart/> */}
        {/* <MainAdmin/> */}
          {/* <Login/> */}
        {/* <Header/> 
        <Answer/>
        <Search/>
        
        <Pagenation/>
        <Footer/> */}
        {/* <Cards/> */}
        {/* <RentHomeOwn/> */}
        {/* <InsideCardOwn/> */}
        </div>
        </div>
        
      </div> 
  );
}

export default App;
