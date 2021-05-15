import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header.js';
import LandingPage from './components/LandingPage/LandingPage.js';
// import LoginForm from "./components/LoginForm/LoginForm";
import NoMatch from "./components/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";
// import SignUp from "./components/SignUp/SignUp";
import Zoneforum from "./components/Forum/ZoneForum";
import Replyboard from "./components/Forum/Replyboard"
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import UserProfile from './components/UserProfile/UserProfile';
import AuthStateApp from './components/SignUp/AmplifySignUp'
import AmpSignIn from './components/SignUp/AmplifySignIn';
Amplify.configure(awsconfig);


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home" component={LandingPage} />
        <Route exact path="/Login" component={AmpSignIn} />
        <Route exact path="/SignUp" component={AuthStateApp} />
        <Route exact path="/ZoneForum" component={Zoneforum} />
        <Route exact path="/Replyboard" component={Replyboard} />
        <Route exact path="/userprofile/" component={UserProfile}/>
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
