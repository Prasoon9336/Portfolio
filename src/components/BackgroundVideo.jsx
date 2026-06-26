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
        <source src="https://res.cloudinary.com/dp2mxstew/video/upload/v1782481989/lightfall-1782415737345_lt87u0.mkv" type="video/mp4" />
      </video>
    </div>
  );
}