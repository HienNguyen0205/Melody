import { memo } from 'react'

function Performer({height}){

    const styles = {'marginTop': `${-height}px`, 'paddingTop': `${height}px`}

    return (
        <div id="performer" style={{'backgroundImage': `url(${require('./img/stage.jpg')})`, ...styles}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-4 text-center">
                        <h1 id="performer-title">Event Performers</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 performer-container">
                        <div className="performer-img-container">
                            <div className="performer-img" style={{'backgroundImage': `url(${require('./img/taylor-img.jpg')})`}}></div>
                        </div>
                        <div className="performer-info">
                            <h3>Taylor Swift</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 performer-container">
                    <div className="performer-img-container">
                            <div className="performer-img" style={{'backgroundImage': `url(${require('./img/harry-style-img.jpg')})`}}></div>
                        </div>
                        <div className="performer-info">
                            <h3>Harry Styles</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 performer-container">
                    <div className="performer-img-container">
                            <div className="performer-img" style={{'backgroundImage': `url(${require('./img/ariana-grande-img.jpg')})`}}></div>
                        </div>
                        <div className="performer-info">
                            <h3>Arina Grande</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 performer-container">
                    <div className="performer-img-container">
                            <div className="performer-img" style={{'backgroundImage': `url(${require('./img/weeknd-img.jpg')})`}}></div>
                        </div>
                        <div className="performer-info">
                            <h3>The Weeknd</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Performer)