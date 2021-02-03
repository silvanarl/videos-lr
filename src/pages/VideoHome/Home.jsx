// página del home, se importarán los componentes internos
import React from 'react';
import FeaturedVideo from '../../components/FeaturedVideo/Default';
import RecommendenVideos from '../components/RecommendedVideos';

const Page = () => {
    return (
        <>
        <div className="page">
            <FeaturedVideo />
            <RecommendenVideos />
        </div>
        <style jsx="true">
            {`
            // .page {
            //     display: flex;
            //     justifyContent: center;
            // }
            `}
        </style>
        </>
    )
}
export default Page;




