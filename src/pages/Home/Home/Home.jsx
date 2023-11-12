import React from 'react';
import Banner from '../Banner/Banner';
import Category from './../Category/Category';
import SomeTalk from '../ChefService/ChefService';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <SomeTalk/>
        </div>
    );
};

export default Home;