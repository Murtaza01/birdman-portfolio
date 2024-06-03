import { DiMysql } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";

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
