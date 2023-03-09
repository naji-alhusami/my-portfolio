// import Card from "../Reusable/Card";
// import MealItem from "./MealItem/MealItem";
// import PersonalPhoto from "../Images/PersonalPhoto.jpg";
import Card from "../Reusable/Card";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <Card>
        <div className="p-4 ">
          {/* <img
            src={PersonalPhoto}
            alt="my-pict"
            className="w-60 h-64 my-4 mx-auto overflow-hidden rounded-full"
          /> */}
          <h1 className="text-4xl font-bold mb-4">NAJI ALHUSAMI</h1>
          <h3 className="text-lg mb-4">Front-End Development</h3>
          <p className="text-lg mb-4 lg:px-20">
            I'm a Front-End Developer, specializing in building responsive web
            applications.
          </p>
          <Link to="/about" className="flex justify-center">
            <button className="m-4 px-8 py-4 bg-green-700 hover:bg-green-900 flex items-center rounded-md text-white transition duration-100 font-bold">
              Please Read More About Me
                <HiArrowNarrowRight className="ml-3 " />
            </button>
          </Link>
          <strong>OR</strong>
          <Link to="/about" className="flex justify-center">
            <button className="m-4 px-8 py-4 bg-green-700 hover:bg-green-900 flex items-center rounded-md text-white transition duration-100 font-bold">
              Please Read More About Me
                <HiArrowNarrowRight className="ml-3 " />
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
