import Heading from "../components/Heading";
import avatar from "../assets/images/murtaza.jpg";
// import { SiCoinmarketcap } from "react-icons/si";
const About = () => {
  return (
    <section id="about" className="pb-10">
      <Heading head="About Me">
        My name is murtaza, i am a passionate developer who spent the last few
        years learning programming, im still and will always be in the path of
        learning
      </Heading>
      <picture className=" ">
        <img
          src={avatar}
          alt=""
          className="rounded-full border-2 border-gold mx-auto w-40"
        />
        <p className="text-center  capitalize">this is me</p>
      </picture>
    </section>
  );
};

export default About;
