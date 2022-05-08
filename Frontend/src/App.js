import './App.css';
import './css/admin.css';
import './css/Forms.css';

// product and categoty

import AdminHead from './components/product_category/adminHead'
import AdminFooter from './components/product_category/adminFooter'
import Welcome from './components/product_category/welcome'
import CategoryList from './components/product_category/categoryList'
import InsertCategory from './components/product_category/InsertCategory'
import InsertProduct from './components/product_category/insertProduct';
import ProductList from './components/product_category/productList';
import UpdateProduct from './components/product_category/updateProduct';
import reportProduct from './components/product_category/prodRepo';
import ReportProd from './components/product_category/reportProd';


//user side

import AdminLogin from './components/userside/AdminLogin';
import AdminList from './components/userside/AdminList';
import CreateAdmin from './components/userside/CreateAdmin';
import UpdateAdmin from './components/userside/UpdateAdmin';
import CustomerView from './components/userside/CustomerView';
import CustomerList from './components/userside/CustomerList';
import RegList from './components/userside/Clistview';
import ReportGen from './components/userside/ReportGen';


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
        <Route path="/insert_product" exact component={InsertProduct}/>
        <Route path="/productList" exact component={ProductList}/>
        <Route path="/updateProduct/:id" exact component={UpdateProduct}/>
        <Route path="/reportView" exact component={reportProduct}/>
        <Route path="/productReport" exact component={ReportProd}/>
        



        
        <Route path="/" exact component={AdminLogin}/>
        <Route path="/adminlist" exact component={AdminList}/>
        <Route path="/new" exact component={CreateAdmin}/>
        <Route path="/update/:id" exact component={UpdateAdmin}/>
        <Route path="/customerlist" exact component={CustomerList}/>
        <Route path="/customerview" exact component={CustomerView}/>
        <Route path="/reGen" exact component={ReportGen}/>
        <Route path="/regList" exact component={RegList}/>
       
      </Switch>
      <AdminFooter/>
  
    </div>
  </Router>
  );
}

export default App;
