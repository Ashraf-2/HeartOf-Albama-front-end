import { useLoaderData } from "react-router-dom";
import SingleFoodCard from "./SingleFoodCard";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from '../../assets/empty-with-man.json'

const AvailableFood = () => {
    const availableFoods = useLoaderData();
    // console.log(availableFoods);

    const [query, setQuery] = useState("");
    const [sortByExpireDate, setSortByExpireDate] = useState(true);
    console.log(sortByExpireDate);

    // console.log("query : ", query);
    const results = availableFoods.filter(food => food.food_name.toLowerCase().includes(query));
    
    //expire date sorting
    const sortByExpireDate = results.sort((a,b) => b.expire_date - a.expire_date);
    // console.log('expire date: ',resultsByExpireDate)
    
    // console.log('results: ', results);
    // const availableFoodSorted = availableFoods.sort((a, b) => b.food_quantity - a.food_quantity);
    return (
        <div>
            <h2 className="text-4xl text-center font-bold">Available Food: {availableFoods.length}</h2>
            <div className="flex justify-center my-4">
                <input onChange={(e) => setQuery(e.target.value)} className="input input-bordered w-full max-w-xs" type="text" name="search" placeholder="Search Food.." />
            </div>
            {/* to show all foods */}
            <div>
                <button onClick={()=>setSortByExpireDate(!sortByExpireDate)} className="btn btn-info">Sort by Expire Date</button>
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