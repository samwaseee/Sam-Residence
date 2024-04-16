import React from 'react';
import PropTypes from 'prop-types';
import { FaBath, FaLocationDot } from 'react-icons/fa6';
import { IoBedOutline } from 'react-icons/io5';
import { LuBath } from 'react-icons/lu';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Property = (property) => {

    // console.log(property)

    const { estate_id, image, area, bathrooms, bed_rooms, description, estate_title, owner, facilities, furnished, location, owner_name, price, segment_name, status } = property.property;

    return (

        <div>
            <div className="card w-80 h-[36rem] font-robo bg-base-100 shadow-xl" data-aos="zoom-in">
                <figure className='h-64 -mb-14'><img src={image} alt="Property" className=' hover:scale-125 duration-700' /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <div className="badge top-4 text-white bg-[#ab978ad9] relative">{status}</div>

                        <div className='badge bottom-4 flex gap-2 p-4 relative'> <FaLocationDot></FaLocationDot> {location}</div>
                    </div>
                    {furnished &&
                        <div className="badge text-white bg-[#452820]">furnished</div>
                    }
                    <h2 className="card-title font-merri">
                        {estate_title}
                    </h2>
                    <p className='font-medium text-xl'>{price/10}$</p>
                    <p className='text-xs'>{description.substring(0, description.indexOf('.') + 1)}</p>
                    <div>Facilites : {facilities.map(facility => <span className='text-xs'>{facility} </span>)}</div>

                    <div className="flex items-center gap-7 my-5">
                        <div className='flex justify-center items-center gap-2'>
                            <IoBedOutline /> {bed_rooms}
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <LuBath /> {bathrooms}
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <FaExpandArrowsAlt /> <div>{area} ft<sup>2</sup></div>
                        </div>
                    </div>

                    <Link to={`/property/${estate_id}`}><button className='btn btn-ghost bg-[#ab978ad9] min-h-0 h-8'>View Property</button></Link>

                    <div className="card-actions flex items-center border-t-2 pt-4">
                        <div className="flex-1 flex items-center gap-5">
                            <img src={owner} className='rounded-full w-8' />
                            <h5>{owner_name}</h5>
                        </div>
                        <button className='btn btn-outline min-h-0 h-8 text-xl'>
                            <CiHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Property.propTypes = {

};

export default Property;