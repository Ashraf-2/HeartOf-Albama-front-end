import FeaturedFood from "../../Components/FeaturedFood/FeaturedFood";
import ImgSlider from "../../Components/ImgSlider/imgSlider";
import Qoutations from "../../Components/Qoutations/Qoutations";

const Home = () => {
    return (
        <div>
            <ImgSlider></ImgSlider>
            <FeaturedFood></FeaturedFood>
            <Qoutations></Qoutations>
        </div>
    );
};

export default Home;