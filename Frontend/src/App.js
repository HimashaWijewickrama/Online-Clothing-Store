import './App.css';
import './css/admin.css';
import Sidenav from './components/sidenav'
import AdminHead from './components/adminHead'
import AdminFooter from './components/adminFooter'
import Welcome from './components/welcome'
import CategoryList from './components/categoryList'
import InsertCategory from './components/InsertCate'
import InsertProduct from './components/insertProduct';
import ProductList from './components/productList';
import UpdateProduct from './components/updateProduct';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
     <div className="App">
      <AdminHead/>
     
      <Sidenav/>
      <Switch>
        <Route path="/welcome" exact component={Welcome}/>
        <Route path="/categoryList" exact component={CategoryList}/>
        <Route path="/insert_cate" exact component={InsertCategory}/>
        <Route path="/insert_product" exact component={InsertProduct}/>
        <Route path="/productList" exact component={ProductList}/>
        <Route path="/updateProduct/:id" exact component={UpdateProduct}/>
      </Switch>
      <AdminFooter/>
  
    </div>
  </Router>
  );
}

export default App;
