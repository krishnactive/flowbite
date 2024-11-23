import React from "react";

const HeroSection = () => {
    return (
        <div className="bg-gray-900 text-white text-center py-20 dark:bg-white dark:text-black" >
            <h1 className="text-4xl md:text-6xl font-bold mb-4" >
                Build websites even faster with <br/> components on top of tailwind 
                css
            </h1>
            <p className="text-lg md:text-xl mb-6">
                Start developing with an open-source library of over 600+ UI components,
                sections, and pages built with the utility classes from Tailwind CSS
                and designed in Figma.
            </p>

            <div className="flex justify-center gap-4">
                <button className="bg-blue-600 px-6 py-3 rounded-md text-white hover:bg-blue-700" >
                    Get started
                </button>
                <button className="bg-gray-700 px-6 py-3 rounded-md text-white hover:bg-gray-600">
                    Explore components
                </button>
            </div>

        </div>
    );
};

export default HeroSection;
