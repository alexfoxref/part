import React from 'react';
import ReactDOM from 'react-dom';
import './theme/styles/styles.scss';
import MedicalServices from './containers/Site/MedicalServices';
import MedicalServise from './containers/Site/MedicalServise';
import Specialists from './containers/Site/Specialists';
import Specialist from './containers/Site/Specialist';
import RequestPage from './containers/Site/RequestPage';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header'


import {BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render(
    <>
        <Header/>
        <Router>
            <Route path='/medicalServices' component={MedicalServices} exact/>
            <Route path='/medicalServise' component={MedicalServise} exact/>
            <Route path='/specialists' component={Specialists} exact/>
            <Route path='/specialist' component={Specialist} exact/>
            <Route path='/request' component={RequestPage} exact/>
        </Router>
        <Footer/>
    </>
    , document.getElementById('root'));