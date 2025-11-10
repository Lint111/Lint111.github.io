import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
    return (
        <Layout>
            <div className="about-container">
                <h1>Lior Yaari's Portfolio</h1>
                <h2>About Me</h2>
                <p>
                    I am a passionate game developer with expertise in C#, C++, and Unity. My journey in game development has equipped me with a strong foundation in game design and system design, allowing me to create engaging and immersive experiences.
                </p>
                <p>
                    I have a keen interest in graphics programming, particularly with Vulkan, and I enjoy creating tools that enhance the development process. My goal is to push the boundaries of interactive storytelling and gameplay mechanics.
                </p>
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
            </div>
        </Layout>
    );
};

export default About;