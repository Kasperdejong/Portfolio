import React, { useState, useEffect } from "react";
import "./ProjectCarousel.css";

const ProjectCarousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = React.Children.count(children);
    const childrenArray = React.Children.toArray(children);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
    };

    // Keyboard Controls
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Prevent project switches if the lightbox overlay is actively in the DOM
            if (document.querySelector(".lightbox-overlay")) {
                return;
            }

            const key = event.key.toLowerCase();
            if (key === "arrowleft" || key === "a") {
                handlePrev();
            } else if (key === "arrowright" || key === "d") {
                handleNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [totalItems]);

    const activeChild = childrenArray[currentIndex];
    const activeBgColor = activeChild?.props?.bgColor || "#1f2937";
    const activeTheme = activeChild?.props?.theme || ""; // Extract theme name

    return (
        <div 
            className={`project-carousel-wrapper ${activeTheme ? `theme-wrapper-${activeTheme}` : ""}`}
            style={{ backgroundColor: activeBgColor }}
        >
            <button className="carousel-btn prev-btn" onClick={handlePrev} aria-label="Vorige project">
                &#10094;
            </button>
            
            <div className="carousel-content-area">
                {childrenArray.map((child, index) => (
                    <div key={index} className={`carousel-slide ${index === currentIndex ? "active" : ""}`}>
                        {index === currentIndex && React.cloneElement(child, { overrideBg: "transparent" })}
                    </div>
                ))}
            </div>

            <button className="carousel-btn next-btn" onClick={handleNext} aria-label="Volgende project">
                &#10095;
            </button>

            <div className="carousel-dots">
                {Array.from({ length: totalItems }).map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? "active-dot" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ga naar project ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectCarousel;