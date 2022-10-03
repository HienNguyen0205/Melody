import {memo} from 'react'

function Footer() {
    return (
        <footer className="py-4 bg-dark">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#home" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="#performer" className="nav-link px-2 text-muted">Performers</a></li>
                <li className="nav-item"><a href="#feature" className="nav-link px-2 text-muted">Features</a></li>
                <li className="nav-item"><a href="#ticket" className="nav-link px-2 text-muted">Ticket</a></li>
                <li className="nav-item"><a href="#about" className="nav-link px-2 text-muted">About</a></li>
            </ul>
            <p className="text-center text-muted">© 2022 Melody website</p>
        </footer>
    )
}

export default memo(Footer)