import { XlviLoaderComponent } from "../../Components/Loading/LoadingLoader";
import UseMangeFoods from "../../Hooks/UseMangeFoods";
import FoodCardShow from "./FoodCard";
const MngFd = () => {
    // const {data, isLoading, isFetching, refetch} = useQuery({
    //     queryKey: ["myFoods"],
    //     queryFn: async () => {
    //         const data = await fetch("http://localhost:5000/availableFoods");
    //         // const myFoods = await data.json();
    //         // return myFoods; //bellow another way
    //         return await data.json();

    //     }
    // })

    const {data, isLoading, isFetching, refetch} = UseMangeFoods();         //hook
    console.log(data,isLoading);  //this data is useQuery data, line 4.
    // console.log(result.data);
    if(isLoading == true){
        return XlviLoaderComponent;
    }

    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-5">Manage Your Food: {data.length}</h2>
            <div className="grid grid-cols-3 gap-5 my-10">
                {
                    data.map(food => <FoodCardShow refetch={refetch} key={food._id} food={food}></FoodCardShow>)
                }
            </div>
        </div>
    );
};

export default MngFd;