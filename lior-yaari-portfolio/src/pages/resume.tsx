import React from 'react';
import Layout from '../components/Layout';

const Resume: React.FC = () => {
    return (
        <Layout>
            <div className="resume-container">
                <h1>Lior Yaari's Resume</h1>
                <h2>Skills</h2>
                <ul>
                    <li>C#</li>
                    <li>C++</li>
                    <li>Unity</li>
                    <li>Game Design</li>
                    <li>System Design</li>
                    <li>Vulkan</li>
                    <li>Tool Creation</li>
                </ul>
                <h2>Experience</h2>
                <p>Details about work experience and projects can be added here.</p>
                <h2>Education</h2>
                <p>Details about educational background can be added here.</p>
                <h2>Contact</h2>
                <p>Email: lior.yaari@example.com</p>
            </div>
        </Layout>
    );
};

export default Resume;