import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react";
import { auth } from "./firebase.js";
import { useStateValue } from "./context/stateProvider.js";

import './App.css';
import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Checkout from "./components/checkout/Checkout.jsx"
import Login from "./components/auth/login/Login.jsx";

export default function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            console.log('The User is ', authUser)
            if (authUser) {
                //user Logged in 
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                //use logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        });
    }, [dispatch])

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>  
                    <Route path='/' element={ <Home /> } />
                    <Route path='/checkout' element={ <Checkout /> } />
                    <Route path='/login' element={ <Login /> } />
                </Routes>
            </div>
        </Router>
    );
}
