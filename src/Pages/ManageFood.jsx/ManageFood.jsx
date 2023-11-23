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
    // const [availabelFoods, setAvailableFoods] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/availableFoods')
    //         .then(res => res.json())
    //         .then(data => setAvailableFoods(data))
    // }, [])


   
    return (
        <div>
            <h2>Manage Food</h2>
        </div>
    );
};

export default ManageFood;