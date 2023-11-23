import { useLoaderData } from "react-router-dom";
import SingleFoodCard from "./SingleFoodCard";

const AvailableFood = () => {
    const availableFoods = useLoaderData();
    console.log(availableFoods);
    return (
        <div>
            <h2 className="text-4xl text-center font-bold">Available Food: {availableFoods.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                {
                    availableFoods.map(food => <SingleFoodCard key={food._id} food={food}></SingleFoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;