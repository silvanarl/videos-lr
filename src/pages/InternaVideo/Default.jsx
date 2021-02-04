import React from 'react';
import FeaturedVideo from '../../components/FeaturedVideo/Default';
import InfoVideo from '../../components/InfoVideo/Default';
import MostWatchedVideos from '../VideosMasVistos/default';

const InternaVideo = ({ info }) => {
    return (
        <>
            <div className="container">
                <FeaturedVideo />
                <InfoVideo />
                <MostWatchedVideos info={info} title="Te recomendamos" />
            </div>
            <style jsx="true">

            </style>
        </>
    );
};

export default InternaVideo; 
