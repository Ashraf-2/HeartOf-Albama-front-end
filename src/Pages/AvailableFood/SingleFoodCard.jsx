/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const SingleFoodCard = ({ food,index }) => {
    console.log('index: ',index);
    // console.log(food);
    const {_id, food_img, food_name, food_status, donator_name, donator_email, donator_photo, food_quantity, pickup_location, expire_date, notes } = food;
    return (
            <div data-aos={index && (index+1) % 2 ===0 ? "zoom-in-left": "zoom-in-right" } className="flex flex-col md:flex-row justify-start p-3  gap-2 bg-base-100 shadow-xl" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <div className="flex-1 ">
                    <img className="h-full object-cover rounded" src={food_img} alt={food_name} />
                </div>
                <div className="flex-1">
                    <h2 className="card-title">{food_name}</h2>
                    <p><span className="font-bold">Qunaity</span>: {food_quantity} Person </p>
                    <p><span className="font-bold">Expire Date:</span> {expire_date} </p>
                    <p><span className="font-bold">Pickup Location:</span> {pickup_location}</p>
                    <p><span className="font-bold">Notes</span>: {notes}</p>

                    <div className="my-1 flex flex-row justify-start items-center gap-2">
                        {/* doner section */}
                        <img className="rounded-xl w-20" src={donator_photo} alt={donator_name} />
                        <p>Donator: <span className="font-bold">{donator_name}</span></p>
                    </div>
                    <div className="text-center">
                        <Link to={`/foodDetail/${_id}`}><button className="btn btn-secondary w-full">Details</button></Link>
                    </div>
                </div>
            </div>
        
    );
};

export default SingleFoodCard;