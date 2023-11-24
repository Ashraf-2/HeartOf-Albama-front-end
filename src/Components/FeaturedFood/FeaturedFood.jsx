import { useEffect, useState } from "react";
import SingleFoodCard from "../../Pages/AvailableFood/SingleFoodCard";
import { Link } from "react-router-dom";

const FeaturedFood = () => {
    const [availableFoods, setAvailableFoods] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/availableFoods')
            .then(res => res.json())
            .then(data => setAvailableFoods(data));
    }, [])

    console.log(availableFoods);
    const availableFoodSorted = availableFoods.sort((a, b) => b.food_quantity - a.food_quantity);
    console.log(availableFoodSorted);


    return (
        <div>
            <h2 className="text-center font-bold text-4xl">Featured Food</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {
                    availableFoodSorted.slice(0, 6).map(food => <SingleFoodCard key={food._id} food={food}></SingleFoodCard>)
                }
            </div>
            <div className="text-center my-5">
                <Link to="/availabeFood">
                    <button className="btn btn-secondary">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFood;