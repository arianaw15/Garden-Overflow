import './App.css';
import Header from './components/Header/Header.js';
// import LandingPage from './components/LandingPage/LandingPage.js';
import LoginForm from "./components/LoginForm/LoginForm";


function App() {
  return (
    <div>
      <Header />
      {/* <LandingPage /> */}
      <LoginForm />
    </div>
  );
}

export default App;
