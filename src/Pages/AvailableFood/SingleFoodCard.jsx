/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const SingleFoodCard = ({ food }) => {
    const { _id, food_img, food_name, food_status, donator_name, donator_email, donator_photo, food_quantity, pickup_location, expire_date, notes } = food;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-80 object-cover" src={food_img} alt={food_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{food_name}</h2>
                    <div className="flex flex-row-reverse justify-start items-center gap-2">
                        <p>Doner: <span className="font-bold">{donator_name}</span></p>
                        <img className="rounded-xl w-20" src={donator_photo} alt={donator_name} />
                    </div>
                    <p>Qunaity: {food_quantity} Person </p>
                    <p>Expire Date: {expire_date} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodCard;