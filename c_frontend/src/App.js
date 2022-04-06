

/*Css */
import './App.css';
import './css/client.css';
import './css/Footer1.css';

/*Layouts*/
import ClientHead from './components/layout/cHeader'
import Footer1 from './components/layout/Footer1'
import Home2 from './components/layout/home2'
//import Header from './components/layout/Header'

function App() {
  return (
    <div className="App">
      <ClientHead/>
      <Home2/>
      <Footer1/>

    </div>
  );
}

export default App;
