import { memo } from "react"
import { useParallax } from "react-scroll-parallax"

function About({height}){

    const styles = {'marginTop': `${-height}px`, 'paddingTop': `${height}px`}
    const member1 = useParallax({
        rotateX: [60, 0],
        opacity: [0.5, 1]
    })

    const member2 = useParallax({
        rotateX: [60, 0],
        opacity: [0.5, 1]
    })

    return (
        <div id="about" style={{ 'backgroundImage': `url(${require('./img/about-bg.png')})`, ...styles}}>
            <div className="container">
                <div className="row">
                    <div id="about-title" className="col-12 py-4 text-center">
                        <h1>Our Team</h1>
                    </div>
                </div>
                <div id="avatar-container" className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="avatar" style={{'backgroundImage': `url(${require('./img/avatar.png')})`}} ref={member1.ref}></div>
                        <div className="info-container mt-3 p-3 text-center">
                            <p className="mb-0">Nguyễn Công Hiền</p>
                            <small className="text-primary">Founder</small>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="avatar" style={{'backgroundImage': `url(${require('./img/avatar.png')})`}} ref={member2.ref}></div>
                        <div className="info-container mt-3 p-3 text-center">
                            <p className="mb-0">Nguyễn Xuân Bình</p>
                            <small className="text-primary">Co-Founder</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(About)