import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Router from './router'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">

      <Home>
      </Home>
      <ToastContainer></ToastContainer>
      <Router></Router>
    </div>
  );
}

export default App;
