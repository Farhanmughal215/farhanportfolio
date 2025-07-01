import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Fiverr"
          subTitle="WordPress Developer 2018 - Present"
          icon={<SiFiverr />}
        />
        <ExperienceCard
          title="Upwork"
          subTitle="Web Developer 2020 - present"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="WordPress & SEO 2020 - 2024"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Evola Labs"
          subTitle="Lead Web Developer 2021 - Present"
          icon={<SiReactivex />}
        />
      </div>
    </div>
  );
};

export default Experience;
