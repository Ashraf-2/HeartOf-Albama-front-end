import axios from "axios";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ManageFoodwithReq = () => {
    const id = useParams();
    console.log("id: ", id);

    const requestedFooddata = useLoaderData();
    console.log("data: ", requestedFooddata);
    const dataLength = requestedFooddata.length;

    const { _id, refId, food_img, food_name, food_status, donator_name, donator_email, donator_photo, food_quantity, pickup_location, expire_date, notes, delivery_status, donation_amount, request_date, requester_name, requester_email, requester_photo } = requestedFooddata;

    const [delivery, setDelivery] = useState(false);

    const handleDeliveryStatus = () => {
        //two work: 1. change the request food delivery status to "delivered" and 2. change this food delivery status to "delivered" and not request able in food available collections

        //chage requested foo status to "delivered"
        const updatedFood = {
            _id,
            refId, food_img,
            food_name, food_status,
            donator_name, donator_email,
            donator_photo,
            food_quantity,
            pickup_location,
            expire_date,
            notes,
            delivery_status: "Delivered",
            donation_amount,
            request_date,
            requester_name,
            requester_email,
            requester_photo
        };

        console.log("updated food: ", updatedFood);
        axios.put(`http://localhost:5000/foodRequest/${_id}`, updatedFood)
            .then(res => {
                console.log("update req sent to server")
                setDelivery(true);
                toast.success('Your food delivery confirmation is successfull');
            })
            .catch(error => console.log(error))

        const updateFoodonAvailableCollection = {
            food_img,
            food_name,
            food_status,
            donator_name,
            donator_email,
            donator_photo,
            food_quantity,
            pickup_location,
            expire_date,
            notes
        }

        //2.update available food collection
        axios.put(`http://localhost:5000/availableFoods/${refId}`, {
            food_img,
            food_name,
            food_status: "Unavailable",
            donator_name,
            donator_email,
            donator_photo,
            food_quantity,
            pickup_location,
            expire_date,
            notes,
            delivery_status: "Delivered"
        })
            .then(res => {
                console.log('availability and delivery status changed on food available collection')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="text-center">
                {
                    requestedFooddata ? <h2 className="font-bold text-sm italic">Someone has requested for your food!</h2> :
                        <h2 className="text-3xl font-bold my-20">No food request for this food</h2>
                }
            </div>
            <div className="w-8/12 mx-auto my-5">
                {
                    requestedFooddata && <div className=" grid grid-cols-12 gap-2 bg-base-100 shadow-xl p-2">
                        <div className="col-span-4">
                            <figure><img src={food_img} alt={food_name} /></figure>
                        </div>
                        <div className="col-span-6 flex flex-col justify-between">
                            <p>Requester email: {requester_email}</p>

                            <div className="flex flex-row justify-start items-center">
                                <p>Requester: </p>
                                <h2 className="card-title mx-2">{requester_name}</h2>
                                <img className="w-14 rounded-full" src={requester_photo} alt={requester_email} />

                            </div>
                            <p>Request date: {request_date}</p>

                            <div>
                                {
                                    delivery_status === 'Delivered' && <p className="italic text-sm font-bold">**This food is already delivered to someone else!</p>
                                }
                            </div>

                        </div>
                        <div className=" col-span-2 card-actions justify-center items-center">
                            <button disabled={delivery === true || delivery_status === "Delivered"} onClick={handleDeliveryStatus} className="btn btn-outline bg-red-500 text-white uppercase">{delivery_status}</button>

                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default ManageFoodwithReq;