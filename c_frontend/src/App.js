
/*Css */

import './css/client.css';
import './css/Footer1.css';
import './App.css';

/*Layouts*/
import ClientHead from './components/layout/cHeader'
import Footer1 from './components/layout/Footer1'
import Home2 from './components/layout/home2'

/*user*/

import Login from './components/user/Login';
import Register from './components/user/Register';
import ForgotPassword from './components/user/ForgotPassword';
import Profile from './components/user/Profile';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
     <div className="App">
        <ClientHead/>
           <Switch>
               
             <Route path="/login" exact component={Login}/>
             <Route path="/signup" exact component={Register}/>
             <Route path="/reset" exact component={ForgotPassword}/>
             <Route path="/myprofile" exact component={Profile}/>
             <Route path="/home" exact component={Home2}/>
         
           </Switch>
         <Footer1/>
       </div>
    </Router>
  );
}



export default App;


//