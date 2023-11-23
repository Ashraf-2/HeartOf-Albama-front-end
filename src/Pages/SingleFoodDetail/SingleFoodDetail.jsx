import { useLoaderData, useParams } from "react-router-dom";

const SingleFoodDetail = () => {
    const id = useParams();
    console.log("params id: ",id);
    const food = useLoaderData();
    console.log("my target food: ",food);
    const { _id, food_img, food_name, food_status, donator_name, donator_email, donator_photo, food_quantity, pickup_location, expire_date, notes } = food;

    return (
        <div>
            <div className="text-center flex flex-col items-center justify-center gap-2">
                <img className="w-6/12 object-cover" src={food_img} alt={food_name} />
                <p className="text-3xl"><span className="font-bold">Food Name</span>: {food_name}</p>
            </div>
            <div>
                <p>Food Name: {food_name}</p>
                <p>Food Quantity: {food_quantity}</p>
                <p>Pickup Location: {pickup_location}</p>
                <p>Expire Date: {expire_date}</p>
                <p>Notes: {notes}</p>
            </div>
        </div>
    );
};

export default SingleFoodDetail;