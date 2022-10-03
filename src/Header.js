import { memo } from 'react'

function Header({innerRef}){
    return (
        <header id="header" ref={innerRef}>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="#home" className="d-flex align-items-center mb-2 mb-lg-0 my-md-auto me-lg-auto">
                        <img src={require('./img/Header_logo.jpg')} alt=""/>
                    </a>
                    <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">
                                <i className="fa-solid fa-house-chimney icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#performer" className="nav-link">
                                <i className="fa-solid fa-music icon"></i>
                                Performers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#features" className="nav-link">
                                <i className="fa-solid fa-bars icon"></i>
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#ticket" className="nav-link">
                                <i className="fa-solid fa-ticket icon"></i>
                                Tickets
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                <i className="fa-solid fa-circle-info icon"></i>
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default memo(Header)