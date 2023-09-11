import React from "react";
import barclaysLogo from "../assets/portfolio/barclays.png";


const WorkExperience = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white overflow-hidden">
  <div className="max-w-screen-lg mx-auto p-4 h-full flex flex-col justify-center overflow-y-auto">
    
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work Experience
          </p>
        </div>
        <div className="flex items-center mb-4">
          <img
            src={barclaysLogo}
            alt="Barclays Logo"
            className="w-48 h-32 mr-4 shadow-white hover:scale-105 duration-500 py-2 rounded-lg"
          />
          <div>
            <p className="font-bold text-lg">Summer Intern at Barclays</p>
            <p className="text-gray-600">June 2023 - August 2023</p>
          </div>
        </div>

        
        <p className="text-xl mt-20">
        During my tenure as a Product Technology Intern at Barclays, I had the privilege of being part of the esteemed BUK Technology team, 
        an experience that endowed me with invaluable insights into the realm of cutting-edge technology solutions. Working within this 
        dynamic environment exposed me to a diverse set of technologies, with Java, Java Spring Framework, Spring Boot, Spring Batch, APIs, 
        and REST APIs forming the cornerstone of my learning journey. This exposure proved instrumental in equipping me with a solid 
        foundation in modern software development paradigms, enabling me to create robust and efficient applications.
        </p>
        <p className="text-xl mt-20">
        One of the highlights of my internship was the opportunity to delve into the intricacies of backend technologies. As I collaborated 
        closely with MySQL, I was able to not only grasp the complexities of database management but also deepen my understanding of 
        backend architecture. This hands-on experience laid the groundwork for my proficiency in managing data and crafting backend 
        solutions that are both secure and scalable. Engaging with these technologies allowed me to see the practical application of 
        concepts learned in an academic setting, bridging the gap between theory and real-world implementation.
        </p>
        <p className="text-xl mt-20">
        In addition to enhancing my technical prowess, the internship fostered the development of my soft skills, which are indispensable 
        in the professional landscape. The experience was a crucible for honing my problem-solving abilities; each day presented unique 
        challenges that demanded creative and effective solutions. Moreover, I was immersed in a team-driven environment, allowing me to 
        cultivate essential teamwork and communication skills. Collaborating with colleagues on intricate technical challenges underscored 
        the significance of clear communication, effective delegation, and collective problem-solving in achieving optimal outcomes.
        </p>
        <p className="text-xl mt-20">
        The internship experience at Barclays was nothing short of transformative. I embraced the dynamic nature of the work environment, 
        where adaptability was key, and my ability to learn quickly was constantly put to the test. This fast-paced atmosphere not only 
        enriched my technical proficiency but also nurtured a proactive approach to innovation. My contributions were not confined to 
        technical domains alone; I actively contributed to the team's success by embracing diverse responsibilities and demonstrating 
        an unwavering commitment to our collective goals. This immersive experience reaffirmed my passion for technology and my aspiration 
        to continue contributing to the evolution of digital solutions in meaningful ways.
        </p> 
        
      </div>
    </div>
  );
};

export default WorkExperience;
