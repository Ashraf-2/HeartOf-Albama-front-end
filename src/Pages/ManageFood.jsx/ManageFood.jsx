import { useContext, useEffect, useState } from "react";
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
    console.log("results: ", results);
    const [foods, setFoods] = useState(results);

    // const url = `http://localhost:5000/manageFoods?email=${user?.email}`;
    /**
     * axios.get(url)
     * .then(res => console.log(res.data))
     * .catch(error => console.log(error))
     */

    //handle delete to delete a food from the server
    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/availableFoods/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    console.log("successfully deleted")
                    const remains = results.filter(result => result._id !== id);
                    console.log(remains);
                    Swal("Done", "Deleted successfully", "success")
                    setFoods(remains)
                }
                console.log('deleted req id: ', id)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h2 className="text-center">Manage Food: {foods.length}</h2>
            <div className="grid grid-cols-3 gap-3">
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
                                <button className="btn btn-secondary">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(singleFood._id)} className="btn btn-info">Delete</button>
                            <button className="btn btn-outline">Manage</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageFood;