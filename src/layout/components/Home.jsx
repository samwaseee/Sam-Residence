import React from 'react';
import Header from './Header';
import Explore from './Explore';
import Properties from './Properties';

const Home = () => {
    return (
        <div className='font-robo'>
            <Header></Header>
            <Explore></Explore>
            <Properties></Properties>
        </div>
    );
};

export default Home;