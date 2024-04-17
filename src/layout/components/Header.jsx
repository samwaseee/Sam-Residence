import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
    return (
        <div  className='lg:max-w-[92.5vw] mx-auto mt-20 lg:mt-0'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='w-full my-10 bg-[#f2ebe5] h-[600px] rounded-2xl'>
                    <div className='md:flex'>
                        <div className='my-auto ml-24 '>
                            <h3 className='text-4xl font-bold font-merri'>Find your next Home in Your Dream City</h3>
                            <p className='font-robo text-lg mt-4'>Through our proprietary platform, WpResidence is changing how agents and clients navigate the process of finding or selling a home.</p>
                        </div>
                        <img src="https://i.ibb.co/yf7Qfmw/house-png-2-e1646989822282.png" className="w-96 lg:w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full my-10 bg-[#f2ebe5] h-[600px] rounded-2xl'>
                    <div className='md:flex'>
                        <div className='my-auto ml-24 '>
                            <h3 className='text-4xl font-bold font-merri'>Find your next Home in Your Dream City</h3>
                            <p className='font-robo text-lg mt-4'>Through our proprietary platform, WpResidence is changing how agents and clients navigate the process of finding or selling a home.</p>
                        </div>
                        <img src="https://i.ibb.co/Sw6gGKL/modern-residential-district-with-green-roof-balcony-generated-by-ai-1.png" className="w-1/2 mx-auto" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='w-full my-10 bg-[#f2ebe5] h-[600px] rounded-2xl'>
                    <div className='md:flex'>
                        <div className='my-auto ml-24 '>
                            <h3 className='text-4xl font-bold font-merri'>Find your next Home in Your Dream City</h3>
                            <p className='font-robo text-lg mt-4'>Through our proprietary platform, WpResidence is changing how agents and clients navigate the process of finding or selling a home.</p>
                        </div>
                        <img src="https://i.ibb.co/rm8xVc0/3d-rendering-house-model.png" className="w-1/2 mx-auto" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="card card-compact z-10 bg-base-100 shadow-xl -mt-20 w-[75vw] mx-auto" data-aos="fade-up">
                <div className="card-body">
                    <div className='md:flex flex-wrap justify-between gap-5 w-[70vw] mx-auto '>
                        <div>
                            <p>LOCATION</p>
                            <input type="text" name="" id="" placeholder='Enter an address,city,area or zip code' className='border-b black w-64 md:w-96 mt-2' />
                        </div>
                        <div>
                            <p>TYPE</p>
                            <select className="select select-bordered w-full max-w-xs min-h-0 h-8"  defaultValue="Property type">
                                <option>Property Type</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                        </div>
                        <div>
                            <p>CATEGORY</p>
                            <select className="select select-bordered w-full max-w-xs min-h-0 h-8" defaultValue="Peoperty categpry">
                                <option>Property Category</option>
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