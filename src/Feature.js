import { memo } from 'react'

const goDown = () => {
    document.querySelector('#all-features').scrollIntoView({ behavior: 'smooth'})
}

function Feature({height}){

    const styles = {'marginTop': `${-height}px`, 'paddingTop': `${height}px`}

    return (
        <>
            <div id="features" style={styles}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 my-4 text-center">
                            <h1 id="hightlight-title">Hightlights</h1>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-12">
                            <p id="hightlight-description">An annual music event held in Manhattan, New York with the participation of famous singers, a grand stage,
                                well-invested sound and light system promises to bring a unique musical experience, unforgettable music and 
                                lighting.
                            </p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <p className="text-container" onClick={goDown}>Check It Out</p>
                        </div>
                    </div>
                    <i id="down-icon-features" className="fa-solid fa-angles-down text-dark" onClick={goDown}/>
                </div>
            </div>
            <div id="all-features" style={{'backgroundImage': `url(${require('./img/feature-bg.jpg')})`, ...styles}}>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-3 col-md-6 col-sm-12 py-5">
                            <div className="feature-container">
                                <h3 className="feature-title">Ticket</h3>
                                <p className="px-3">Ticket prices are divided into many different segments to make it easy for you to choose. 
                                    Especially if you order 2 months in advance, you will get 15% discount.
                                </p>
                                <i className="fa-solid fa-ticket feature-icon"></i>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 py-5">
                            <div className="feature-container">
                                <h3 className="feature-title">Food And Drink</h3>
                                <p className="px-3">Drinks and food will be served completely free of charge for the duration of the event.</p>
                                <i className="fa-solid fa-utensils feature-icon"></i>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 my-5">
                            <div className="feature-container">
                                <h3 className="feature-title">Parking</h3>
                                <p className="px-3">Two car parks with large capacity ensure enough service for everyone participating in the event.</p>
                                <i className="fa-solid fa-car feature-icon"></i>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 my-5">
                            <div className="feature-container">
                                <h3 className="feature-title">Music Experience</h3>
                                <p className="px-3">With the participation of famous singers and a well-prepared stage system will bring new experiences to participants.</p>
                                <i className="fa-solid fa-music feature-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Feature)