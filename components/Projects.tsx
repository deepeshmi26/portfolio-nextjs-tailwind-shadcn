import React from "react";
import ProjectCard from "./ui/Cards/ProjectCard";
import Section from "./Section";

type Props = {};

const Projects = (props: Props) => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          img="/male_avatar.avif"
          title="Movie cloud"
          company="Layers"
          period="May 2020 - Present"
          description="Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum"
        />
        <ProjectCard
          img="/male_avatar.avif"
          title="Product Designer"
          company="Sispyhus"
          period="Jan 2018 - May 2020"
          description="Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum"
        />
        <ProjectCard
          img="/male_avatar.avif"
          title="UX Designer"
          company="Catalog"
          period="Mar 2017 - Jan 2018"
          description="Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum"
        />
        <ProjectCard
          img="/male_avatar.avif"
          title="Visual Designer"
          company="Quotient"
          period="Apr 2015 - Mar 2017"
          description="Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum Loren Iposum"
        />
      </div>
    </Section>
  );
};

export default Projects;
