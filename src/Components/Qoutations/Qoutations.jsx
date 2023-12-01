import { useEffect, useState } from "react";
import ShowSingleQoute from "./ShowSingleQoute";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Qoutations = () => {
    const [qoutes, setQoutes] = useState([]);
    useEffect(() => {
        fetch('/public/qoutations.json')
            .then(res => res.json())
            .then(data => setQoutes(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 2000,


      };

    console.log(qoutes.map(qoute => console.log(qoute.quotation)))
    return (
        <div className="">
            <h2 className="text-center text-3xl font-bold">World famous philanthropist</h2>
            <div className="w-5/6 mx-auto">
                <div className="my-10">
                    <Slider {...settings}>
                        {
                            qoutes.map(qoute => <ShowSingleQoute key={qoute.id} qoute={qoute}></ShowSingleQoute>)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Qoutations;