import UseMangeFoods from "../../Hooks/UseMangeFoods";
import FoodCardShow from "./FoodCardShow";

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
    
    // const {data} = UseMangeFoods();
    // console.log(data);
    // const {data} = UseMangeFoods();
    // console.log(data);
    // console.log('data length: ',data.length);
    // const lent = data.length;
    // console.log('lent: ',lent);
    const {data,refetch} = UseMangeFoods();
    console.log("data: ", data);

    return (
        <div>
            {/* <h2>Manage Foods: {data.length}</h2> */}
            {/* <h2>Hello boss, total count: {lent}</h2> */}
            {/* <h2>data: {data.length}</h2> */}
            {/* <div className="grid grid-cols-3 gap-5 my-10">
                {
                    data.map(food => <FoodCardShow refetch={refetch} key={food._id} food={food}></FoodCardShow>)
                }
            </div> */}
            <h2>Manage Food: {data.length}</h2>
            <div className="grid grid-cols-3 gpa-5">
                {
                    data.map(food => <FoodCardShow refetch={refetch} key={food._id} food={food}></FoodCardShow>)
                }
            </div>
        </div>
    );
};

export default MngFd;