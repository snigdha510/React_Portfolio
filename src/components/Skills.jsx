import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";

import java from "../assets/java.png";
import python from "../assets/python.png";


import ps from "../assets/problem solving.png";
import comm from "../assets/communication.png";
import leadership from "../assets/ll.png";
import node from "../assets/node.png"
import gd from "../assets/google drive.png"


const Skills = () => {
  const technicalSkills = [
    {
      id: 1,
      src: java,
      title: "JAVA",
      style: "shadow-sky-400",
    },
    {
      id: 2,
      src: python,
      title: "PYTHON",
      style: "shadow-sky-400",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: node,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: gd,
      title: "Google Drive",
      style: "shadow-yellow-400",
    }
  ];

  const softSkills = [
    {
      id: 10,
      src: leadership,
      title: "Leadership",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: comm,
      title: "Communication",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: ps,
      title: "Problem Solving",
      style: "shadow-blue-400",
    }
    
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-16"
    ><div className="max-w-screen-lg p-4 mx-auto">
    <div className="pb-8">
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        Skills
      </p>
      <p className="text-xl mt-6">
        These are the technologies I have worked with
      </p>
    </div>

        {/* Technical Skills */}
        <div className="w-full py-4">
          <p className="text-2xl font-semibold mb-4">Technical Skills</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {technicalSkills.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="w-full py-4">
          <p className="text-2xl font-semibold mb-4">Soft Skills</p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {softSkills.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
