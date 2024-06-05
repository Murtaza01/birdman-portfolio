import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="center h-28 shadow-lg shadow-black border-t border-gray-800  flex-col gap-4  bg-transparent backdrop-blur-sm "
    >
      <div className=" text-2xl md:text-3xl">
        <ul className="center gap-4 ">
          <li>
            <a
              href="https://www.instagram.com/murtaza_alkabie/"
              target="_blank"
              className="text-red-700 hover:brightness-50"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/murtaza_alkabie"
              target="_blank"
              className="text-sky-500 hover:brightness-50"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Murtaza01"
              target="_blank"
              className="text-slate-900 hover:brightness-50"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <p className=" capitalize md:text-lg">
        all copyRights @ goes to{" "}
        <span className=" font-bold text-gold">Birdman.</span>{" "}
      </p>
    </footer>
  );
}
