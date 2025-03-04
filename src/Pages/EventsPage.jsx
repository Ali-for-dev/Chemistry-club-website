import React, { useState } from "react";
import { Beaker, Calendar, Video, Atom, Play } from "lucide-react";
import Navbar from "./Navbar";
import f1 from "../assets/Lab.jpeg";
import f2 from "../assets/Lab.jpeg";
import f3 from "../assets/Lab.jpeg";

// Import local videos
import video1 from "../assets/Videos/vid1.mov";

const EventsPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const clubVideos = [
    {
      id: 1,
      title: "Chemistry Symposium 2024",
      thumbnail: f1,
      videoUrl: video1,
      description: "Highlights from our annual chemistry research showcase.",
      date: "January 15, 2024",
    },
    {
      id: 2,
      title: "Experimental Techniques Workshop",
      thumbnail: f2,
      videoUrl: video2,
      description: "In-depth workshop on advanced laboratory techniques.",
      date: "February 20, 2024",
    },
    {
      id: 3,
      title: "Student Research Presentations",
      thumbnail: f3,
      videoUrl: video3,
      description:
        "Our members present their groundbreaking research projects.",
      date: "March 10, 2024",
    },
    {
      id: 4,
      title: "Lab Safety Training",
      thumbnail: f1,
      videoUrl: video4,
      description: "Comprehensive safety protocols for laboratory work.",
      date: "April 5, 2024",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Molecular Modeling Seminar",
      date: "March 15, 2025",
      time: "6:00 PM",
      location: "Chemistry Building, Lecture Hall A",
    },
    {
      id: 2,
      title: "Industry Networking Night",
      date: "April 5, 2025",
      time: "7:00 PM",
      location: "University Science Center",
    },
    {
      id: 3,
      title: "Summer Research Symposium",
      date: "June 20, 2025",
      time: "All Day",
      location: "University Research Labs",
    },
  ];

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Club <span className="text-green-400">Events</span> &{" "}
            <span className="text-green-400">Videos</span>
          </h1>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8">
            Explore our exciting events, workshops, and video archives that
            showcase the vibrant world of our chemistry club.
          </p>
        </div>
      </div>

      {/* Video Gallery Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Club <span className="text-green-400">Video Gallery</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Selected Video Player */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            {selectedVideo ? (
              <div>
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  className="w-full"
                  poster={selectedVideo.thumbnail}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedVideo.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-300">{selectedVideo.description}</p>
                    <span className="text-sm text-green-400">
                      {selectedVideo.date}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full p-12 text-center">
                <p className="text-gray-400">
                  Select a video to watch our club's highlights
                </p>
              </div>
            )}
          </div>

          {/* Video Thumbnails */}
          <div className="grid md:grid-cols-2 gap-4">
            {clubVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => handleVideoSelect(video)}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:bg-gray-700 transition-colors group"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-green-500 rounded-full p-3 bg-opacity-70">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg truncate">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same as in the previous version */}
      {/* ... (Upcoming Events, Call to Action, Footer sections) ... */}
    </div>
  );
};

export default EventsPage;
