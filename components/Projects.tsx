import React from "react";
import ProjectCard from "./ui/Cards/ProjectCard";
import Section from "./Section";

type Props = {};

const ProjectsList = [
  {
    img: "/moviecloud.png",
    title: "Movie cloud",
    company: "Layers",
    period: "May 2020 - Present",
    link: "https://github.com/dhanendraverma/MovieCloud",
    description: "A website to give you better insights on latest movies",
  },
  {
    img: "/testcircle.png",
    title: "Text circle",
    company: "Layers",
    period: "May 2020 - Present",
    link: "https://github.com/dhanendraverma/TextCircle",
    description:
      "A collaborative text editor which allows the users to simultaneously edit and see the docs and codes.",
  },
  {
    img: "/jsonlogo.png",
    title: "Albums share",
    company: "Layers",
    period: "May 2020 - Present",
    link: "https://github.com/dhanendraverma/AlbumsShare",
    description:
      "A web app to share the photos with the backend complex functionalities implemented using meteor.js framework",
  },
  {
    img: "/song.png",
    title: "SongShore",
    company: "Layers",
    period: "May 2020 - Present",
    link: "https://github.com/dhanendraverma/SongShore",
    description:
      "A web application to store all of your favorite songs on Cloud and play from there.",
  },
];
const Projects = (props: Props) => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {ProjectsList.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
