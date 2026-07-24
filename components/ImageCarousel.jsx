import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

const ImageCarousel = ({ images }) => {
    const [index, setIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!images || images.length === 0) return null;

    const handlePrev = (e) => {
        e.stopPropagation();
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add("lightbox-active");
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove("lightbox-active");
    };

    const handleModalPrev = (e) => {
        e.stopPropagation();
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleModalNext = (e) => {
        e.stopPropagation();
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Modal keydown triggers
    useEffect(() => {
        if (!isModalOpen) return;

        const handleModalKeyDown = (event) => {
            const key = event.key.toLowerCase();
            if (key === "arrowleft" || key === "a") {
                setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            } else if (key === "arrowright" || key === "d") {
                setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            } else if (key === "escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleModalKeyDown);
        return () => {
            window.removeEventListener("keydown", handleModalKeyDown);
        };
    }, [isModalOpen, images.length]);

    return (
        <>
            <div className="image-carousel" onClick={openModal} title="Klik om te vergroten">
                <button className="img-carousel-btn prev" onClick={handlePrev} aria-label="Vorige afbeelding">
                    &#10094;
                </button>
                <img 
                    key={index} /* Forces fade animation on index swap */
                    src={images[index]} 
                    alt={`Project screenshot ${index + 1}`} 
                    className="carousel-image-display" 
                />
                <button className="img-carousel-btn next" onClick={handleNext} aria-label="Volgende afbeelding">
                    &#10095;
                </button>
                <div className="image-counter">
                    {index + 1} / {images.length}
                </div>
            </div>

            {isModalOpen && (
                <div className="lightbox-overlay" onClick={closeModal}>
                    <button className="lightbox-close" onClick={closeModal} aria-label="Sluit venster">
                        &times;
                    </button>
                    
                    <button className="lightbox-nav lightbox-prev" onClick={handleModalPrev} aria-label="Vorige afbeelding">
                        &#10094;
                    </button>
                    
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img 
                            key={index} /* Forces zoom-fade on navigation index change */
                            src={images[index]} 
                            alt={`Project screenshot vergroot ${index + 1}`} 
                            className="lightbox-image"
                        />
                    </div>

                    <button className="lightbox-nav lightbox-next" onClick={handleModalNext} aria-label="Volgende afbeelding">
                        &#10095;
                    </button>

                    <div className="lightbox-counter">
                        {index + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageCarousel;