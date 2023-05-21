import Madlibs from "../assets/Images/Madlibs.PNG";
import Hangman from "../assets/Images/Hangman.PNG";
import Movie from "../assets/Images/Movie.PNG";
import Foodorder from "../assets/Images/Foodorder.PNG";
import Therapist from "../assets/Images/Therapist.PNG";

const ProjectsData = [
  {
    id: 1,
    name: "Online Therapist",
    technologies: "HTML, TailwindCSS, Reactjs, Redux Toolkit, Firebase.",
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
      "HTML, TailwindCSS, Reactjs, Redux toolkit, Firebase, Leaflet Library.",
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
    technologies: "HTML, CSS, Reactjs, Firebase.",
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
      "This project allows us to fetch the newest movies and actors from the Movie Database API (TMDB) which is a community-built movie and TV DB. In addition, we can filter the movies or actors and search for them. Also, we can reach the details of each movie and actor. ",
    image: Movie,
    info: "I built this website with a team, we were four working on this project, I took the movies part with by fetching it from the API and I made the details movies pages. I learned how to use Vanilla JavaScript, how to fetch data from API and how to use Bootstrap. In addition, I led my team through one week of project. By working with a team, it increased my potential for innovation.",
    code: "https://github.com/Recoded-Spark-Turkey-2022/movie-project-cinemadev",
    demo: "https://dreamy-crisp-010301.netlify.app",
  },

  {
    id: 5,
    name: "Hangman Game",
    technologies: "HTML, Vanilla JavaScript.",
    description: "This project about the famous Hangman game.",
    image: Hangman,
    info: "I built this website with a team, we were three working on this project. We built the project together using Vanilla JavaScript with simple styling to practice more on JavaScript. I learned how to use Vanilla JavaScript. By working with a team, I gained the teamwork and communication skills.",
    code: "https://github.com/naji-alhusami/hangman-executioner",
    demo: "https://dashing-kashata-d04ee6.netlify.app",
  },
  {
    id: 6,
    name: "Madlibs",
    technologies: "HTML, CSS, Vanilla JavaScript, Regular Expressions.",
    description:
      "The Mad Libs is a phrasal template word game. The project has two articles that allow us to fill in one of them and it will fill the second article automatically.",
    image: Madlibs,
    info: "I built this website with a team, we were three working on this project. We built the project together using Vanilla JavaScript with CSS to practice on JavaScript. I learned how to use Vanilla JavaScript. By working with a team, I gained the teamwork and communication skills.",
    code: "https://github.com/naji-alhusami/mad-libs-lorem-ipsum",
    demo: "https://polite-bunny-029d94.netlify.app",
  },
];

export default ProjectsData;
