import Madlibs from "../assets/Images/Madlibs.PNG";
import Hangman from "../assets/Images/Hangman.PNG";
import Movie from "../assets/Images/Movie.PNG";
import Foodorder from "../assets/Images/Foodorder.PNG";
import Therapist from "../assets/Images/Therapist.PNG";

const ProjectsData = [
  {
    id: 1,
    name: "Online Therapist",
    technologies: "HTML, TailwindCSS, React.js, Redux Toolkit, Firebase.",
    description:
      "Online Therapist project allows users to signup/login to take an appointment with a therapist and buy therapy sessions. ",
    image: Therapist,
    info: "- Worked with Figma design tools to translate design concepts into functional user interfaces. || - Member of the Re-coded graduation project team, specifically responsible for the Redux toolkit implementation. || - Led the team for whole project duration. || - Conducted daily meetings with team members to discuss progress and coordinate efforts. || - Facilitated weekly meetings with our senior developers in Re-Coded to seek guidance. || - Took charge of the presentation for our team project, showcasing the key features, functionalities to our trainers.",
    code: "https://github.com/naji-alhusami/Online-Therapist",
    demo: "https://code-wars.netlify.app/",
  },
  {
    id: 2,
    name: "Health Centers",
    technologies:
      "HTML, TailwindCSS, React.js, Redux toolkit, Firebase, Leaflet Library.",
    description:
      "The Health Centers Application enables users to conveniently sign up or log in using their email or Google accounts. It offers the ability to add or remove health centers to a map and table. Additionally, the map showcasing all the health centers is accessible to the public without requiring a login.",
    image: Therapist,
    info: "- Applied the insights and guidance from the Firebase documentation. || - Implemented Leaflet, an interactive mapping library, to deliver dynamic and customizable map functionalities. || - The Health Centers Application showcases my expertise in creating intuitive and interactive interfaces while addressing the specific needs of users in the healthcare sector.",
    code: "https://github.com/naji-alhusami/health-center-app",
    demo: "https://health-centers-app.netlify.app/",
  },
  {
    id: 3,
    name: "Online Food Order",
    technologies: "HTML, CSS, React.js, Firebase.",
    description:
      "The online food ordering application is designed to streamline the process of ordering food through a website. Users can select the desire items from the menu, add them to the cart,  proceed to place an order and pay with card.",
    image: Foodorder,
    info: "- Conducted thorough testing and debugging to deliver a stable and error-free application. || - Demonstrated strong problem-solving skills. || - Developed the application from scratch as a sole contributor, handling all aspects of the single project.",
    code: "https://github.com/naji-alhusami/food-order-project",
    demo: "https://online-food-order-reactjs.netlify.app",
  },
  {
    id: 4,
    name: "Movie Project",
    technologies:
      "HTML, CSS, Bootstrap, Vanilla JavaScript, Movie Database API.",
    description:
      "This project allows us to search for the newest Movies and actors from Movie Database (TMDB) which is a community-built movie and TV DB.",
    image: Movie,
    info: "- Practiced DOM manipulation and 3rd party APIs. || - led my team, assigned tasks and responsibilities to each team member.",
    code: "https://github.com/Recoded-Spark-Turkey-2022/movie-project-cinemadev",
    demo: "https://dreamy-crisp-010301.netlify.app",
  },

  {
    id: 5,
    name: "Hangman Game",
    technologies: "HTML, Vanilla JavaScript.",
    description: "This project about the famous Hangman game.",
    image: Hangman,
    info: "- led my team, assigned tasks and responsibilities to each team member. || - Project built using Vanilla JavaScript with simple styling to practice on Vanilla JavaScript.",
    code: "https://github.com/naji-alhusami/hangman-executioner",
    demo: "https://dashing-kashata-d04ee6.netlify.app",
  },
  {
    id: 6,
    name: "Madlibs",
    technologies: "HTML, CSS, Vanilla JavaScript, Regular Expressions.",
    description:
      "The Mad Libs project is a phrasal template word game that involves two articles. One article allows users to fill in the blanks, and based on their input, the second article is automatically filled.",
    image: Madlibs,
    info: "- led my team, assigned tasks and responsibilities to each team member.",
    code: "https://github.com/naji-alhusami/mad-libs-lorem-ipsum",
    demo: "https://polite-bunny-029d94.netlify.app",
  },
];

export default ProjectsData;
