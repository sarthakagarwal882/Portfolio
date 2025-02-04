import React from "react";
import WebsiteIcom from "../assets/website.svg";

function ProjectPanel() {
  const Projects = [
    {
      title: "Hobbycue",
      description:
        "I built the website for HobbyCue, a platform that connects people through shared hobbies. Users can explore activities, join communities, and engage with others who share similar passions.",
      live: "https://hobbycue.com",
      image: "/hobbycue.png",
    },
    {
      title: "Smugy Coin",
      description:
        "I developed the promotional website for SmugyCoin, a fast, secure, and community-driven cryptocurrency, showcasing its features, roadmap, and seamless wallet integration.",
      live: "https://smugy.vercel.app/",
      image: "/smugy.png",
    },
    {
      title: "Proacademy",
      description:
        "I developed the promotional website for ProAcademy, an e-learning platform for gamers to purchase courses from top coaches, book 1:1 live sessions, and access expert guides to enhance their skills.",
      live: "https://proacademy.vercel.app",
      image: "/proacademy.png",
    },
    {
      title: "University Website",
      description:
        "I developed the website for the School of Engineering at JNU, showcasing their B.Tech program, faculty, and events. It also provides essential information about admissions and academic resources for prospective students.",
      live: "https://soe-jnu.vercel.app/",
      image: "/soe-jnu.png",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-12 md:px-24 lg:px-32 bg-backgroundColor py-16">
      <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl text-center">
        My Projects
      </h1>
      <p className="text-center text-textWhiteColor pt-2 px-2 text-sm sm:text-base mt-2">
        This collection showcases projects highlighting skills and expertise
        applied in real-world scenarios.
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
      <img
        loading="lazy"
        src={project.image}
        className="w-full h-48 object-cover rounded-md"
        alt="Project"
      />

      {/* Project Details */}
      <div className="py-4 flex flex-col items-center justify-between h-[270px] xl:h-[330px]">
        <div>
          <h5 className="font-bold text-2xl text-white text-center">
            {project.title}
          </h5>
          <p className="text-base text-textWhiteColor pt-3 text-center">
            {project.description}
          </p>
        </div>
        {/* Icon Links */}
        <div className="flex gap-4 mt-4">
          <a href={project.live} target="_blank" rel="noreferrer">
            <img
              loading="lazy"
              src={WebsiteIcom}
              alt="Website"
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
