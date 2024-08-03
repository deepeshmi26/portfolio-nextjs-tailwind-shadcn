import React from "react";
import ExperienceCard from "./ui/Cards/ExperienceCard";
import { TimelineContainer, TimelineItem } from "./ui/Timeline";
type Props = {};

const CareerTimeline = (props: Props) => {
  return (
    <div id="experience" className="container bg-white flex flex-col py-6">
      <div className="border-b-2">
        <h1 className="font-semibold  text-xl">Professional timeline</h1>
        <div className="container mx-auto p-4">
          <TimelineContainer>
            {experiences.map((experience, index) => (
              <TimelineItem key={index} className="">
                <ExperienceCard
                  img={experience.img}
                  title={experience.title}
                  company={experience.company}
                  period={experience.period}
                  description={experience.description}
                />
              </TimelineItem>
            ))}
          </TimelineContainer>
        </div>
      </div>
    </div>
  );
};

const experiences = [
  {
    img: "/zoomcar.jpeg",
    title: "Lead Software engineer",
    company: "Zoomcar India Pvt Ltd",
    period: "2023 - Present",
    location: "Bangalore, India",
    description:
      "- Leading a team of 8 engineers in designing, developing, and deploying scalable data-driven solutions. <br>- Performed comprehensive code reviews and led weekly coding standards sessions, establishing best practices that increased team code quality by 20% and provided mentorship to team members. <br>- Collaborated with product managers and cross-functional teams to refine user stories and requirements, aligning technical solutions with business strategies and user needs, resulting in a 15% increase in development velocity and successful sprints.<br> - Presented technical proposals and progress reports to stakeholders, facilitating informed decision- making at all levels of the organization.",
  },
  {
    img: "/zoomcar.jpeg",
    title: "Senior Software Engineer",
    company: "Zoomcar Pvt Ltd",
    period: "2022 - 2023",
    location: "Bangalore, India",
    description:
      "- Design, architected & implemented host price recommendation product attaining 80% adoption of recommended price, while preserving seller pricing autonomy. Deployed a new model using Event-Driven Architecture (EDA) to enhance Host Platform Rating, resulting in a 12% reduction in disputes and an 18% improvement in car quality<br> - Replaced upfront deposits with dynamic insurance through choice modeling, driving pattern analysis, and risky cohort identification<br> - Achieved and maintained a 99.9% availability rate<br> - Orchestrated a real-time personalized car recommendation engine on the search page using RESTful APIs, improving average booking rank by 20%.",
  },
  {
    img: "/zoomcar.jpeg",
    title: "Software Engineer",
    company: "Zoomcar Pvt Ltd",
    period: "2021 - 2022",
    location: "Bangalore, India",
    description:
      "- Successfully migrated services from EC2 to EKS cluster using Docker, Lambda, and serverless architecture in AWS, significantly enhancing scalability and operational efficiency<br> - Implemented an IoT-driven drive score product with event-driven architecture, reducing accidents by 20% and maintenance costs by 23%<br> - Ensured high throughput and real-time score updates via app notifications, efficiently handling high-frequency IoT data<br> - Engineered MVP features and optimized the driver-score architecture using microservices, creating a usage-based automotive insurance product for partners.",
  },
  {
    img: "/karza.jpeg",
    title: "Software Engineer",
    company: "Karza Technologies Pvt Ltd",
    period: "2020 - 2021",
    location: "Mumbai, India",
    description:
      "- Engineered FinTech products enabling financial institutions to track stock exchange data, monitor application status across portals, detect fraud, process digital identities, and perform custom onboarding, address, and employment verification.<br> - Developed optimised, low-latency code for efficient data extraction, storage, processing, and exposure through scalable APIs.<br> - Contributed in internal frameworks to speed up the development and lower the operational costs.",
  },
  {
    img: "/wipro.webp",
    title: "Software Engineer",
    company: "Wipro Digital",
    period: "2018 - 2020",
    location: "Hyderabad, India",
    description:
      "- Worked onshore at Uber Hyderabad, supporting various teams by creating tools and automating processes to enhance efficiency and accelerate operations<br> - Designed and coded application components in an Agile-driven environment using Test-Driven Development (TDD) methodology<br> - Developed integration solutions with internal and external services for prototyping and performance measurement.",
  },
];
export default CareerTimeline;
