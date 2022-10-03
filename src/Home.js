import { memo } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: require('./img/slide-show1.jpg'),
        caption: 'The perfect place for music heaven'
    },
    {
        url: require('./img/slide-show2.jpg'),
        caption: 'Let the music take you away'
    },
    {
        url: require('./img/slide-show3.jpg'),
        caption: 'Life is one grand, sweet song, so start the music'
    }
]

const goDown = () => {
    document.querySelector('#performer').scrollIntoView({ scroll: 'smooth'})
}

function Home(){
    return (
        <div id="home" className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                        <div className="slide-img" style={{'backgroundImage': `url(${slideImage.url})`}}>
                            <span className="slide-cap">{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
            <i id="down-icon" className="fa-solid fa-angles-down" onClick={goDown}/>
        </div>
    )
}

export default memo(Home)