// página del home, se importarán los componentes internos
import React from 'react';
// import Componente from '../components/component';
import RecommendenVideos from '../components/RecommendedVideos';

const Page = () => {
  return (
    <>
      <div className="page">
        {/* <Componente /> */}
        <RecommendenVideos />
      </div>
      <style jsx="true">
        {`
          .page {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};
export default Page;
