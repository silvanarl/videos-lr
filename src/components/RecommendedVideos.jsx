import React from 'react';
import ReactPlayer from 'react-player';

const RecommendenVideos = () => {
  return (
    <div>
      <div className="container">
        <ReactPlayer url="https://www.youtube.com/watch?v=6NXnxTNIWkc" controls></ReactPlayer>
      </div>
      <style jsx="true">
        {`
          .container {
            background-color: salmon;
          }
        `}
      </style>
    </div>
  );
};

export default RecommendenVideos;
