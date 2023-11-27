import { useQuery } from "@tanstack/react-query";
import UseMangeFoods from "../../Hooks/UseMangeFoods";
import FoodCardShow from "./FoodCardShow";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const MngFd = () => {
    const {user,loading} = useContext(AuthContext);
    const {data, isLoading, isFetching, refetch} = useQuery({
        queryKey: ["myFoods"],
        enabled: !loading,
        queryFn: async () => {
            const data = await fetch("http://localhost:5000/availableFoods");
            // const myFoods = await data.json();
            // return myFoods; //bellow another way
            return await data.json();
        }
    })
    
    // const {data} = UseMangeFoods();
    // console.log(data);
    // const {data} = UseMangeFoods();
    // console.log(data);
    // console.log('data length: ',data.length);
    // const lent = data.length;
    // console.log('lent: ',lent);
    // const {data,refetch} = UseMangeFoods();

    console.log("data: ", data);

    return (
        <div>
            
            <h2>Manage Food: {data?.length}</h2>
            <div className="grid grid-cols-3 gpa-5">
                {
                    data && data?.map(food => <FoodCardShow refetch={refetch} key={food._id} food={food}></FoodCardShow>)
                }
            </div>
        </div>
    );
};

export default MngFd;