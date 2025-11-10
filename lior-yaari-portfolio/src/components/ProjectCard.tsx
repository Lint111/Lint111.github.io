import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2">{description}</p>
            <a href={link} className="mt-4 inline-block text-blue-400 hover:underline">
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;