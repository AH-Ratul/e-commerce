import React from 'react';
import Header from '../components/Header/Header';
import {Outlet} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div className='select-none'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;