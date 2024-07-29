import { FC } from "react";
import PorfolioHeader from "../components/PortfolioHeader";
import Section from "../components/Section";
import UserProfile from "@/components/UserProfile";
import CareerTimeline from "@/components/CareerTimeline";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";

const HomePage: FC = () => {
  return (
    <main>
      <UserProfile />
      <Section id="about-me" title="About me">
        <div className="flex flex-col gap-2 ">
          <p className="">
            I am Dhanendra Verma, a <b>Lead Software Engineer</b> skilled in
            <b> Python, C++, and cloud platforms like AWS</b>. I excel in
            leading teams to deliver scalable solutions, with experience at
            <b> Zoomcar, Wipro Digital, and Karza Technologies</b>.
          </p>
          <p>
            Known for my{" "}
            <b>
              collaborative spirit, mentorship, and problem-solving abilities
            </b>
            , I align technical solutions with business goals to achieve
            high-quality results.
          </p>
          <div className="bg-purple-50 text-purple-600 p-4 flex flex-row flex-wrap gap-4 justify-between">
            <div className="">
              <div className="text-sm">University</div>
              <div className="font-semibold">NIT Raipur</div>
            </div>
            <div className="">
              <div className="text-sm">Location</div>
              <div className="font-semibold">Bengaluru</div>
            </div>
            <div className="">
              <div className="text-sm">Email</div>
              <div className="font-semibold">dhanendra.verma@gmail.com</div>
            </div>
            <div className="">
              <div className="text-sm">Contact</div>
              <div className="font-semibold">7999393939</div>
            </div>
          </div>
        </div>
      </Section>
      <CareerTimeline />
      <Skills />
      <Projects />
    </main>
  );
};

export default HomePage;
