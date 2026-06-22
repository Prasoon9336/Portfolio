import React from 'react';

export default function VideoBackground() {
  return (
    <div className="video-container">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="bg-video"
      >
        <source src="https://res.cloudinary.com/dp2mxstew/video/upload/v1781962718/samples/sea-turtle.mp4" type="video/mp4" />
      </video>
    </div>
  );
}