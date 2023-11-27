import { useQuery } from "@tanstack/react-query";

const UseMangeFoods = () => {

    const { data, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["uks"],
        queryFn: async () => {
            // const response = await fetch('http://localhost:5000/availableFoods');
            // const data = await response.json();
            // return data;
            try {
                const response = await fetch('http://localhost:5000/availableFoods');
          
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

export default UseMangeFoods;