import React from "react";

const VideoSection = () => {
  return (
    <div className="bg-gray-800 text-white py-10 dark:bg-white dark:text-blac">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Flowbite Crash Course in 20 mins
        </h2>
        <iframe
          className="w-full md:w-2/3 mx-auto rounded-lg"
          height="315"
          src="https://www.youtube.com"
          title="Flowbite video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
