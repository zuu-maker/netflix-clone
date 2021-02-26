import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import auth from './firebase';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
         if (authUser) {
          //dispatch user to datalayer
          dispatch(login({
            uid: authUser.uid,
            email:authUser.email
          }))
         }else{
          //dispatch null to datalayer
          dispatch(logout())
         }
    })

    return unsubscribe
  }, [dispatch])
  
  return (
    <div className="app">
    {!user ? <Login/> : 
    (
      <Router>
        <Switch>
        <Route path="/profile">
            <Profile/>
        </Route>
        <Route path="/login">
           <HomeScreen/>
          </Route>
          <Route exact path="/">
           <HomeScreen/>
          </Route>
        </Switch>
      </Router>
   )}
      </div>
    );
}

export default App;
