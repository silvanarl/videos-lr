import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const VideosDestacados = ({ notice }) => {
  return (
    <div key={notice.id} className="content-notice">
      <ReactPlayer url={notice.video} controls={true} playing={false} />
      <Link to={'/' + notice.id}>
        <p className="title">{notice.title}</p>
      </Link>
      <style jsx="true">
        {`
          .content-notice div {
            width: 80vw !important;
            height: 160px !important;
          }
        `}
      </style>
    </div>
  );
};
export default VideosDestacados;
