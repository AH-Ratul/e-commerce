import React from 'react';
import Header from '../components/Header/Header';
import {Outlet} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div className='select-none'>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Main;