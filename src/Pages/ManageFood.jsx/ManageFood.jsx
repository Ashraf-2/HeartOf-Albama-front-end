import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import BasicTable from "../MngFd/BasicTable";

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    const availableFoods = useLoaderData();

    // console.log(user.email);
    const email = user?.email || null;
    // console.log(email);
    const results = availableFoods.filter(food => food.donator_email === email);
    // console.log("results: ", results);
    const [foods, setFoods] = useState(results);

    // const url = `http://localhost:5000/manageFoods?email=${user?.email}`;
    /**
     * axios.get(url)
     * .then(res => console.log(res.data))
     * .catch(error => console.log(error))
     */

    //handle delete to delete a food from the server
    // console.log("foods before: ", foods);
    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/availableFoods/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    console.log("successfully deleted")
                    const remains = foods.filter(result => result._id !== id);
                    console.log(remains);
                    Swal.fire({
                        title: "Delete Food!",
                        text: "Your Food Added Successfully-->>",
                        icon: "success"
                    });

                    setFoods(remains)
                }
                console.log('deleted req id: ', id)
            })
            .catch(error => console.log(error))
    }
    // console.log("foods after: ", foods);
    return (
        <div>
            <h2 className="text-center text-3xl font-bold">Manage Your Food: {foods.length}</h2>
            {/* <BasicTable></BasicTable> */}
            {/* <div className="grid grid-cols-3 gap-3">
                {
                    foods.map(singleFood => <div className="border-2 p-4 max-w-4xl flex flex-row items-center gap-5" key={singleFood._id}>
                        <div>
                            <img className="w-[300px]" src={singleFood.food_img} alt={singleFood.food_name} />
                            <p className="text-center font-bold">{singleFood.food_name}</p>
                            <p className="text-center font-bold">{singleFood.donator_name}</p>
                            <p className="text-center font-bold">{singleFood.donator_email}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link to={`/updateFood/${singleFood._id}`}>
                                <button className="btn btn-secondary">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(singleFood._id)} className="btn btn-info">Delete</button>
                            <Link to={`/mngFd/${singleFood.donator_email}`}>
                                <button className="btn btn-outline">Manage</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div> */}
            {/* table show */}
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
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
                        {/* row 1 */}
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
                                    <button onClick={() => handleDelete(oneFood._id)} className="btn btn-ghost">Delete</button>
                                </td>
                                <td >
                                    <Link to={`/manageFoods/${oneFood._id}`}><button className="btn btn-outline">Manage</button></Link>
                                </td>

                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageFood;