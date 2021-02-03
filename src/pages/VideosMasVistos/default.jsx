import React from 'react';
import VideosDestacados from './VideosDestacados/default';

const VideosMasVistos = ({ info }) => {
  console.log('info', info)
  return (
    <div className="content-page-notice">
      {info.map((notice, index) => {
        if (index < 3) return <VideosDestacados key={index} notice={notice} />;
      })}
      <style jsx="true">
        {`
          .content-page-notice {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 15px;
            width: 80vw;
            margin: 10px auto;
          }
        `}
      </style>
    </div>
  );
};

export default VideosMasVistos;
