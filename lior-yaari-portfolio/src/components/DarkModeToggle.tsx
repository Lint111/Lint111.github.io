import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        }
    };

    return (
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;