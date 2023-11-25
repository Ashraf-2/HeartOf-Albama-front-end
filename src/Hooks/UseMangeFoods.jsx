import { useQuery } from "@tanstack/react-query";

const UseMangeFoods = () => {

    const {data, isLoading, isFetching, refetch} = useQuery({
        queryKey: ["myFoods"],
        queryFn: async () => {
            const data = await fetch("http://localhost:5000/availableFoods");
            // const myFoods = await data.json();
            // return myFoods; //bellow another way
            return await data.json();
    
        }
    })

    return {data, isLoading, isFetching, refetch}
};

export default UseMangeFoods;