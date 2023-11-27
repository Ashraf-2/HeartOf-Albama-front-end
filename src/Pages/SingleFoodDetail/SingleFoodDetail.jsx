import { useLoaderData, useParams } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";



const SingleFoodDetail = () => {
    const { user } = useContext(AuthContext);
    const id = useParams();
    console.log("params id: ", id);
    const food = useLoaderData();
    // console.log("my target food: ", food);
    const { _id, food_img, food_name, food_status, donator_name, donator_email, donator_photo, food_quantity, pickup_location, expire_date, notes,delivery_status } = food;
    console.log("delivery status: ", delivery_status);
    const today = new Date().toISOString().split('T')[0];
    // console.log("today: ", today);

    // const handleSubmitRequest = (e) => {
    //     e.preventDefault();
    //     Swal.fire({
    //         title: "Thank you!",
    //         text: "Your Food Added Successfully-->>",
    //         icon: "success"
    //     });
    // }
    const notify = () => {
        console.log('clicked')
        toast("request done", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const handleSubmitRequest = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log("id: ", _id);
        
        const donation_amount =form.donation_money.value;
        console.log("food donation: ",donation_amount);
        //food request -crud
        const newFoodRequest ={
            id2: _id,
            food_img,
            food_name,
            food_status,
            donator_name,
            donator_email,
            donator_photo,
            food_quantity,
            pickup_location,
            expire_date,
            notes,
            delivery_status: "pending",
            donation_amount
        }
        axios.post('http://localhost:5000/foodRequest',newFoodRequest)
        .then(res=> {
            console.log('your food request sent to server');
        })
        .catch(error => console.log(error))


        //food update -crud
        const updateFood = { 
            food_img,
            food_name,
            food_status,
            donator_name,
            donator_email,
            donator_photo,
            food_quantity,
            pickup_location,
            expire_date,
            notes,
            delivery_status: "pending"
        }
        axios.put(`http://localhost:5000/availableFoods/${_id}`,updateFood)
        .then(res => {
            console.log('successfully send the update request')
        })
        .catch(error => console.log(error))
        console.log("food request: ",newFoodRequest);
        console.log("update food: ",updateFood);
    }

    return (
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-5 items-center px-2 my-5">
            <div className="col-span-5 h-full text-center flex flex-col items-center justify-center gap-2">
                <img className="object-left h-full rounded-md" src={food_img} alt={food_name} />
                {/* <p className="text-2xl"><span className="font-bold">Food Name</span>: {food_name}</p> */}
            </div>
            <div className="text-left col-span-7">
                <p className="text-xl"> <span className="font-semibold">Food Name</span>: {food_name}</p>
                <p className="text-xl"> <span className="font-semibold">Food Quantity</span>: {food_quantity}</p>
                <p className="text-xl"> <span className="font-semibold">Pickup Location</span>: {pickup_location}</p>
                <p className="text-xl"> <span className="font-semibold">Expire Date</span>: {expire_date}</p>
                <p className="text-xl"> <span className="font-semibold">Notes:</span> {notes}</p>
                {/* food request button */}
                <div className="text-center my-5">
                    <button disabled={food_status !== 'available'} className="btn w-3/6 text-base text-center mx-auto btn-secondary" onClick={() => document.getElementById('my_modal_2').showModal()}>Request Food </button>
                </div>
                <div className="text-xl">
                    <p> <span className="font-semibold">Donetor Name</span>: {donator_name}</p>
                    <p> <span className="font-semibold">Donetor Email</span>: {donator_email}</p>
                </div>


                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" >open modal</button> */}

                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg text-center">Checkout form of Your Food Request!</h3>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className=" w-8/12 py-10 mx-auto bg-red-50 rounded my-5">
                            <form onSubmit={handleSubmitRequest} className="max-w-md mx-auto">
                                {/* food image */}


                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="food_img" id="food_img" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={food_img} readOnly required />
                                    <label htmlFor="food_img" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Image Url</label>
                                </div>

                                {/* food name */}
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="food_name" id="food_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={food_name} readOnly required />
                                    <label htmlFor="food_name" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Name</label>
                                </div>

                                {/* food id and donation money */}
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    {/* food id*/}
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="food_id" id="food_id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={_id} readOnly required />
                                        <label htmlFor="food_id" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Id</label>
                                    </div>
                                    {/* donation money */}
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="number" name="donation_money" id="donation_money" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label htmlFor="donation_money" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Donation Money $</label>
                                    </div>
                                </div>

                                {/* donator name */}
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="donator_name" id="donator_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={donator_name} readOnly required />

                                    <label htmlFor="donator_name" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Donator Name</label>
                                </div>

                                {/* donator email */}
                                <div className="relative z-0 w-full mb-5 group">
                                    <input defaultValue={donator_email} type="email" name="donator_email" id="donator_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " readOnly required />

                                    <label htmlFor="donator_email" className="peer-focus:font-medium absolute text-base text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Donator Email</label>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                    {/* user email: requester */}
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="user_email" id="user" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={user?.email} required />
                                        <label htmlFor="user_email" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Email</label>
                                    </div>
                                    {/* request date */}
                                    <div className="relative z-0 w-full mb-5 group">

                                        <input type="date" name="request_date" id="request_date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={today} readOnly required />
                                        <label htmlFor="food_quantity" className="peer-focus:font-medium absolute text-sm text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Request_date
                                        </label>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 md:gap-6">
                                    {/* pick up location */}
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="text" name="pickup_location" id="pickup_location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={pickup_location} readOnly required />
                                        <label htmlFor="pickup_location" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PickUp Location</label>
                                    </div>
                                    {/* expire date */}
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input type="date" name="expire_date" id="expire_date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={expire_date} required />
                                        <label htmlFor="expire_date" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Expire Date</label>
                                    </div>
                                </div>

                                {/* additional notes */}
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="notes" id="notes" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={notes} required />
                                    <label htmlFor="notes" className="peer-focus:font-medium absolute text-base text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Additional Notes</label>
                                </div>

                                {/* <form method="dialog" className=""> */}
                                <button type="submit" className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Request Food</button>
                                <ToastContainer></ToastContainer>
                                {/* </form> */}
                            </form>
                        </div>
                    </div>
                    {/* <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form> */}
                </dialog>
            </div>
        </div>
    );
};

export default SingleFoodDetail;