import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const FoodRequest = () => {
    const {user} = useContext(AuthContext);
    const requestedFood = useLoaderData();
    console.log('requested food: ', requestedFood);

    const myFoodRequest = requestedFood.filter(food => food.requester_email === user?.email) 
    console.log('my food request: ', myFoodRequest);


    return (
        <div>
            <h2 className="text-center text-2xl font-bold my-5">My Food Request: {myFoodRequest.length}</h2>

            {/* <div className="overflow-x-auto my-10">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Food Info</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Manage Food</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map((oneFood, index) => <tr key={index}>
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
                                    <Link to={`/updateFood/${oneFood._id}`}><button className="btn btn-info">Update</button></Link>
                                </td>
                                <td >
                                    <button className="btn btn-ghost">Delete</button>
                                </td>
                                <td >
                                    <Link to={`/mngFd/${oneFood._id}`}><button className="btn btn-outline">Manage</button></Link>
                                </td>

                            </tr>)
                        }
                    </tbody>


                </table>
            </div> */}
        </div>
    );
};

export default FoodRequest;