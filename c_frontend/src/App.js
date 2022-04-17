

/*Css */

import './css/client.css';
import './css/Footer1.css';

/*Layouts*/
import ClientHead from './components/layout/cHeader'
import Footer1 from './components/layout/Footer1'
import Home2 from './components/layout/home2'
//import Header from './components/layout/Header'

/*user*/

import Login from './components/user/Login';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
     <div className="App">
        <ClientHead/>
           <Switch>
               <Route path="/Login" exact component={Login}/>


           </Switch>
         <Footer1/>
       </div>
    </Router>
  );
}

export default App;
