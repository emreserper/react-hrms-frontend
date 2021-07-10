import './App.css';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Navi from "./layouts/Navi";
import Dashboard from './layouts/Dashboard';
import Footer from './layouts/Footer';
function App() {
  return (
    <div className="App">
   <Navi></Navi>
 <Dashboard></Dashboard>
 <Footer></Footer>
    </div>
  );
}

export default App;
