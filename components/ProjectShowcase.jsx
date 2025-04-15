import React from "react";
import "./ProjectShowcase.css";

const ProjectShowcase = ({title, images, description, skills, bgColor = "#1f2937"}) => {
    return (
        <div className="flex justify-center">
            <div
                className="project-showcase-container"
                style={{
                    backgroundColor: bgColor,
                    padding: "1.5rem",
                    borderRadius: "1rem",
                    color: "white",
                    boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>

                {/* Image Grid with tiny gap */}
                <div className="image-grid">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Project image ${index + 1}`}
                            className="project-image"
                        />
                    ))}
                </div>

                {/* Description */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Beschrijving:</h3>
                    <p className="text-gray-200">{description}</p>
                </div>

                {/* Skills */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Gebruikte Skills:</h3>
                    <div style={{display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem"}}>
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                style={{
                                    backgroundColor: "#D99706",
                                    color: "white",
                                    padding: "0.25rem 0.75rem",
                                    borderRadius: "0.375rem",
                                    fontSize: "1rem",
                                    textShadow: "1px 1px 0 black"
                                }}
                            >
                            {skill.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;
