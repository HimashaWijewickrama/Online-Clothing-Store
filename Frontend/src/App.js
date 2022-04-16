import './App.css';
import './css/admin.css';




//import Sidenav from './components/sidenav'
import AdminHead from './components/adminHead'
import AdminFooter from './components/adminFooter'
import Welcome from './components/welcome'
import CategoryList from './components/categoryList'
import InsertCategory from './components/InsertCategory'


//user side
import FirstPage from './components/FirstPage';
import AdminLogin from './components/userside/AdminLogin';
import AdminList from './components/userside/AdminList';
import CreateAdmin from './components/userside/CreateAdmin';
import UpdateAdmin from './components/userside/UpdateAdmin';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <Router>
     <div className="App">
      <AdminHead/>
      <Switch>
        <Route path="/welcome" exact component={Welcome}/>
        <Route path="/categoryList" exact component={CategoryList}/>
        <Route path="/insert_cate" exact component={InsertCategory}/>


        <Route path="/firstpage" exact component={FirstPage}/>
        <Route path="/adminlogin" exact component={AdminLogin}/>
        <Route path="/adminlist" exact component={AdminList}/>
        <Route path="/new" exact component={CreateAdmin}/>
        <Route path="/update" exact component={UpdateAdmin}/>

        
      </Switch>
      <AdminFooter/>
    </div>
  </Router>
  );
}

export default App;
