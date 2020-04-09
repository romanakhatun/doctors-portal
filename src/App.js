import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Appoinment from './Components/Appointment/Appoinment';
import Doctor from './Components/Doctor/Doctor';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/doctor">
                        <Doctor />
                    </Route>
                    <Route path="/appointment">
                        <Header />
                        <Appoinment />
                        <Footer></Footer>
                    </Route>
                    <Route path="/">
                        <Header />
                        <HomePage />
                        <Footer></Footer>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
