import React, { useEffect, useState } from 'react';
import Property from './Property';
import PrivtaeProperty from './PrivtaeProperty';
import { Helmet } from 'react-helmet-async';

const PrivateProperties = () => {

    const [properties, setProperties] = useState([]);
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        fetch('Properties.json')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])

    return (
        <div className='max-w-[75.5vw] mx-auto'>
            <Helmet>
                <title>SAM's RECIDENCE | Properties</title>
            </Helmet>
            <h3 className='text-3xl md:text-5xl mt-10 ml-10 mb-10'>Here is a list of best <br />
                properties available for you</h3>

            <div className='flex flex-wrap ml-10'>
                {
                    properties.slice(0, dataLength).map(property => <PrivtaeProperty
                        key={property.estate_id}
                        property={property}
                    ></PrivtaeProperty>)
                }
            </div>
            <div className={dataLength === properties.length ? 'hidden' : 'mx-auto w-28 my-10'}>
                <button onClick={() => setDataLength(properties.length)} className='btn btn-ghost min-h-0 h-8 text-white bg-[#452820] rounded-3xl'>Load more</button>
            </div>
        </div>
    );
};

export default PrivateProperties;