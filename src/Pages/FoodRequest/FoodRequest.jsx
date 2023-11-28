import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { useQueries, useQuery } from "@tanstack/react-query";
import UseRequestData from "../../Hooks/UseRequestData";

const FoodRequest = () => {
    // const requestedFood = useLoaderData();
    // console.log('requested food: ', requestedFood);

    // const {user,loading} = useContext(AuthContext);
    // const {data, isLoading, isFetching, refetch} = useQuery({
    //     queryKey: ["fdc"],
    //     enabled: !loading,
    //     queryFn: async () => {
    //         const data = await fetch("http://localhost:5000/foodRequest");
    //         // const myFoods = await data.json();
    //         // return myFoods; //bellow another way
    //         return await data.json();
    //     }
    // })
    const {data, isLoading, isFetching, refetch} = UseRequestData();
    const {user} = useContext(AuthContext);

    console.log(data);
    const myFoodRequest = data && data?.filter(singleData => singleData.requester_email === user?.email)
    console.log("my food request: ", myFoodRequest);

    if(isFetching || isLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    // const myFoodRequest = requestedFood.filter(food => food.requester_email === user?.email) 
    // console.log('my food request: ', myFoodRequest);
    // console.log(Object.keys(myFoodRequest[0]).join(','));

    // const {_id,refId,food_img,food_name,food_status,donator_name,donator_email,donator_photo,food_quantity,pickup_location,expire_date,notes,delivery_status,donation_amount,request_date,requester_name,requester_email,requester_photo} = requested_food;


    return (
        <div>
            {/* <h2 className="text-center text-2xl font-bold my-5">My Food Request: {data.length}</h2> */}
            <h2 className="text-center text-2xl font-bold my-5">My Food Request:</h2>

            <div className="overflow-x-auto my-10">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Food Info</th>
                            <th>Donetor Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                            <th>Donation Amount</th>
                            <th>Delivery Status</th>
                            <th>Cancletion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myFoodRequest && myFoodRequest?.map((oneFood, index, refetch={refetch}) => <tr key={index} >
                                <td>{index+1}</td>
                                <td >
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={oneFood.food_img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{oneFood.food_name}</div>
                                            <div className="text-sm opacity-50">{oneFood.donator_email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td >
                                    <p>{oneFood.donator_name}</p>
                                </td>
                                <td >
                                    <p>{oneFood.pickup_location}</p>
                                </td>
                                <td >
                                    <p>{oneFood.expire_date}</p>
                                </td>
                                <td >
                                    <p>{oneFood.request_date}</p>
                                </td>
                                <td >
                                    <p>{oneFood.donation_amount}</p>
                                </td>
                                <td >
                                    <p className="badge badge-accent py-2 ">{oneFood.delivery_status.toUpperCase()}</p>
                                </td>
                                <td >
                                    <button className="btn btn-info">Cancel Request</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FoodRequest;