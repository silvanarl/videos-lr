// página del home, se importarán los componentes internos
import React from 'react';
import FeaturedVideo from '../../components/FeaturedVideo/Default';
// import InfoVideo from '../../components/InfoVideo/Default';
import MostWatchedVideos from '../VideosMasVistos/default'
// import RecommendedVideos from '../../components/RecommendedVideos';

const Home = ({ info }) => {
    return (
        <>
        <div className="container">
            <FeaturedVideo />
            <MostWatchedVideos info={info} title="Últimas Noticias" />
        </div>
        <style jsx="true">
            {`
            
            `}
        </style>
        </>
    )
}
export default Home;




