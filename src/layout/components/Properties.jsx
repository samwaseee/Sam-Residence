import React, { useEffect, useState } from 'react';
import Property from './Property';

const Properties = () => {

    const [properties, setProperties] = useState([]);
    const [dataLength,setDataLength] = useState(6);

    useEffect(() => {
        fetch('Properties.json')
            .then(res => res.json())
            .then(data => setProperties(data));
    }, [])


    // console.log(properties);

    return (
        <div className='max-w-[75.5vw] mx-auto'>
            <h3 className='text-5xl mt-48 ml-10 mb-10'>Explore the latest <br />
                properties available</h3>

            <div className='flex flex-wrap gap-10 ml-10'>
                {
                    properties.slice(0,dataLength).map(property => <Property 
                        key={property.estate_id}
                        property = {property}
                        ></Property>)
                }
            </div>
            <div className={ dataLength === properties.length ? 'hidden' : 'mx-auto w-28 my-10'}>
                <button onClick={()=> setDataLength(properties.length)} className='btn btn-ghost min-h-0 h-8 text-white bg-[#452820] rounded-3xl'>Load more</button>
            </div>
        </div>
    );
};


export default Properties;