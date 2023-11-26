import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useReactTable } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const BasicTable = () => {
    const { user } = useContext(AuthContext);

    const [availableFoods, setAvailableFoods] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/availableFoods")
            .then(res => res.json())
            .then(data => setAvailableFoods(data))
    }, [])
    // console.log(availableFoods);
    const results = availableFoods.filter(food => food.donator_email === user.email)
    console.log("results: ",results);
    // const [foods,setFoods] = useState(results);
    let foods = results;
    console.log("foods: ",foods);

    // const newFood = {
    //     food_img, food_name, food_status, donator_name, donator_email, donator_photo, food_quantity, pickup_location, expire_date, notes
    // }

    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/availableFoods/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    console.log("successfully deleted")
                    const remains = results.filter(result => result._id !== id);
                    console.log(remains);
                    Swal.fire({
                        title: "Delete Food!",
                        text: "Your Food Added Successfully-->>",
                        icon: "success"
                    });

                    foods = remains;
                }
                console.log('deleted req id: ', id)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h2 className="text-center">Basic Table: </h2>
            <h2>MyFoods: {results.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Food Info</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Manage Food</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            foods.map((oneFood,index) => <tr key={index}>
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
                                    <Link to={`/mngFd/${oneFood.donator_email}`}><button className="btn btn-outline">Manage</button></Link>
                                </td>

                            </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div >
    );
};

export default BasicTable;