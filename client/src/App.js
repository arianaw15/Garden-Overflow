import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import LoginForm from "./components/LoginForm/LoginForm";
import NoMatch from "./components/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home" component={LandingPage} />
        <Route exact path="/Login" component={LoginForm} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
