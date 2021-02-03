import React from 'react';
import { add } from 'ramda';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

let currentDay = new Date();

const VideosDestacados = ({ notice }) => {
  return (
    <div key={notice.id} className="content-notice">
      <ReactPlayer className="content-notice__videos" url={notice.video} controls={true} playing={false} />
      <Link to={'/' + notice.id}>
        <h3 className="title">{notice.title}</h3>
      </Link>
      <div className="content-notice__div">
        <h4>Tendencias</h4>
        <div>
          {currentDay.getDate() + '/' + add(parseInt(currentDay.getMonth()), 1) + '/' + currentDay.getFullYear()}
        </div>
      </div>
      <style jsx="true">
        {`
          .content-notice {
            max-width: 100%;
          }
          .content-notice__videos {
            margin: 0 auto;
            width: 80vw !important;
            height: 160px !important;
          }
          .content-notice a {
            text-decoration: none;
            color: black;
          }
          .content-notice a h3 {
            width: 80vw;
            margin: 15px auto 0;
            padding-bottom: 12px;
            border-bottom: 1px solid #d2d2d2;
            font-family: Roboto;
            font-size: 16px;
            line-height: 18px;
            font-weight: 700;
          }
          .content-notice__div {
            display: flex;
            flex direction: row;
            justify-content: space-between;
            // align-items: flex-start;
          }
          .content-notice__div h4 {
            align-self: flex-start;
            margin: 12px 0 auto 0;
            font-family: Roboto;
            font-size: 14px;
            line-height: 16px;
            font-weight: 700;
            color: #f82d2e;
          }
          .content-notice__div div  {
            margin: 12px 0 auto 0;
            font-family: Roboto;
            font-size: 14px;
            line-height: 16px;
            font-weight: 700;
          }
          @media only screen and (min-width: 800px) {
           .content-notice__videos {
            width: 40vw !important;
            height: 190px !important;
          }
           .content-notice a p {
            width: 40vw;   
          }
        `}
      </style>
    </div>
  );
};
export default VideosDestacados;
