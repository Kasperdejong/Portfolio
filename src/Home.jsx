import { useState } from "react";
import { Link } from "react-router";
import { 
    FaHtml5, 
    FaJs, 
    FaReact, 
    FaNodeJs, 
    FaPhp, 
    FaPython 
} from 'react-icons/fa';
import { 
    SiTailwindcss, 
    SiSupabase, 
    SiLaravel, 
    SiMysql, 
    SiElectron, 
    SiVite 
} from 'react-icons/si';
import Blob from "/components/Blob";
import Blob2 from "/components/Blob2";
import Blob3 from "/components/Blob3";
import "./Home.css";

function Home() {
    const [isAvatarHovered, setIsAvatarHovered] = useState(false);

    // Each skill with its official brand color
    const frontendSkills = [
        { name: 'HTML/CSS', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'ReactJS', icon: <FaReact />, color: '#61DAFB' },
        { name: 'TailwindCSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
    ];

    const backendSkills = [
        { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
        { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
        { name: 'Supabase', icon: <SiSupabase />, color: '#3ECF8E' },
        { name: 'SQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#539E43' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'Electron', icon: <SiElectron />, color: '#47848F' },
    ];

    return (
        <header className="home-header">
            <Blob2 />
            <h1 className="home-title">
                Welkom op mijn CV website
            </h1>

            <div className="intro-container">
                {/* Intro Card */}
                <div className="intro-card">
                    <h2 className="intro-card-subtitle">Mijn naam is Kasper</h2>
                    <p className="intro-card-p">
                        Ik ben een student aan de Hogeschool Rotterdam. De opleiding die ik doe is CMGT, Creative Media & Game Technologies. En ben vooral geïnteresseerd in stages waarin ik mijn creativiteit kan uiten. Ik heb ervaring met React, HTML/CSS, Javascript, Python, C#, PHP, Laravel en Fullstack web development.
                    </p>
                    <h2 className="intro-card-subtitle-pt6">Wat zoek ik?</h2>
                    <p className="intro-card-p">
                        Ik zoek een <b>stage</b> voor <b>full-stack development of creative development</b>. Het liefst een plek waar ik mijn creativiteit kan uiten en goed aan de slag kan gaan.
                    </p>
                </div>

                {/* Profile Photo Wrapper Container */}
                <Link to="/about" className="profile-avatar-link" viewTransition>
                    <div 
                        className="profile-avatar-container"
                        onMouseEnter={() => setIsAvatarHovered(true)}
                        onMouseLeave={() => setIsAvatarHovered(false)}
                    >
                        <div className="profile-avatar"></div>
                        
                        {isAvatarHovered && (
                            <img 
                                src="/Portfolio/overmij_bubbleright.png" 
                                alt="Spreekt" 
                                className="profile-bubble"
                            />
                        )}
                    </div>
                </Link>
            </div>

            <div className="skills-container">
                <Blob />
                <h2 className="skills-main-title">Mijn Skills</h2>

                {/* Frontend Skills Section */}
                <div className="skills-section-wrapper">
                    <div className="category-title-wrapper">
                        <div className="category-blob-bg">
                            <Blob3 />
                        </div>
                        <h3 className="skills-category-title">Frontend Development</h3>
                    </div>

                    <div className="skills-grid">
                        {frontendSkills.map((skill) => (
                            <Link key={skill.name} to="/projecten" className="no-underline" viewTransition>
                                <div className="skill-card">
                                    {/* Top line with the corresponding skill color */}
                                    <div 
                                        className="skill-card-progress" 
                                        style={{ backgroundColor: skill.color }}
                                    ></div>
                                    <span className="skill-icon" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </span>
                                    <p>{skill.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Backend Skills Section */}
                <div className="skills-section-wrapper">
                    <div className="category-title-wrapper">
                        <div className="category-blob-bg">
                            <Blob3 />
                        </div>
                        <h3 className="skills-category-title">Backend & Tools</h3>
                    </div>

                    <div className="skills-grid">
                        {backendSkills.map((skill) => (
                            <Link key={skill.name} to="/projecten" className="no-underline" viewTransition>
                                <div className="skill-card">
                                    {/* Top line with the corresponding skill color */}
                                    <div 
                                        className="skill-card-progress" 
                                        style={{ backgroundColor: skill.color }}
                                    ></div>
                                    <span className="skill-icon" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </span>
                                    <p>{skill.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Home;