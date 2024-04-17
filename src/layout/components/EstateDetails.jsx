import { Helmet } from "react-helmet-async";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuBath, LuPhone } from "react-icons/lu";
import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
    const properties = useLoaderData();
    const propId = useParams();

    const property = properties.find(property => property.estate_id === propId.id)



    const { estate_id, image, area, bathrooms, bed_rooms, description, estate_title, owner, facilities, furnished, location, owner_name, price, segment_name, status } = property;

    // console.log(propId, property);

    return (
        <div>
            <Helmet>
                <title>SAM's RECIDENCE | {estate_title}</title>
            </Helmet>
            <img src={image} className="h-[50vh] mx-auto" />
            <div className="w-[85vw] lg:max-w-[50vw] mx-auto">
                <div className="flex gap-4 items-center my-10">
                    <div className="badge text-white bg-[#ab978ad9] text-xl p-4">{status}</div>
                    {furnished &&
                        <div className="badge text-white bg-[#452820] p-4">furnished</div>
                    }
                    <div className='badge flex gap-2 p-4 text-xl'> <FaLocationDot></FaLocationDot> {location}</div>
                </div>
                <p className="text-3xl font-semibold mb-7">{price} $</p>
                <h2 className="card-title font-merri text-4xl">
                    {estate_title}
                </h2>
                <p className="font-bold text-xl">Overview</p>
                <div className="flex flex-wrap justify-between">
                    <div>Facilites : {facilities.map(facility => <p>{facility} </p>)}</div>
                    <div className="flex items-center gap-7 my-5">
                        <div>
                            <div className='flex justify-center items-center gap-2'>
                                <IoBedOutline /> {bed_rooms}
                            </div>

                            <p>Bedrooms</p>
                        </div>
                        <div>
                            <div className='flex justify-center items-center gap-2'>
                                <LuBath /> {bathrooms}
                            </div>
                            <p>Bathrooms</p>
                        </div>
                        <div>
                            <div className='flex justify-center items-center gap-2'>
                                <FaExpandArrowsAlt /> <div>{area} ft<sup>2</sup></div>
                            </div>
                            <p>Property Size</p>
                        </div>
                    </div>
                </div>

                <div className="card my-20 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Description</h2>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left mx-5">
                            <div className="flex">
                                <img src={owner} className=" rounded-lg mr-5" />
                                <div>
                                    <p className="font-bold border-b-2">{owner_name}</p>
                                    <p>Sales executive</p>
                                </div>
                            </div>
                            <button className="btn bg-black text-white w-full mt-5">Send Email</button>
                            <div className="flex items-center my-5 gap-4">
                                <button className="btn btn-outline w-1/2"> <LuPhone /> Call</button>
                                <button className="btn btn-outline w-1/2"> <FaInstagram /> DM</button>
                            </div>

                        </div>
                        <div className="card max-w-sm shadow-2xl bg-base-100 rounded-4xl">
                            <form className="card-body">
                                <div className="form-control">
                                    <p>Request info</p>
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Your Phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Your Email" className="input input-bordered" required />
                                    <label className="label">
                                        <textarea className="textarea textarea-bordered w-full h-28" placeholder="I'm interested in [ Villa with Amazing View ]"></textarea>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default EstateDetails;