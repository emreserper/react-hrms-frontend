import './App.css';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Navi from "./layouts/Navi";
import Dashboard from "./layouts/Dashboard"
import Register from './pages/loginprocesses/Register';
function App() {
  return (
    <div className="App">
   <Navi></Navi>
   <Register></Register>
    </div>
  );
}

export default App;
