
/*Css */

import './css/client.css';
import './css/Footer1.css';
import './App.css';
import './css/offe.css';

/*Layouts*/
import ClientHead from './components/layout/cHeader'
import Footer1 from './components/layout/Footer1'
import Home2 from './components/layout/home2'
import About from './components/layout/About'


/*user*/

import Login from './components/user/Login';
import Register from './components/user/Register';
import ForgotPassword from './components/user/ForgotPassword';
import Profile from './components/user/Profile';
import Logout from './components/user/Logout';

/*cart and offer*/
import AddCart from './components/cart_offer/AddCart';
import AllCart from './components/cart_offer/AllCart';
import UpdateCart from './components/cart_offer/UpdateCart'
import UserOffer from './components/cart_offer/UserOffer';
import OfferView from './components/cart_offer/OfferView';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
     <div className="App">
        <ClientHead/>
           <Switch>
           <Route path="/home2" exact component={Home2}/>

               
             <Route path="/login" exact component={Login}/>
             <Route path="/signup" exact component={Register}/>
             <Route path="/reset" exact component={ForgotPassword}/>
             <Route path="/myprofile" exact component={Profile}/>
             <Route path="/home" exact component={Home2}/>
             <Route path="/about" exact component={About}/>
             <Route path="/logout" exact component={Logout}/>

             <Route path="/add_cart/:id" exact component={AddCart} />
             <Route path="/cart" exact component={AllCart} />
             <Route path="/update/:id" exact component={UpdateCart} />
             <Route path="/user_offer" exact component={UserOffer} />
             <Route path="/get_offer/:id" exact component={OfferView} />

           </Switch>
         <Footer1/>
       </div>
    </Router>
  );
}



export default App;


//