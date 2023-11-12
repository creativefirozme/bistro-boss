import React from 'react';
import Banner from '../Banner/Banner';
import Category from './../Category/Category';
import SomeTalk from '../ChefService/ChefService';
import MenuCategory from '../MenuCategory/MenuCategory';

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <SomeTalk />
            <MenuCategory />
        </div>
    );
};

export default Home;