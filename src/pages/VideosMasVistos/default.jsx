import React from 'react';
import VideosDestacados from './VideosDestacados/default';

const VideosMasVistos = ({ info }) => {
  return (
    <div className="content-page-notice">
      <h2>Te Recomendamos</h2>
      {info.map((notice, index) => {
        if (index < 3) return <VideosDestacados key={index} notice={notice} />;
      })}
      <style jsx="true">
        {`
          .content-page-notice {
            max-width: 100%;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 30px;
            align-items: center;
            justify-items: center;
            // width: 80vw;
            // margin: 10px auto;
          }
          @media only screen and (min-width: 800px) {
            grid-template-columns: repeat(2, 1fr);
          }
        `}
      </style>
    </div>
  );
};

export default VideosMasVistos;
