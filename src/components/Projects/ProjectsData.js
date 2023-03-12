import Madlibs from "../Images/Madlibs.PNG";
import Hangman from "../Images/Hangman.PNG";
import Movie from "../Images/Movie.PNG";
import Foodorder from "../Images/Foodorder.PNG";
import Therapist from "../Images/Therapist.PNG";

const ProjectsData = [
  {
    id: 1,
    name: "Online Therapist",
    technologies: "HTML, TailwindCSS, Reactjs, Redux toolkit, Firebase.",
    description:
      "This project will allow users to schedule an appointment with a therapist and take therapy sessions online through chat, video, and voice calls. Users can search for information on the website, and also there will be tests or therapist activities for users. ",
    image: Therapist,
    info: "I built this website with a team, we were three working on this project, I took React Redux toolkit part which includes login user with sign up and update information after signup. I learned how to use Redux toolkit which was the most important part, and how to use Tailwind. In addition, I led my team for two weeks out of 8 weeks working on this project. By working with a team, I was allowed to take smarter risk.",
    code: "https://github.com/Recoded-Spark-Turkey-2022/Code-Wars-Capstone",
    demo: "https://code-wars.netlify.app/",
  },
  {
    id: 2,
    name: "Online Food Order",
    technologies: "HTML, CSS, Reactjs, Firebase.",
    description: "This project allows us to order food online after choosing the restaurants, it allows us to add the quantity ofeach item to the final basket. In addition it allows us to send our order to the backend (Firebase). ",
    image: Foodorder,
    info: "I built this website on my own, I learned a lot of things like reactjs, reusable components, Firbase (By adding data to Realtime Database and fetching them to my project), In addition, I learned how to send data to Firebase.",
    code: "https://github.com/naji-alhusami/food-order-project",
    demo: "https://online-food-order-reactjs.netlify.app",
  },
  {
    id: 3,
    name: "Movie Project",
    technologies:
      "HTML, CSS, Bootstrap, Vanilla JavaScript, Movie Database API.",
    description: "This project allows us to fetch the newest movies and actors from the Movie Database API (TMDB) which is a community-built movie and TV DB. In addition, we can filter the movies or actors and search for them. Also, we can reach the details of each movie and actor. ",
    image: Movie,
    info: "I built this website with a team, we were four working on this project, I took the movies part with by fetching it from the API and I made the details movies pages. I learned how to use Vanilla JavaScript, how to fetch data from API and how to use Bootstrap. In addition, I led my team throught one week of project. By working with a team, it increased my potential for innovation.",
    code: "https://github.com/Recoded-Spark-Turkey-2022/movie-project-cinemadev",
    demo: "https://dreamy-crisp-010301.netlify.app",
  },
  //   {
  //     id: 4,
  //     name: "JSON Placeholder posts and users",
  //     technologies: "HTML, TailwindCSS, Reactjs, Redux toolkit",
  //     description: "second project",
  //   },
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
    description: "The Mad Libs is a phrasal template word game. The project has two articles that allow us to fill in one of them and it will fill the second article automatically.",
    image: Madlibs,
    info: "I built this website with a team, we were three working on this project. We built the project together using Vanilla JavaScript with CSS to practice on JavaScript. I learned how to use Vanilla JavaScript. By working with a team, I gained the teamwork and communication skills.",
    code: "https://github.com/naji-alhusami/mad-libs-lorem-ipsum",
    demo: "https://polite-bunny-029d94.netlify.app",
  },
];

export default ProjectsData;
