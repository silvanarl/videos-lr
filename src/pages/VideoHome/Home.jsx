// página del home, se importarán los componentes internos
import React from 'react';
import FeaturedVideo from '../../components/FeaturedVideo/Default';

const Page = () => {
    return (
        <>
        <div className="page">
            <FeaturedVideo />
        </div>
        <style jsx="true">
            {`
            .page {
                display: flex;
                justifyContent: center;
            }
            `}
        </style>
        </>
    )
}
export default Page;
