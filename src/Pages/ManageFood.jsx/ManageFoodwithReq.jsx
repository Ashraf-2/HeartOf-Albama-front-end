import axios from "axios";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ManageFoodwithReq = () => {
    const id = useParams();
    console.log("id: ",id);

    const data = useLoaderData();
    console.log("data: ",data);
    const dataLength = data.length;

    return (
        <div>
            <div>
                {
                    data ?  <h2>Someone request for your food</h2> : <h2>No food request</h2>
                }
            </div>
            <div>
                hi
            </div>
        </div>
    );
};

export default ManageFoodwithReq;