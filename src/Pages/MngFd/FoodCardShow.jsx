import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const FoodCardShow = ({ food, refetch }) => {
    // console.log(food);
    // console.log(Object.keys(food).join(','))
    const {
        _id,
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
    } = food;

    const handleDelte = () => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                axios.delete(`http://localhost:5000/availableFoods/${_id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire({
                                title: `${food_name}`,
                                text: "Your Food Added Successfully-->>",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });

    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={food_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{food_name}</h2>
                <p>{donator_email}</p>
                <div className="card-actions justify-end">
                    <Link to={`/updateFood/${_id}`}>
                        <button className="btn btn-info">Update</button>
                    </Link>
                    <button onClick={handleDelte} className="btn btn-secondary">Delete</button>
                    <Link to={`/mngFd/${_id}`}>
                        <button className="btn btn-outline">Manage</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCardShow;