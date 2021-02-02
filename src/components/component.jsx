import React from 'react';
import ReactPlayer from 'react-player';

const Componente = () => {
    return (
        <>
        <section className="featured-video">
            <div className="featured-video-main">
                <ReactPlayer
                    url="https://youtu.be/yKf9aUIxdb4"
                    controls
                    width="100%"
                    heigth="250px"
                >    
                </ReactPlayer> 
            </div>
            <div className="featured-video-info">
                <span>Tecnología</span>
                <h1>Los Sudokus resurgen: los momentos '¡eureka!' de vídeos que los resuelven son la nueva sensación de YouTube</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium error voluptate, suscipit voluptas sequi totam beatae similique delectus commodi, reprehenderit necessitatibus molestiae nesciunt? Aperiam earum vitae asperiores possimus ad dolores.</p>
            </div>
            <div>
                Fecha |
                <div>
                    Compartir:
                </div>
            </div>
        </section>
            <style jsx="true">
                {`
                .featured-video {
                    max-width: 1000px;
                    margin:auto;
                    background-color: #000;
                    display: flex;
                    color:#fff;
                    padding: 1.5rem;
                    justify-content: center;
                    flex-direction: column;
                }
                .featured-video-main{
                    width: 100%
                }
                `}
            </style>
        </>
    )
}
export default Componente; // importante <--