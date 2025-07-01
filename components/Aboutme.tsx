import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        I graduated with a Bachelor's degree in Information Technology, achieving a 3.56 CGPA. With over 7 years of experience as a Web Developer and AI Specialist, I have developed a strong foundation in web development, WordPress, SEO, and AI-driven automation. My focus is on creating responsive websites and implementing digital solutions that enhance user experience and optimize business processes. Throughout my career, I’ve successfully delivered various projects, from custom website designs to digital marketing campaigns, always aiming to provide measurable results. I’m also a strong problem-solver and a collaborative team player, committed to staying up-to-date with the latest industry trends and technologies.
        </p>
        <p>
        I’m passionate about harnessing the power of technology to drive business growth and enhance user experiences. I look forward to continuing to innovate and build impactful solutions that help businesses succeed in a digital world.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
