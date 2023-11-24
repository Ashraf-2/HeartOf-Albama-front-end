import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    const availableFoods = useLoaderData();
   
    // console.log(user.email);
    const email = user?.email || null;
    // console.log(email);
    const [foods,setFoods] = useState(availableFoods);
    const results = foods.filter(food => food.donator_email === email);
    console.log("results: ",results);



    // const url = `http://localhost:5000/manageFoods?email=${user?.email}`;
    /**
     * axios.get(url)
     * .then(res => console.log(res.data))
     * .catch(error => console.log(error))
     */


   
    return (
        <div>
            <h2 className="text-center">Manage Food: {results.length}</h2>
        </div>
    );
};

export default ManageFood;