import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";

const UseRequestData = () => {
    const {user,loading} = useContext(AuthContext);
    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["requests"],
        enabled: !loading,
        queryFn: async () => {
            try {
                const response = await fetch('https://food-campagin-server.vercel.app/foodRequest');
          
                if (!response.ok) {
                  throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
          
                const data = await response.json();
                return data;
              } catch (error) {
                console.error('Error fetching data:', error);
                throw error; // Rethrow the error to let the query handle it
              }

        }
    })
    console.log(data)

    return { data, isLoading, isFetching, refetch }
};

export default UseRequestData;
