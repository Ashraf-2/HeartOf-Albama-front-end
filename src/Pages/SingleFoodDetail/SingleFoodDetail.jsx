import { useLoaderData, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import editAnimation from "../../assets/edit-lottie-animation.json"
import deleteAnimation from "../../assets/delete-animation.json"
const SingleFoodDetail = () => {
    const id = useParams();
    console.log("params id: ", id);
    const food = useLoaderData();
    console.log("my target food: ", food);
    const { _id, food_img, food_name, food_status, donator_name, donator_email, donator_photo, food_quantity, pickup_location, expire_date, notes } = food;

    return (
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-5 items-center px-2 my-5">
            <div className="col-span-5 h-full text-center flex flex-col items-center justify-center gap-2">
                <img className="object-left h-full rounded-md" src={food_img} alt={food_name} />
                {/* <p className="text-2xl"><span className="font-bold">Food Name</span>: {food_name}</p> */}
            </div>
            <div className="text-left col-span-7">
                <p className="text-xl"> <span className="font-semibold">Food Name</span>: {food_name}</p>
                <p className="text-xl"> <span className="font-semibold">Food Quantity</span>: {food_quantity}</p>
                <p className="text-xl"> <span className="font-semibold">Pickup Location</span>: {pickup_location}</p>
                <p className="text-xl"> <span className="font-semibold">Expire Date</span>: {expire_date}</p>
                <p className="text-xl"> <span className="font-semibold">Notes:</span> {notes}</p>
                <div className="text-center mt-5">

                    <button className="btn w-3/6 text-base text-center mx-auto btn-secondary">Request Food </button>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodDetail;