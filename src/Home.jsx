import { useState } from "react";
import { Link } from "react-router";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiLaravel, SiMysql } from 'react-icons/si';
import Blob from "/components/Blob";
import Blob2 from "/components/Blob2";
import "./Home.css"; // Imports Home.css (containing your standard avatar and bubble rules)

function Home() {
    const [isAvatarHovered, setIsAvatarHovered] = useState(false);

    const frontendSkills = [
        { name: 'HTML/CSS', icon: <FaHtml5 className="skill-icon html" /> },
        { name: 'JavaScript', icon: <FaJs className="skill-icon js" /> },
        { name: 'ReactJS', icon: <FaReact className="skill-icon react" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="skill-icon tailwind" /> },
    ];

    const backendSkills = [
        { name: 'PHP', icon: <FaPhp className="skill-icon php" /> },
        { name: 'Laravel', icon: <SiLaravel className="skill-icon laravel" /> },
        { name: 'MongoDB', icon: <SiMongodb className="skill-icon mongodb" /> },
        { name: 'SQL', icon: <SiMysql className="skill-icon sql" /> },
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
                        Ik ben een student aan de Hogeschool Rotterdam.
                        De opleiding die ik doe is CMGT, Creative Media & Game Technologies.
                        En ben vooral geïnteresseerd in stages waarin ik mijn creativiteit kan uiten.
                        Ik heb ervaring met React, HTML/CSS, Javascript, PHP, Laravel en Fullstack web development.
                    </p>
                    <h2 className="intro-card-subtitle-pt6">Wat zoek ik?</h2>
                    <p className="intro-card-p">
                        Ik zoek een <b>stage</b> voor <b>frontend development</b>. Het liefst een plek waar ik mijn
                        creativiteit kan uiten en goed aan de slag kan gaan.
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
                    <h3 className="skills-category-title">Frontend Development</h3>
                    <div className="skills-grid">
                        {frontendSkills.map((skill) => (
                            <Link key={skill.name} to="/projecten" className="no-underline" viewTransition>
                                <div className="skill-card">
                                    <div className="skill-card-progress"></div>
                                    {skill.icon}
                                    <p>{skill.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Backend Skills Section */}
                <div className="skills-section-wrapper">
                    <h3 className="skills-category-title">Backend Development</h3>
                    <div className="skills-grid">
                        {backendSkills.map((skill) => (
                            <Link key={skill.name} to="/projecten" className="no-underline" viewTransition>
                                <div className="skill-card">
                                    <div className="skill-card-progress"></div>
                                    {skill.icon}
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