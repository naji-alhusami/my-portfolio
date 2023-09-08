import Madlibs from "../assets/Images/Madlibs.PNG";
import Hangman from "../assets/Images/Hangman.PNG";
import Movie from "../assets/Images/Movie.PNG";
import Foodorder from "../assets/Images/Foodorder.PNG";
import Therapist from "../assets/Images/Therapist.PNG";
import Iconic from "../assets/Images/Iconic.PNG";

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
    demo: "https://onlinetherapist.netlify.app/",
  },
  {
    id: 2,
    name: "Iconic Places (Istanbul)",
    technologies:
      "HTML, TailwindCSS, React.js, Redux toolkit, Firebase, Leaflet Library, Nominatim API",
    description:
      "Iconic Places (Istanbul) is a user-friendly app that allows people to discover and share the most beautiful spots in the city. Users can sign up to add their favorite places, enabling others to explore and visit these locations without the need for logging in.",
    image: Iconic,
    info: "- Applied the insights and guidance from the Firebase documentation. || - Implemented Leaflet, an interactive mapping library, to deliver dynamic and customizable map functionalities. || - Demonstrated strong problem-solving skills. || - Developed the application from scratch as a sole contributor.",
    code: "https://github.com/naji-alhusami/iconic-istanbul-app",
    demo: "https://iconic-istanbul-app.netlify.app/",
  },
  {
    id: 3,
    name: "Tennis Club App",
    technologies: "HTML, CSS, Next.js, Next-Auth, API Routes, MongoDB.",
    description:
      "Tennis Club: An app for users to sign up/login, book courts, find playing partners, access training sessions, and exploretennis-related blogs.",
    // image: Foodorder,
    info: "Ongoing Project",
    // info: "- Conducted thorough testing and debugging to deliver a stable and error-free application. || - Demonstrated strong problem-solving skills. || - Developed the application from scratch as a sole contributor, handling all aspects of the single project.",
    code: "",
    demo: "",
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
