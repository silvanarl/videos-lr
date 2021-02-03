// página del home, se importarán los componentes internos
import React from 'react';
import FeaturedVideo from '../../components/FeaturedVideo/Default';
import InfoVideo from '../../components/InfoVideo/Default';
// import RecommendedVideos from '../../components/RecommendedVideos';

const Home = () => {
    return (
        <>
        <div className="container">
            <FeaturedVideo />
            <InfoVideo />
        </div>
        <style jsx="true">
            {`
            
            `}
        </style>
        </>
    )
}
export default Home;




