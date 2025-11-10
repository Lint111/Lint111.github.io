import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <h1 className="text-2xl font-bold">
                Lior Yaari's Portfolio
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-400">About</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-gray-400">Projects</Link>
                    </li>
                    <li>
                        <Link href="/resume" className="hover:text-gray-400">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;