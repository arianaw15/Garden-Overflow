import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import LoginForm from "./components/LoginForm/LoginForm";
import NoMatch from "./components/NoMatch/NoMatch";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home" component={LandingPage} />
        <Route exact path="/Login" component={LoginForm} />
        {/* <Route exact path="/CreateAccount" component={CreateAccount} /> */}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
