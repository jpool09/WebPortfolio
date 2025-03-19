'use client';

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "AI SDK Agent",
    description: "AI Agent Developed with Next.js and the AI SDK by Vercel. The agent is capable of understanding natural language and executing tasks.",
    imageUrl: "/AI-SDK-Image.png",
    tags: ["Next.js", "TypeScript", "OpenAI", "AI SDK"],
    githubUrl: "https://github.com/jpool09/AI-SDK-Agent-Example",
    liveUrl: "",
    category: "AI"
  },
  {
    id: 2,
    title: "AI LangChain Agent",
    description: "An AI-powered tool that generates content for blogs, social media, and marketing materials. Built with Next.js and integrates with OpenAI's GPT API.",
    imageUrl: "/AI-SDK-Image.png",
    tags: ["Next.js", "TypeScript", "OpenAI", "LangChain"],
    githubUrl: "https://github.com/jpool09/LangChain-Agent-Example",
    liveUrl: "",
    category: "AI"
  },
  // {
  //   id: 3,
  //   title: "DeFi Dashboard",
  //   description: "A comprehensive dashboard for tracking DeFi investments across multiple protocols. Shows APY, liquidity, and historical returns.",
  //   imageUrl: "/project3.jpg", // Replace with your actual image
  //   tags: ["Vue.js", "Web3", "DeFi", "Chart.js"],
  //   githubUrl: "https://github.com/yourusername/defi-dashboard",
  //   liveUrl: "https://defi-dashboard-demo.com",
  //   category: "Web3"
  // },
  // {
  //   id: 4,
  //   title: "Voice-Powered Task Manager",
  //   description: "A task management application that uses voice recognition to create, update, and organize tasks. Built with React and uses the Web Speech API.",
  //   imageUrl: "/project4.jpg", // Replace with your actual image
  //   tags: ["React", "AI", "Voice Recognition", "PWA"],
  //   githubUrl: "https://github.com/yourusername/voice-task-manager",
  //   liveUrl: "https://voice-task-manager-demo.com",
  //   category: "AI"
  // },
  // {
  //   id: 5,
  //   title: "Crypto Exchange Interface",
  //   description: "A modern interface for cryptocurrency trading with real-time price updates, order book visualization, and trade history.",
  //   imageUrl: "/project5.jpg", // Replace with your actual image
  //   tags: ["React", "WebSocket", "Redux", "Crypto"],
  //   githubUrl: "https://github.com/yourusername/crypto-exchange",
  //   liveUrl: "https://crypto-exchange-demo.com", 
  //   category: "Web3"
  // },
  // {
  //   id: 6,
  //   title: "Image Recognition App",
  //   description: "A mobile app that can identify objects in photos and provide information about them. Built with React Native and TensorFlow.js.",
  //   imageUrl: "/project6.jpg", // Replace with your actual image
  //   tags: ["React Native", "TensorFlow.js", "AI", "Mobile"],
  //   githubUrl: "https://github.com/yourusername/image-recognition-app",
  //   category: "AI"
  // }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my work in Web2, AI and Web3 development. Each project represents unique challenges and innovative solutions.
          </p>
          
          {/* Filter buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'All' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('Web2')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'Web2' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Web2
            </button>
            <button 
              onClick={() => setFilter('Web3')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'Web3' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Web3
            </button>
            <button 
              onClick={() => setFilter('AI')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'AI' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              AI
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
