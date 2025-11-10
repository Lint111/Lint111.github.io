import React from 'react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projects';

const ProjectsPage = () => {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Layout>
    );
};

export default ProjectsPage;