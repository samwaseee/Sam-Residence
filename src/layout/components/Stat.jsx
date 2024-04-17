import React, { useEffect, useState } from 'react';
import 'animate.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import PrivtaeProperty from './PrivtaeProperty';
import StatProperty from './StatProperty';

const Stat = () => {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('Properties.json')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])

    return (
        <div className=' bg-[#f4ebe4] max-w-7xl rounded-3xl mx-auto'>
            <div className='flex flex-wrap lg:flex-nowrap text-4xl font-merri p-20 items-center'>
                <h2 className='w-1/2 mx-auto p-5 lg:p-0'>Explore most <br />
                    popular areas</h2>

                <div className='flex flex-wrap lg:flex-nowrap gap-5 ml-10'>
                    {
                        properties.slice(0, 3).map(property => <StatProperty
                            key={property.estate_id}
                            property={property}
                        ></StatProperty>)
                    }
                </div>
            </div>
            <div className="stats shadow flex flex-wrap md:flex-nowrap w-96 md:w-[78vw] ml-3 md:ml-[84px]">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Visitors</div>
                    <ScrollAnimation animateIn="fadeIn" animateInDuration={1000} className="stat-value">
                        31K
                    </ScrollAnimation>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="pt-5 stat-value animate__animated animate__bounce animate-bounce">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value animate__animated animate__slideInLeft">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Stat;