import { DiMysql } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
// img for projects
import collegeSite from "../assets/images/collegeSite.png";
import bookSite from "../assets/images/bookSite.png";
import surveySite from "../assets/images/surveySite.png";
import frenchSite from "../assets/images/frenchSite.png";
import firstStageSite from "../assets/images/firstStageSite.png";
import dirsatgateSite from "../assets/images/dirsatgateSite.png";

export const skills = [
  {
    title: "html",
    icon: <FaHtml5 className="text-red-500" />,
  },
  {
    title: "CSS",
    icon: <DiCss3 className="text-sky-600" />,
  },
  {
    title: "JavaScript",
    icon: <DiJavascript1 className="text-yellow-400" />,
  },
  {
    title: "React",
    icon: <DiReact className="text-sky-500" />,
  },
  {
    title: "Git",
    icon: <DiGit className="text-rose-500" />,
  },
  {
    title: "my sql",
    icon: <DiMysql className="text-cyan-500" />,
  },
  {
    title: "Node",
    icon: <DiNodejsSmall className="text-green-500" />,
  },

  {
    title: "Tailwindcss",
    icon: <BiLogoTailwindCss className="text-cyan-500" />,
  },
  {
    title: "typescript",
    icon: <BiLogoTypescript className="text-blue-600" />,
  },
];

export const projects = [
  {
    title: "college Site",
    description:
      "a website i made with react-router-dom and redux, it was requested by my department head in my college after seeing the first Stage website",
    img: collegeSite,
    link: "https://english-section.netlify.app/",
  },
  {
    title: "book Site",
    description:
      "a website for books, it had potentials but i was too beginner to apply the ideas i had ",
    img: bookSite,
    link: "https://iraqibookshopapp.netlify.app/",
  },
  {
    title: "survey Site",
    description:
      "a full stack website with database and backend, which i made after being inspired by the Schwartz Outcome Scale",
    img: surveySite,
    link: "https://sos-10-survey.netlify.app/",
  },
  {
    title: "French exam",
    description: "a site i made to help my classmate with our french exam",
    img: frenchSite,
    link: "https://frenchfirstexam.netlify.app/",
  },
  {
    title: "dirsatgate wallmart version",
    description: "a failed attempt to remake dirsatgate",
    img: dirsatgateSite,
    link: "https://murtaza01.github.io/dirsatgateApp/",
  },
  {
    title: "First stage ",
    description:
      "a site that has all the books and grades of the first stage of my department,which i made to my classmates in my college ",
    img: firstStageSite,
    link: "https://murtaza01.github.io/firstStageApp/",
  },
];
