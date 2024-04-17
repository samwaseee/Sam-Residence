import React from 'react';

const Explore = () => {
    return (
        <>
            <div className='mt-32 max-w-5xl mx-auto px-5 md:flex'>
                <img src="https://lasvegas.wpresidence.net/wp-content/uploads/2022/03/team2.jpeg" data-aos="fade-right" className='rounded-2xl md:w-full' />
                <div className=' ml-5 lg:ml-48 my-auto'>
                    <h3 className='font-merri text-4xl'>We help clients buy and sell houses since 1989</h3>
                    <p className='my-10'>With over $2 Billion in sales, due to our unparalleled results, expertise and dedication, we rank amongst the top 6 agencies in Las Vegas. Our agency is the industry’s top luxury producer.</p>
                    <button className='btn bg-[#452820] text-white'>More about us</button>
                </div>
            </div>
        </>
    );
};

export default Explore;