import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Lior Yaari. All rights reserved.</p>
                <div className="mt-2">
                    <a href="https://digx7.github.io/resume/" className="text-gray-400 hover:text-white">Resume</a>
                    <span className="mx-2">|</span>
                    <a href="https://github.com/digx7" className="text-gray-400 hover:text-white">GitHub</a>
                    <span className="mx-2">|</span>
                    <a href="https://www.linkedin.com/in/liory7/" className="text-gray-400 hover:text-white">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;