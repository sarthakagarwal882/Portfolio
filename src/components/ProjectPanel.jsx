import React from "react";
import bandhejhub from "../assets/bandhejhub.png";
import GithubIcom from "../assets/github.svg";
import WebsiteIcom from "../assets/website.svg";

function ProjectPanel() {
  const Projects = [
    {
      title: "Bandhej Hub",
      description:
        "Bandhej Hub is an ecommerce platform specializing in bandhani products Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi",
      github: "http://localhost:3000/Project",
      live: "http://localhost:3000/Project",
    },
    {
      title: "Bandhej Hub",
      description:
        "Bandhej Hub is an ecommerce platform specializing in bandhani products Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi",
      github: "http://localhost:3000/Project",
      live: "http://localhost:3000/Project",
    },
    {
      title: "Bandhej Hub",
      description:
        "Bandhej Hub is an ecommerce platform specializing in bandhani products Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi",
      github: "http://localhost:3000/Project",
      live: "http://localhost:3000/Project",
    },
    {
      title: "Bandhej Hub",
      description:
        "Bandhej Hub is an ecommerce platform specializing in bandhani products Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi",
      github: "http://localhost:3000/Project",
      live: "http://localhost:3000/Project",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-12 md:px-24 lg:px-32 bg-backgroundColor py-16 pb-32">
      <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl text-center">
        My Projects
      </h1>
      <p className="text-center text-textWhiteColor pt-2 text-sm sm:text-base">
        This collection showcases projects highlighting skills and expertise applied in real-world scenarios.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
        {Projects.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPanel;

const ProjectCard = ({ project }) => {
  return (
    <div className="border-2 border-textWhiteColor p-4 shadow-md w-full max-w-[350px] rounded-xl flex flex-col items-center">
      {/* Image */}
      <img src={bandhejhub} className="w-full h-48 object-cover rounded-md" alt="Project" />
      
      {/* Project Details */}
      <div className="p-4 flex flex-col items-center">
        <h5 className="font-bold text-2xl text-white">{project.title}</h5>
        <p className="text-base text-textWhiteColor pt-2 text-center">
          {project.description}
        </p>
        {/* Icon Links */}
        <div className="flex gap-4 mt-4">
          <a href={project.github}>
            <img src={GithubIcom} alt="GitHub" className="w-6 h-6" />
          </a>
          <a href={project.live}>
            <img src={WebsiteIcom} alt="Website" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};
