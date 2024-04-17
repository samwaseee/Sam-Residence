import React, { useEffect, useState } from 'react';
import Header from './Header';
import Explore from './Explore';
import Properties from './Properties';
import Stat from './Stat';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='font-robo'>
            <Helmet>
                <title>SAM's RESIDENCE | Home</title>
            </Helmet>
            <Header></Header>
            <Explore></Explore>
            <Properties></Properties>
            <Stat></Stat>
        </div>
    );
};

export default Home;