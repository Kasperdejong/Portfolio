import React from "react";
import ImageCarousel from "./ImageCarousel";
import "./ProjectShowcase.css";

const ProjectShowcase = ({ title, images, description, projectLink, links, skills, bgColor = "#1f2937", overrideBg, theme }) => {
    const activeBackground = overrideBg || bgColor;

    return (
        <div className="project-showcase-wrapper-card">
            <div
                className={`project-showcase-container ${theme ? `theme-${theme}` : ''}`}
                style={{ backgroundColor: activeBackground }}
            >
                {/* Center Title - Spans across the entire top area */}
                <h2 className="project-title">{title}</h2>

                {/* Grid holding the left and right columns */}
                <div className="showcase-content-grid">
                    
                    {/* Left Column: Image Slideshow & Project Link */}
                    <div className="showcase-visual-side">
                        <ImageCarousel images={images} />
                        
                        {/* Render multiple links if provided; fallback to single projectLink */}
                        {links && links.length > 0 ? (
                            <div className="project-links-wrapper">
                                {links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        {link.label} →
                                    </a>
                                ))}
                            </div>
                        ) : (
                            projectLink && (
                                <div className="project-link-wrapper">
                                    <a
                                        href={projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        Bekijk het project →
                                    </a>
                                </div>
                            )
                        )}
                    </div>

                    {/* Right Column: Description & Skills */}
                    <div className="showcase-info-side">
                        <div className="project-section description-box">
                            <h3 className="section-subtitle">Beschrijving:</h3>
                            <div className="description-text">{description}</div>
                        </div>

                        <div className="project-section skills-section">
                            <h3 className="section-subtitle">Gebruikte Skills:</h3>
                            <div className="skills-badge-container">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-badge">
                                        {skill.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;