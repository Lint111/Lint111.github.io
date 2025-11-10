import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Home: React.FC = () => {
    return (
        <Layout>
            <div className="container mx-auto text-center py-10">
                <h1 className="text-4xl font-bold text-white">Lior Yaari's Portfolio</h1>
                <p className="mt-4 text-lg text-gray-300">
                    Welcome to my portfolio! I am a game developer with expertise in C#, C++, Unity, game design, system design, Vulkan, and tool creation.
                </p>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-white">Featured Projects</h2>
                    <ul className="mt-4 space-y-4">
                        <li>
                            <Link href="/projects/verdant-swarm">
                                <a className="text-blue-400 hover:underline">Verdant Swarm</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects/nurtured-apathy-vertical-slice">
                                <a className="text-blue-400 hover:underline">Nurtured Apathy - Vertical Slice</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects/web-of-lies-spreading-misinformation">
                                <a className="text-blue-400 hover:underline">Web of Lies: Spreading Misinformation</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default Home;