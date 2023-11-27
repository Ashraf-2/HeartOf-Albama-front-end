import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";

const ManageSingleFood = () => {
    const id = useParams();
    console.log("id in single food: ", id);
    const data = useLoaderData();
    console.log('data: ',data);
    return (
        <div>
            <h2>food name: {}</h2>
        </div>
    );
};

export default ManageSingleFood;