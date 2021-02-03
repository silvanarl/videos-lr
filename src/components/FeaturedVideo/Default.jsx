import React from 'react';
import ReactPlayer from 'react-player';

const FeaturedVideo = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDay();
    let currentMonthFinal;
    const months =['Enero', "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        if(! isNaN(currentMonth) && currentMonth >= 1  && currentMonth <= 12 ) {
        currentMonthFinal = months[currentMonth];
    }

    return (
        <>
        <section className="container featured">
            <div className='featured-wrapper'>
                <ReactPlayer
                    url="https://youtu.be/yKf9aUIxdb4"
                    className="react-player"
                    controls
                    width="100%"
                    heigth="100%"
                >    
                </ReactPlayer> 

            </div>
            <div className="featured-wrapper-info">
                <div className="featured-info">
                    <span>Tecnología</span>
                    <h1>Los Sudokus resurgen: los momentos '¡eureka!' de vídeos que los resuelven son la nueva sensación de YouTube</h1>
                    <p className="bodyTitleSingle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium error voluptate, suscipit voluptas sequi totam beatae similique delectus commodi, reprehenderit necessitatibus molestiae nesciunt? Aperiam earum vitae asperiores possimus ad dolores.</p>
                </div>
                <div className="featured-footer">
                    <div className="featured-footer-date">
                        {`${currentDay} de ${currentMonthFinal} de ${currentYear}`}
                    </div>
                    <div className="featured-footer-content">
                        Compartir: 
                        <div className="featured-footer-media">
                            <a href="">
                                <span className="sprite-facebook"></span>
                            </a>
                            <a href="">
                                <span className="sprite-twitter"></span> 
                            </a>
                            <a href="">
                                <span className="sprite-whatsapp"></span>
                            </a> 
                        </div>
                    </div>
                </div>

            </div>
        </section>
            <style jsx="true">
                {`
                .container {
                    
                    margin:auto;
                    max-width: 1000px;
                }
                .featured{
                    display: flex;
                    color:#fff;
                    padding: 1.5rem;
                    justify-content: center;
                    flex-direction: column;
                    box-sizing: border-box;
                    position: relative;
                }
                .featured:before {
                    content: '';
                    background-color: #252525;
                    display: block;
                    position: absolute;
                    height: 100%;
                    width: 100vw;
                    z-index: -1;
                    top: 0;
                    margin-left: -50vw;
                    left: 50%;
                }
                .featured-wrapper {
                    position: relative;
                   padding-top: 380px;
                }
                .react-player {
                    position: absolute;
                    top: 0;
                    left: 0;

                  }
                  .bodyTitleSingle {
                    // font-family: 'Roboto', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    color: #fff;
                  }
                  .featured-footer{
                    display:flex;
                    justify-content: space-around;
                    border-top: 1px solid #fff;
                    border-bottom: 1px solid #fff;
                    padding: 5px 0;
                  }
                  .featured-footer-content{
                    display: flex;
                    padding-left: 5px;

                  }
                  .featured-footer-media{
                      display:flex;
                      justify-content: space-around;
                  }
                  .featured-footer-media a {
                    margin: 0 .15rem;
                  }
                  .featured-footer-date {
                      border-right: 1px solid #fff;
                      padding-right: 5px;
                  }
                  .sprite-facebook {
                    background: url('/assets/sprite_mediashare.png');
                    display: inline-block;
                    height: 20px;
                    width: 20px;
                  }
                  .sprite-twitter {
                    background: url('/assets/sprite_mediashare.png');
                    display: inline-block;
                    background-position: -20px 0px;
                    height: 20px;
                    width: 20px;
                  }
                  .sprite-whatsapp {
                    background: url('/assets/sprite_mediashare.png');
                    display: inline-block;
                    background-position: -40px 0px;
                    height: 20px;
                    width: 20px;
                  }
                @media only screen and (min-width: 767px) {
                    .featured-wrapper {
                        width: 345px;

                    }
                    .featured{
                        flex-direction: row;
                        width: 100%;
                        height: 400px;
                        box-sizing: border-box;
                    }
                    .featured-wrapper-info{
                        flex-direction: column;
                        width: 345px;
                        margin-left: 1rem;
                    }
                    .featured-wrapper-info h1 {
                        font-size: 24px;
                        line-height: 24px;
                    }
                  }
                  @media only screen and (min-width: 1000px) {
                    .featured-wrapper {
                        width: 570px;

                    }
                    .featured-wrapper-info{
                        flex-direction: column;
                        width: 375px;
                    }
                  }
                `}
            </style>
        </>
    )
}
export default FeaturedVideo; // importante <--