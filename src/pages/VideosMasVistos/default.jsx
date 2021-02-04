import React from 'react';
import VideosDestacados from './VideosDestacados/default';

const VideosMasVistos = ({ info }) => {
  console.log('info', info)
  return (
    <>
      <section className="main-content">
        <header className="main-header">
          <h2>Te Recomendamos</h2>
        </header>
        <div className="content-page-notice">
          {info.map((notice, index) => {
            if (index < 4) return <VideosDestacados key={index} notice={notice} />;
          })}
        </div>
      </section>
      <style jsx="true">
        {`
          .main-header h2 {
            border-left: 4px solid #f82d2e;
            margin: 30px auto;
            padding: 13px 19px;
            font-family: Roboto;
            font-size: 24px;
            line-height: 26px;
            font-weight: 700;
          }
          .main-header h2::::before {
            content: '';
            display: block;
            width: 4px;
            background-color: #f82d2e;
          }
          .main-content {
            width: 80vw;
            margin: 0 auto;
          }
          .content-page-notice {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px 10px;
            width: 100%;
            margin: 10px auto;
          }
          @media only screen and (min-width: 800px) {
            .main-header h2 {
              font-size: 32px;
              line-height: 34px;
            }
            .content-page-notice {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}
      </style>
    </>
  );
};

export default VideosMasVistos;
