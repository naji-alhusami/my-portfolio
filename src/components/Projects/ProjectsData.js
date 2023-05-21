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
    code: "https://github.com/Recoded-Spark-Turkey-2022/Code-Wars-Capstone",
    demo: "https://code-wars.netlify.app/",
  },
  // {
    // id: 2,
    // name: "Health Centers",
    // technologies:
    // "HTML, TailwindCSS, Reactjs, Redux toolkit, Firebase, Nominatim API (OpenStreetMap).",
    // description: "This project allows users to signup/login using Email and Gmail, the user can add Health Centers to the map and remove it.",
    // image: Therapist,
    // info: "I built this website on my own, I learned a lot of things like reactjs, reusable components, Firbase (By adding data to Realtime Database and fetching them to my project), In addition, I learned how to send data to Firebase.",
    // code: "https://github.com/naji-alhusami/health-center-app",
    // demo: "https://health-centers-app.netlify.app/",
  // },
  {
    id: 3,
    name: "Online Food Order",
    technologies: "HTML, CSS, Reactjs, Firebase.",
    description:
      "This project allows us to order food online after choosing the restaurants, it allows us to add the quantity ofeach item to the final basket. In addition it allows us to send our order to the backend (Firebase). ",
    image: Foodorder,
    info: "I built this website on my own, I learned a lot of things like reactjs, reusable components, Firbase (By adding data to Realtime Database and fetching them to my project), In addition, I learned how to send data to Firebase.",
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
