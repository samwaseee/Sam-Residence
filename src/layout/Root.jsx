import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Root = () => {
    return (
        <div className='max-w-[92.5vw] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;