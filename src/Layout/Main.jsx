import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shered/Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div draggable="false">
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;