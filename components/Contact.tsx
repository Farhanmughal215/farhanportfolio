import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let’s Build Something Amazing Together!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
        I’m excited to collaborate on projects that combine web development, AI solutions, & digital marketing to elevate your online presence. Let’s connect to bring your ideas to life and tackle any design or tech challenges together!
        </p>
        <a href="https://wa.me/+923456703492">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
            Say Hello
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/Farhanmughal215" />
        <SocialLink title="Fiverr" link="https://www.fiverr.com/farhanzafar215" />
        <SocialLink
          title="Upwork"
          link="https://www.upwork.com/freelancers/~011257483ccccab429?mp_source=share"
        />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/farhanzafartech/"
        />
       
        <SocialLink title="Resume" link="https://drive.google.com/file/d/1mH2V7fwuYwjRFiNyJ8pwffiDAe-_wkf7/view?usp=sharing" />
      </div>
    </div>
  );
};

export default Contact;
