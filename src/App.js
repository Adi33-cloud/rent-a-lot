import logo from './logo.svg';
import './App.css';
import LoginSignUp from './components/login-signup/LoginSignUp';
import Lister from './components/lister/Lister';
import Renter from './components/renter/Renter';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={LoginSignUp} />
        <Route path="/lister" component={Lister} />
        <Route path="/renter" component={Renter} />

      </div>
    </Router>
  );
}

export default App;
