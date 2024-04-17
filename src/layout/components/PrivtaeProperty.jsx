import React from 'react';
import PropTypes from 'prop-types';
import { FaBath, FaLocationDot } from 'react-icons/fa6';
import { IoBedOutline } from 'react-icons/io5';
import { LuBath } from 'react-icons/lu';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const PrivtaeProperty = ({ property }) => {

    // console.log(property)

    const { estate_id, image, area, bathrooms, bed_rooms, description, estate_title, owner, facilities, furnished, location, owner_name, price, segment_name, status } = property;

    return (

        <div>
            <div className="card w-[70vw] h-96 mb-10 bg-base-100 shadow-xl image-full hover:scale-110 duration-700" >
                <figure><img src={image} className='w-full ' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-merri">{estate_title}</h2>
                    <div>
                        <p className='text-xl'>{segment_name}</p>
                        <p className='font-medium font-merri text-3xl my-5'>{price / 10}$</p>
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
                    </div>
                    <div className="card-actions justify-end">
                        {
                            status == 'sale' ?
                                <button className="btn btn-ghost bg-[#ab978ad9]">Buy Property</button>
                                :
                                <button className="btn btn-ghost bg-[#452820]">Rent Property</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

PrivtaeProperty.propTypes = {

};

export default PrivtaeProperty;