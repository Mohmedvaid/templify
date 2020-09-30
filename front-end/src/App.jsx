import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header/Header'
import Home from './Home/Home'
import Checkout from './Checkout/Checkout'
import Login from './Login/Login'
import { auth } from './auth/firebase'
import { useStateValue } from './DataLayer/StateProvider'
import Register from './Register/Register'


function App() {
  const [{ basket }, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
