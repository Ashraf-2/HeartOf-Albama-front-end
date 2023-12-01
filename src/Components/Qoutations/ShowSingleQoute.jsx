

const ShowSingleQoute = ({ qoute }) => {
    console.log(qoute);
    const { id, image, personName, quotation } = qoute;
    return (
        <div className="bg-white text-black rounded-xl mx-10">
            <div className="h-56 rounded-t-xl bg-red-300 flex justify-center items-center">
                <img className="h-36 w-36 rounded-full" src={image} alt={id} />
            </div>

            <div className="flex flex-col justify-center items-center bg-gray-500 text-white px-2 py-10">
                <p className="text-xl font-semibold">{personName}</p>

                <p>{quotation}</p>
            </div>
        </div>
    );
};

export default ShowSingleQoute;