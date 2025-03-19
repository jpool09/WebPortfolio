'use client';

import { useState } from 'react';
import { FaPhp, FaJs, FaDatabase, FaGithub, FaFileContract, FaCubes, FaBrain, FaRobot, FaPython, FaCode } from 'react-icons/fa';
import { FaWalkieTalkie } from 'react-icons/fa6';

const skills = [
  { name: 'PHP', category: 'web', icon: <FaPhp />, level: 95 },
  { name: 'JavaScript/TypeScript', category: 'web', icon: <FaJs />, level: 85 },
  { name: 'MySQL', category: 'web', icon: <FaDatabase />, level: 95 },
  { name: 'Git/GitHub', category: 'web', icon: <FaGithub />, level: 95 },
  { name: 'Python', category: 'languages', icon: <FaPython />, level: 60 },
  { name: 'AI Agents', category: 'languages', icon: <FaRobot />, level: 60 },
  { name: 'Solidity', category: 'blockchain', icon: <FaFileContract />, level: 20 },
  { name: 'Smart Contracts', category: 'blockchain', icon: <FaCubes />, level: 20 },
  { name: 'Critical Thinking', category: 'blockchain', icon: <FaBrain />, level: 90 },
  { name: 'Comunication Skills', category: 'blockchain', icon: <FaWalkieTalkie />, level: 90 },
  { name: 'Problem Solving', category: 'blockchain', icon: <FaCode />, level: 90 },
];

const categories = ['all', 'web', 'blockchain', 'ai'];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-black">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                        Skills & Technologies
                    </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    My toolkit for building decentralized and intelligent applications.
                </p>

                <div className="flex justify-center mt-8 space-x-4 mb-12">
                    {categories.map(category => (
                        <button 
                        key={category} 
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                        onClick={() => setSelectedCategory(category)}
                        >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredSkills.map(skill => (
                        <div key={skill.name} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-4 rounded-lg flex flex-col items-center">
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                        <div className="w-full bg-gray-700 h-2 mt-2 rounded-full overflow-hidden">
                            <div className="h-2 bg-cyan-300" style={{ width: `${skill.level}%` }}></div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
