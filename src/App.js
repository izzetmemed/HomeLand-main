import Header from './header';
import Search from './search';
 import Footer from './footer';
import Cards from './cards';
import Pagenation from './pagenation';
import Answer from './answer/rent'
import './fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/fontawesome.min.css';
import './fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/solid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './scss/main.css';
function App() {
  return (
      <div >
        <div className='d-flex flex-column align-items-center'>
          <div className='col-8  '>
          
        <Header/> 
        {/* <Answer/> */}
        <Search/>
        {/* <Cards/> */}
        <Pagenation/>
        <Footer/>
        </div>
        </div>
        
      </div> 
  );
}

export default App;
