import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    const availableFoods = useLoaderData();

    // console.log(user.email);
    const email = user?.email || null;
    // console.log(email);
    const results = availableFoods.filter(food => food.donator_email === email);
    // console.log("results: ", results);
    const [foods, setFoods] = useState(results);

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
            
            {/* table show */}
            <div className="overflow-x-auto my-10"  data-aos="fade-up" data-aos-duration="1000">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Food Info</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Manage Food</th>
                            <th>Food Request?</th>

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
                                <td>
                                    <p>{oneFood?.delivery_status === "pending"? "Yes": "X"}</p>
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