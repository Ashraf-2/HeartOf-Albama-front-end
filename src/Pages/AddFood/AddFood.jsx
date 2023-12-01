import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = () => {
    const {user} = useContext(AuthContext);

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const food_img = form.food_img.value;
        const food_name = form.food_name.value;
        const food_status = form.food_status.value;
        const donator_name = form.donator_name.value;
        const donator_email = form.donator_email.value;
        const donator_photo = form.donator_photo.value;
        const food_quantity = form.food_quantity.value;
        const pickup_location = form.pickup_location.value;
        const expire_date = form.expire_date.value;
        const notes = form.notes.value;
        console.log(food_img,food_name,food_status,donator_name,donator_email,donator_photo,food_quantity,pickup_location,expire_date,notes);

        const newFood = {
            food_img,food_name,food_status,donator_name,donator_email,donator_photo,food_quantity,pickup_location,expire_date,notes
        }
        console.log("newFood: ", newFood);

        //post data to server using axios 
        axios.post('https://food-campagin-server.vercel.app/availableFoods',{
            food_img,
            food_name,
            food_status,
            donator_name,
            donator_email,
            donator_photo,
            food_quantity,
            pickup_location,
            expire_date,
            notes
        })
        .then(res=> {
            console.log("your data successfully posted to server");
            Swal.fire({
                title: "Thank you!",
                text: "Your Food Added Successfully-->>",
                icon: "success"
              });
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <h2 className="text-center mt-5 text-4xl font-bold text-red-600">Add Food</h2>
            <div className=" w-8/12 py-10 mx-auto bg-red-50 rounded my-5">
                <form onSubmit={handleAddFood} className="max-w-md mx-auto">
                    {/* food image */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="food_img" id="food_img" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="food_img" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Image Url</label>
                    </div>
                    
                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* food name */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="food_name" id="food_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="food_name" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Name</label>
                        </div>
                        {/* food status */}
                        <div className="relative z-0 w-full mb-5 group">
                            <label htmlFor="food_status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                            <select name="food_status" id="food_status" className="bg-gray-50 border h-4/6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option defaultChecked value="available">available</option>
                                <option value="unavaibale">unavaibale</option>
                            </select>
                        </div>
                    </div>
                    {/* donator name */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="donator_name" id="donator_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                        <label htmlFor="donator_name" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Donator Name</label>
                    </div>
                    {/* donator email */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input defaultValue={user?.email} type="email" name="donator_email" id="donator_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " readOnly required />

                        <label htmlFor="donator_email" className="peer-focus:font-medium absolute text-base text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Donator Email</label>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* donator photo url */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="donator_photo" id="donator_photo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="donator_photo" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Donator Photo Url</label>
                        </div>
                        {/* food quantity */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" name="food_quantity" id="food_quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="food_quantity" className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Quantity (for no. of person)
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* pick up location */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="pickup_location" id="pickup_location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="pickup_location" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PickUp Location</label>
                        </div>
                        {/* expire date */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="date" name="expire_date" id="expire_date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="expire_date" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expire Date</label>
                        </div>
                    </div>
                    {/* additional notes */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="notes" id="notes" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="notes" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Additional Notes</label>
                    </div>
                    <button type="submit" className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Add Food</button>
                </form>
            </div>

        </div>
    );
};

export default AddFood;