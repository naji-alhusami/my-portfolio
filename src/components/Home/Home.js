// import Card from "../Reusable/Card";
// import MealItem from "./MealItem/MealItem";
import PersonalPhoto from "../Images/PersonalPhoto.jpg";
import CoverPhoto from "../Images/CoverPhoto.jpg";
import Card from "../Reusable/Card";

const Home1 = () => {
  return (
    <div
      className="min-h-screen w-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${CoverPhoto})`, backgroundSize: "cover" }}
    >
      <Card>
        <div>
          {/* <div className="w-full  lg:w-2/3 p-4 text-white bg-green-700"> */}
          <img
            src={PersonalPhoto}
            alt="my-pict"
            className="w-60 h-64 my-4 mx-auto overflow-hidden rounded-full"
          />
          <h1 className="text-4xl font-bold mb-4">NAJI ALHUSAMI</h1>
          <h3 className="text-lg mb-4">Front-End Development</h3>
          <p className="text-lg mb-4 lg:px-20">
            I'm a Front-End Developer, specializing in building responsive web
            applications.
          </p>
        </div>
        {/* </div> */}
      </Card>
    </div>
  );
};

export default Home1;
