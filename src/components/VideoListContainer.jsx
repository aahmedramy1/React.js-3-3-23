import React from "react";
import VideoCard from "./VideoCard/VideoCard";

const VideoListContainer = () => {
  // generate a list of videos
  const videos = [
    {
      title: "Video 1",
      description: "This is the first video",
      id: 1,
      image: "https://picsum.photos/300/200",
    },
    {
      title: "Video 2",
      description: "This is the second video",
      id: 2,
      image: "https://picsum.photos/300/201",
    },
    {
      title: "Video 3",
      description: "This is the third video",
      id: 3,
      image: "https://picsum.photos/301/200",
    },
    {
      title: "Video 4",
      description: "This is the fourth video",
      id: 4,
      image: "https://picsum.photos/301/201",
    },
    {
      title: "Video 5",
      description: "This is the fifth video",
      id: 5,
      image: "https://picsum.photos/301/202",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      {videos.map((video) => (
        <VideoCard
          title={video.title}
          description={video.description}
          image={video.image}
          key={video.id}
        />
      ))}
    </div>
  );
};

export default VideoListContainer;
