interface Project {
    title: string;
    description: string;
    link: string;
    image?: string;
}

interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
}

interface Portfolio {
    name: string;
    skills: Skill[];
    projects: Project[];
}

declare const portfolioData: Portfolio;