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
      <PorfolioHeader />
      <UserProfile />
      <Section id="about-me" title="About me">
        <div className="flex flex-col gap-2">
          <p>
            I'm a Product Designer based in Melbourne, Australia. I specialise
            in UX/UI design, brand strategy, and Webflow development. I'm always
            striving to grow and learn something new and I don't take myself too
            seriously.
          </p>
          <div className="bg-purple-50 text-purple-600 p-4 flex flex-row flex-wrap gap-4 justify-between">
            <div className="">
              <div className="text-sm">College</div>
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
      <Projects />
      <CareerTimeline />

      <Skills />
    </main>
  );
};

export default HomePage;
