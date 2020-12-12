import React from 'react';
import './Doctor.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserInjured, faCalendarCheck, faCog, faFilePrescription, faTh, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Dasboard from './Dasboard';
import Appointment from './Appointment';
import Patients from './Patients';
import Prescription from './Prescription';

const Doctor = () => {
    return (
        <div className="doctorPages">
            <div className="sidebarMenu">
                <ul>
                    <li>
                        <div className="doctorLink">
                            <a href="/doctor/dasboard"><FontAwesomeIcon icon={faTh} />Dasboard</a>
                        </div>

                        <div className="doctorLink">
                            <a href="/doctor/appointment"><FontAwesomeIcon icon={faCalendarCheck} />Appointment</a>
                        </div>
                        <div className="doctorLink">
                            <a href="/doctor/patients"><FontAwesomeIcon icon={faUserInjured} />Patients</a>

                        </div>
                        <div className="doctorLink">
                            <a href="/doctor/prescription"><FontAwesomeIcon icon={faFilePrescription} />Prescription</a>
                        </div>
                        <div className="doctorLink">
                            <a href="/doctor/setting"><FontAwesomeIcon icon={faCog} />Setting</a>
                        </div>
                    </li>
                </ul>
                <div className="logout">
                    <li><a href="/"><FontAwesomeIcon icon={faArrowRight} />Log Out</a></li>
                </div>
            </div>
            <div className="doctorComponents">
                <Router>
                    <Switch>
                        <Route path="/doctor/dasboard">
                            <Dasboard />
                        </Route>
                        <Route path="/doctor/appointment">
                            <Appointment />
                        </Route>
                        <Route path="/doctor/patients">
                            <Patients />
                        </Route>
                        <Route path="/doctor/prescription">
                            <Prescription />
                        </Route>
                        <Route path="/doctor/">
                            <Dasboard />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default Doctor;
