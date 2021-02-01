import React from 'react';
import ReactPlayer from 'react-player';

const Componente = () => {
    return (
        <>
            <div className="container">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=6NXnxTNIWkc"
                    controls
                >
                    
                </ReactPlayer>
                
            </div>
            <style jsx="true">
                {`
                .container {
                    background-color: salmon;
                }
                `}
            </style>
        </>
    )
}
export default Componente; // importante <--