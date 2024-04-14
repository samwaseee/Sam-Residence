import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <div className="carousel w-full my-10 bg-[#f2ebe5] h-[600px] rounded-2xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='my-auto ml-24'>
                        <h3 className='text-4xl font-bold'>Find your next Home in Your Dream City</h3>
                        <p className='font-robo text-lg mt-4'>Through our proprietary platform, WpResidence is changing how agents and clients navigate the process of finding or selling a home.</p>
                    </div>
                    <img src="https://i.ibb.co/yf7Qfmw/house-png-2-e1646989822282.png" className="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='my-auto ml-24'>
                        <h3 className='text-4xl font-bold'>Find your next Home in Your Dream City</h3>
                        <p className='font-robo text-lg mt-4'>Through our proprietary platform, WpResidence is changing how agents and clients navigate the process of finding or selling a home.</p>
                    </div>
                    <img src="https://i.ibb.co/Sw6gGKL/modern-residential-district-with-green-roof-balcony-generated-by-ai-1.png" className="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='my-auto ml-24'>
                        <h3 className='text-4xl font-bold'>Find your next Home in Your Dream City</h3>
                        <p className='font-robo text-lg mt-4'>Through our proprietary platform, WpResidence is changing how agents and clients navigate the process of finding or selling a home.</p>
                    </div>
                    <img src="https://i.ibb.co/rm8xVc0/3d-rendering-house-model.png" className="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="card card-compact z-10 bg-base-100 shadow-xl -mt-20 w-[75vw] mx-auto">
                <div className="card-body">
                    <div className='flex justify-between w-[70vw] mx-auto '>
                        <div>
                            <p>LOCATION</p>
                            <input type="text" name="" id="" placeholder='Enter an address,city,area or zip code' className='border-b black w-96 mt-2' />
                        </div>
                        <div>
                            <p>TYPE</p>
                            <select className="select select-bordered w-full max-w-xs min-h-0 h-8">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <div>
                            <p>CATEGORY</p>
                            <select className="select select-bordered w-full max-w-xs min-h-0 h-8">
                                <option disabled selected>Who shot first?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <button className='btn btn-ghost text-white bg-[#452820] w-48'> <FaSearch></FaSearch> Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;