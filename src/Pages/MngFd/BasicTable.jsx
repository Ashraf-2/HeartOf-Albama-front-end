import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const BasicTable = () => {
    const {user} = useContext(AuthContext);

    const [availableFoods,setAvailableFoods] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/availableFoods")
        .then(res => res.json())
        .then(data => setAvailableFoods(data))
    },[])
    // console.log(availableFoods);
    const results = availableFoods.filter(food => food.donator_email === user.email)
    console.log(results);
    
    
    return (
        <div>
            <h2 className="text-center">Basic Table: </h2>
            <h2>MyFoods: {results.length}</h2>
        </div>
    );
};

export default BasicTable;