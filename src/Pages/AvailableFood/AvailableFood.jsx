import { useLoaderData } from "react-router-dom";
import SingleFoodCard from "./SingleFoodCard";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from '../../assets/empty-with-man.json'

const AvailableFood = () => {
    const availableFoods = useLoaderData();
    const [query, setQuery] = useState("");
    const [sortByExpireDate, setSortByExpireDate] = useState(false);
    
    console.log(sortByExpireDate);

    const results = availableFoods.filter(food => food.food_name.toLowerCase().includes(query));
    
    const today = new Date();
    console.log("today: ", today);

    const resultsByExpireDate = [...results].filter(expDt => new Date(expDt.expire_date) > today).sort((a,b) => new Date(a.expire_date) - new Date(b.expire_date));
    
    // console.log('expire date: ',resultsByExpireDate)

    const numberOfFoodBySort = resultsByExpireDate.length || 0;


    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-4xl text-center font-bold">Available Food: 
            {
                sortByExpireDate?
                numberOfFoodBySort
                :
                results.length
            }
            </h2>
            
            <div className="max-w-xl mx-auto flex justify-center gap-2 my-4">
                {/* search and sort field */}
                <input onChange={(e) => setQuery(e.target.value)} className="input input-bordered w-full max-w-xs" type="text" name="search" placeholder="Search Food.." />
                <button onClick={()=>setSortByExpireDate(!sortByExpireDate)} className="btn btn-info">Sort by Expire Date</button>
            </div>
            {/* to show all foods */}
            <div>
                {
                    sortByExpireDate && <p className="italic text-sm">**Expired Food has been ignored</p>
                }
            </div>
            {/* show every single food in card-wise */}
            <div>
                {
                    results.length > 0 ?
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5" >
                            {
                                sortByExpireDate ?
                                resultsByExpireDate.map(food => <SingleFoodCard key={food._id} food={food}></SingleFoodCard>)
                                :
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