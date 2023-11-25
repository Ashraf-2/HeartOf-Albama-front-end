import { useParams } from "react-router-dom";

const ManageSingleFood = () => {
    const id = useParams();
    console.log("id in single food: ", id);
    return (
        <div>
            <h2>food name: {}</h2>
        </div>
    );
};

export default ManageSingleFood;