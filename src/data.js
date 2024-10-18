import frontend from './icons/frontend.svg'
import backend from "./icons/backend.svg";
import tools from "./icons/tools.svg";
import softskills from "./icons/softskills.svg";


export const SKILLS = [
  {
    title: "Frontend",
    icon: frontend,
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "90%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React.js", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: backend,
    skills: [
      { skill: "Node.js", percentage: "65%" },
      { skill: "PostgreSQL", percentage: "90%" },
    ],
  },
  {
    title: "Tools",
    icon: tools,
    skills: [
      { skill: "Git & Github", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "90%" },
      { skill: "Webpack", percentage: "60%" },
      { skill: "Responsive Design", percentage: "75%" },
    ],
  },
  {
    title: "Soft skills",
    icon: softskills,
    skills: [
      { skill: "Problem-solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
    ],
  },
];