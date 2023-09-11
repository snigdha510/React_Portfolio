import React from "react";
import bird from "../assets/portfolio/bird.jpg";
import sentiment_analysis from "../assets/portfolio/sentiment_analysis.jpg";
import promtpai from "../assets/portfolio/promtpai.png";
import chabot from "../assets/portfolio/chabot.jpg.jpg";
import algo from "../assets/portfolio/algo.jpg";
import news from "../assets/portfolio/news.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bird,
      name: "Detection of Bird Species through Audio Using Convolutional Neural Network",
      github: "https://github.com/snigdha510"
    },
    {
      id: 2,
      src: sentiment_analysis,
      name: "Sentiment Analysis of Social Media Data",
      github: "https://github.com/snigdha510/Minor-Project---Sentiment-Analysis"
    },
    {
      id: 3,
      src: promtpai,
      name: "PromptArt: AI-Powered Image Creation Platform",
      github: "https://github.com/snigdha510/IMAGE_GENERATION_MERN"
    },
    {
      id: 4,
      src: chabot,
      name: "OPEN Chatbot",
      github: "https://github.com/upes-open/Open-Chat-Bot"
    },
    {
      id: 5,
      src: algo,
      name: "OPEN Algorithm Visualizer",
      github: "https://github.com/upes-open/Open-Algorithm-Visualizer"
    },
    {
      id: 6,
      src: news,
      name: "NewsBrief: A Customizable and Automated News Aggregator",
      github: "https://github.com/snigdha510/NewsBrief-A-Customizable-and-Automated-News-Aggregator"
    },
  ];

  
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white py-16"
    ><div className="max-w-screen-lg p-4 mx-auto">
    <div className="pb-8">
      <p className="text-4xl font-bold inline border-b-4 border-gray-500">
        Portfolio
      </p>
      <p className="text-xl mt-6">
        Check out some of my work right here
      </p>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
      {portfolios.map(({ id, src, name, github }) => (
        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
          <div className="relative">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 duration-200 hover:scale-105 bg-blue-500 text-white rounded-md text-center"
              >
                Code
              </a>
            </div>
          </div>
          <p className="text-center my-2">{name}</p>
        </div>
      ))}
    </div>
  </div>
</div>
);
};

export default Portfolio;








