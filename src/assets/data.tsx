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
    description: "all the site i have did a  wdwdw w dwd wdwdwa",
    img: collegeSite,
    link: "https://english-section.netlify.app/",
  },
  {
    title: "book Site",
    description: "all the site i have did a  wdwdw w dwd wdwdwa",
    img: bookSite,
    link: "https://iraqibookshopapp.netlify.app/",
  },
  {
    title: "survey Site",
    description: "all the site i have did a  wdwdw w dwd wdwdwa",
    img: surveySite,
    link: "https://sos-10-survey.netlify.app/",
  },
  {
    title: "French exam",
    description: "all the site i have did a  wdwdw w dwd wdwdwa",
    img: frenchSite,
    link: "https://frenchfirstexam.netlify.app/",
  },
  {
    title: "First stage ",
    description: "all the site i have did a  wdwdw w dwd wdwdwa",
    img: firstStageSite,
    link: "https://murtaza01.github.io/firstStageApp/",
  },
  {
    title: "dirsatgate 2 ",
    description: "all the site i have did a  wdwdw w dwd wdwdwa",
    img: dirsatgateSite,
    link: "https://murtaza01.github.io/dirsatgateApp/",
  },
];
