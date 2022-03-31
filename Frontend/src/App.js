import './App.css';
import './css/admin.css';
import Sidenav from './components/sidenav'
import AdminHead from './components/adminHead'
import AdminFooter from './components/adminFooter'
import Welcome from './components/welcome'

function App() {
  return (
    <div className="App">
      <AdminHead/>
      <Sidenav/>
      <Welcome/>
      <AdminFooter/>
    </div>
  );
}

export default App;
