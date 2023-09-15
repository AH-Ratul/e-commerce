import React from 'react';
import Header from '../components/Header/Header';
import {Outlet} from 'react-router-dom';

const Main = () => {
    return (
        <div className='select-none'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;