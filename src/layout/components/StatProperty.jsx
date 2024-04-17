import React from 'react';
import PropTypes from 'prop-types';
import { FaBath, FaLocationDot } from 'react-icons/fa6';
import { IoBedOutline } from 'react-icons/io5';
import { LuBath } from 'react-icons/lu';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const StatProperty = ({property}) => {
     // console.log(property)

     const { estate_id, image, area, bathrooms, bed_rooms, description, estate_title, owner, facilities, furnished, location, owner_name, price, segment_name, status } = property;

     return (
 
         <div>
             <div className="card h-96 mb-10 bg-base-100 shadow-xl image-full hover:scale-110 duration-700" >
                 <figure><img src={image} className='' /></figure>
                 <div className="card-body">
                     <h2 className="card-title text-3xl font-merri">{estate_title}</h2>
                     <div>
                         <p className='text-xl'>{segment_name}</p>
                     </div>
                 </div>
             </div>
         </div>
     );
};

export default StatProperty;