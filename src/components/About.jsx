import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm Snigdha Parashar, a Computer Science major with a focus on Artificial Intelligence and Machine Learning. 
        Currently pursuing my degree at the University of Petroleum and Energy Studies, I'm enthusiastic about leveraging my coding skills 
        and AI expertise to make meaningful contributions. With a solid academic record and a blend of technical and soft skills, 
        I'm dedicated to driving innovation and success in the tech world.
        </p>

        <br />

        <p className="text-xl">
        Proficient in languages such as JAVA, Python, and JavaScript, I have hands-on experience with tools like Git, MySQL, and MongoDB.
        My coursework, including Operating Systems, Data Structures, and Machine Learning, has prepared me to tackle real-world challenges.
        During my summer internship at Barclays, I utilized JAVA, Spring Framework, and more to contribute effectively to the BUK Technology 
        team. I've embarked on projects spanning sentiment analysis, AI-powered image creation, and more, showcasing my commitment to 
        innovative solutions.
        </p>

        <br />

        <p className="text-xl">
        My journey is marked by achievements such as being recognized as a Finalist in the "Present Around the Network" competition and 
        winning the OPEN Summer of Code challenge. I've also taken on leadership roles, such as Vice President of the OPEN Community, UPES, 
        and have actively contributed to open-source projects. With a merit-based scholarship from the university and a proven track record
        of academic excellence, I'm driven to excel in both learning and contributing to the tech landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
