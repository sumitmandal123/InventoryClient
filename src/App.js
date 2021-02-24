import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Router from './router';
import Login from './component/Login/Login';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">


      <ToastContainer></ToastContainer>
      <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login}>
                    </Route>
                    <Route path="/" component={Router}>
                    </Route>
                </Switch>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
