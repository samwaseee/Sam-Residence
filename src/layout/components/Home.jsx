import React from 'react';
import Header from './Header';
import Explore from './Explore';
import Properties from './Properties';
import Stat from './Stat';

const Home = () => {
    return (
        <div className='font-robo'>
            <Header></Header>
            <Explore></Explore>
            <Properties></Properties>
            <Stat></Stat>
        </div>
    );
};

export default Home;