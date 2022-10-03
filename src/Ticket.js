import { useState, useEffect, useCallback, memo } from "react"
import TicketModal from './TicketModal'
import CartModal from './CartModal'

function Ticket({height, data, linkGet, linkAdd, linkDelete, linkUpdate}){

    const [ticketModal, setTicketModal] = useState({'status': false, 'type': ''})
    const [cartModal, setCartModal] = useState({'status': false, 'data': data})

    const handleTicketModal = useCallback((status, type) => {
        document.querySelectorAll('#ticket-select option').forEach(opt => {
            if(opt.getAttribute('value') === type){
                opt.setAttribute('selected', 'selected')
            }
        })
        setTicketModal({'status': status, 'type': type})
    }, [])

    useEffect(() => {
        if(ticketModal.status){
            document.querySelector('#ticket-modal').style.display = 'block'
        }else{
            document.querySelector('#ticket-modal').style.display = 'none'
        }
    }, [ticketModal.status])

    const styles = {'marginTop': `${-height}px`, 'paddingTop': `${height}px`}

    return (
        <div id="ticket" style={styles}>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-4 text-center">
                        <h1>Ticket</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="ticket-container">
                            <div className="ticket-wrap">
                                <div className="ticket-title text-center my-3">
                                    <h2>$599</h2>
                                </div>
                                <hr></hr>
                                <div className="ticket-content">
                                    <p>The location is farthest from the stage and must use the common entry.</p>
                                    <button className="btn btn-outline-primary" onClick={() => handleTicketModal(true, 599)}>Purchase ticket</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div id="special-ticket" className="ticket-container">
                            <div className="ticket-wrap">
                                <div className="ticket-title text-center my-3">
                                    <h2>$999</h2>
                                </div>
                                <hr></hr>
                                <div className="ticket-content">
                                    <p>Enjoy incentives such as a central location near the stage, priority for a private entrance, be given a gift when entering the gate.</p>
                                    <button className="btn btn-outline-primary" onClick={() => handleTicketModal(true, 999)}>Purchase ticket</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="ticket-container">
                            <div className="ticket-wrap">
                                <div className="ticket-title text-center my-3">
                                    <h2>$799</h2>
                                </div>
                                <hr></hr>
                                <div className="ticket-content">
                                    <p>Good viewing position of the stage, must use the common entry and be given a gift when entering the gate.</p>
                                    <button className="btn btn-outline-primary" onClick={() => handleTicketModal(true, 799)}>Purchase ticket</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-12 text-center">
                        <button className="btn btn-success" type="button" onClick={() => setCartModal({'status': true, 'data': data})}>
                            <i className="fa-solid fa-cart-shopping icon"></i>
                            Check your cart
                        </button>
                    </div>
                </div>
            </div>
            <TicketModal selected={ticketModal.type}
                handleTicketModal={handleTicketModal}
                linkAdd={linkAdd}
            />
            {cartModal.status && <CartModal
                ticketData={cartModal.data}
                setCartModal={setCartModal}
                linkGet={linkGet}
                linkDelete={linkDelete}
                linkUpdate={linkUpdate}
            />}
        </div>
    )
}

export default memo(Ticket)