import { useEffect, useState } from "react";
import SingleFoodCard from "../../Pages/AvailableFood/SingleFoodCard";
import { Link } from "react-router-dom";

const FeaturedFood = () => {
    const [availableFoods, setAvailableFoods] = useState([]);


    useEffect(() => {
        fetch('https://food-campagin-server.vercel.app/availableFoods')
            .then(res => res.json())
            .then(data => setAvailableFoods(data));
    }, [])

    const availableFoodSorted = availableFoods.sort((a, b) => b.food_quantity - a.food_quantity);
    
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-center font-bold text-5xl  my-5">Featured Food</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2"  data-aos="fade-up"  data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                {
                    availableFoodSorted.slice(0, 6).map((food,index) => <SingleFoodCard index={index} key={food._id} food={food}></SingleFoodCard>)
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