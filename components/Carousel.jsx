import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const projects = [
    {
        image: "/Portfolio/artsy-background.jpg",
        title: "Dit project",
        description: "Dit is wat ik deed tijdens dit project",
    },
    {
        image: "/Portfolio/Closeupfoto.jpg",
        title: "Dit andere project",
        description: "test",
    },
    {
        image: "/Portfolio/cv.png",
        title: "Project",
        description: "Dit is wat ik deed tijdens dit andere project",
    },
];

const ProjectsCarousel = () => {
    const [currentProject, setCurrentProject] = useState(0);

    // Next slide function
    const nextSlide = () => {
        setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
    };

    // Previous slide function
    const prevSlide = () => {
        setCurrentProject((prevProject) => (prevProject - 1 + projects.length) % projects.length);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-10">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out ${index === currentProject ? "block" : "hidden"}`}
                    >
                        <img
                            src={project.image}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt={project.title}
                        />
                    </div>
                ))}
            </div>

            {/* Carousel Buttons */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button
                    onClick={prevSlide}
                    className="w-3 h-3 rounded-full bg-white opacity-75 hover:opacity-100"
                ></button>
                <button
                    onClick={nextSlide}
                    className="w-3 h-3 rounded-full bg-white opacity-75 hover:opacity-100"
                ></button>
            </div>

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
                <span className="sr-only">Previous</span>
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
            >
                <ChevronRightIcon className="w-6 h-6 text-white" />
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
};

export default ProjectsCarousel;
