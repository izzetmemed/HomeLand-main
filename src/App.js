import Route from './Router/route';
import './fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/fontawesome.min.css';
import './fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/solid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './scss/main.css';
function App() {
  return (
      <div >
        <div className='d-flex flex-column align-items-center'>
          <div className='  col-12 col-xl-10  col-xxl-8'>
           <Route/>
        </div>
        
        </div>
        
      </div> 
  );
}

export default App;
