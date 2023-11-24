import { useLoaderData } from "react-router-dom";
import SingleFoodCard from "./SingleFoodCard";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from '../../assets/empty-with-man.json'

const AvailableFood = () => {
    const availableFoods = useLoaderData();
    // console.log(availableFoods);

    const [query, setQuery] = useState("");

    // const handleSearch = e => {
    //     setQuery(e.target.value)
    //     console.log(query);
    // }
    // console.log(availableFoods.map(food => console.log("id: ", food._id)));
    // console.log(query)
    // const searchedFoods = availableFoods.filter(food => food.food_name.toLowercase)
    console.log("query : ", query);
    const results = availableFoods.filter(food => food.food_name.toLowerCase().includes(query));
    console.log('results: ', results);
    return (
        <div>
            <h2 className="text-4xl text-center font-bold">Available Food: {availableFoods.length}</h2>
            <div className="flex justify-center my-4">
                <input onChange={(e) => setQuery(e.target.value)} className="input input-bordered w-full max-w-xs" type="text" name="search" placeholder="Search Food.." />
            </div>
            <div >
                {
                    results.length > 0 ?
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                            {

                                results.map(food => <SingleFoodCard key={food._id} food={food}></SingleFoodCard>)
                            }
                        </div>
                        :
                        <div className="flex flex-col justify-center items-center">
                            <Lottie className="w-3/12" animationData={animationData}></Lottie>

                            <h2 className="text-center text-4xl text-red-500 font-bold mt-5 mb-10">Sorry Fruit not found</h2>

                        </div>
                }
            </div>
        </div>
    );
};

export default AvailableFood;