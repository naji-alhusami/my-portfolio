import React from "react";
import Cover from "../Images/Cover.png";

const Home = () => {
  return (
    // <header className="mt-n20 pt-20 h-screen bg-primary-10 relative">
    //   <section className="grid h-full items-center w-90vw mx-auto max-w-screen-lg">
    //     <article className="bg-green-700">
    //       <div>
    //         <div className="underline"></div>
    //         <h1>i'm john</h1>
    //         <h4>freelance web and mobile UI/UX Designer</h4>
    //         <button type="button" to="/contact" className="btn">
    //           contact me
    //         </button>
    //       </div>
    //     </article>
    //     <img
    //       src={Cover}
    //       alt="portfolio"
    //       className="hero-img"
    //       placeholder="blurred"
    //     />
    //     {/* <img src={Cover} alt="portfolio" className="hero-img-svg" /> */}
    //   </section>
    // </header>
    // <header className="absolute z-0 bg-gradient-to-r from-green-300 via-white mt-n20 w-screen h-screen ">
    //   <section className="h-full items-center mx-auto w-full">
    //     <div className="flex h-full">
    //       <div className="h-full w-1/2 ">
    //         <div>
    //           <div className="underline"></div>
    //           <h1>i'm john</h1>
    //           <h4>freelance web and mobile UI/UX Designer</h4>
    //           <button type="button" to="/contact" className="btn">
    //             contact me
    //           </button>
    //         </div>
    //       </div>
    //       <div className="relative z-10 h-full">
    //         <img
    //           src={Cover}
    //           alt="portfolio"
    //           className=" h-full bg-transparent"
    //           placeholder="blurred"
    //         />
    //       </div>
    //     </div>
    //     {/* <img src={Cover} alt="svg" className="svg-img" /> */}
    //   </section>
    // </header>
    <header className="absolute z-0 w-screen h-screen">
      <div className="bg-gradient-to-r from-green-300 via-white h-full">
        <div className="h-full items-center mx-auto max-w-screen-lg flex">
          <div className="w-1/2">
            <div>
              <div className="underline"></div>
              <h1>i'm john</h1>
              <h4>freelance web and mobile UI/UX Designer</h4>
              <button type="button" to="/contact" className="btn">
                contact me
              </button>
            </div>
          </div>
          <div className="relative z-10 my-4">
            <img
              src={Cover}
              alt="portfolio"
              className="my-4"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
