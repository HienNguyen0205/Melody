import { useState, useEffect, memo} from 'react'
import Message from './Message'

function CartModal({ticketData ,setCartModal, linkGet, linkDelete, linkUpdate}) {
    
    const [purchase, setPurchase] = useState(false)
    const [alert, setAlert] = useState({message: '', changeState: false})
    const [keyDelete, setKeyDelete] = useState({id: 0})
    const [tickets, setTickets] = useState(ticketData)

    useEffect(() => {
        const fetchData = async () => {
            if(keyDelete.id !== 0){
                let response = await fetch(linkDelete, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(keyDelete)
                })
                let result = await response.json()
                handleAlert(result)
            }
            if(purchase){
                let response = await fetch(linkUpdate, {
                    method: 'POST',
                })
                let result = await response.json()
                handleAlert(result)
                setPurchase(false)
            }
            let response = await fetch(linkGet,{
                method: 'GET'
            })
            let result = await response.json()
            console.log(result.data)
            setTickets(result.data)
        }
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyDelete, purchase])

    const handleDelete = id => {
        setKeyDelete({id: id})
    }

    const handleClose = () => {
        setCartModal({'status': false, 'data': tickets})
        setPurchase(false)
    }

    const handleAlert = result => {
        if(alert.changeState){
            setAlert({message: result.data, changeState: false})
        }else{
            setAlert({message: result.data, changeState: true})
        }
    }

    return (
        <div className="modal bg-secondary" style={{'display': 'block'}}>
            <Message message={alert.message} state={alert.changeState}/>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Your Cart</h4>
                        <i className="fa-solid fa-xmark close-icon" onClick={() => handleClose()}></i>
                    </div>
                    <div id="table-container" className="modal-body">
                        <table id="table" className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Ticket type</th>
                                    <th>Quantity</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(tickets) && tickets.map((ticket) => {
                                    return (
                                        <tr key={ticket.id}>
                                            <td>{ticket.name}</td>
                                            <td>{ticket.email}</td>
                                            <td>{ticket.price}</td>
                                            <td>{ticket.number}</td>
                                            <td>
                                                <button type="button" className="btn btn-danger" 
                                                    onClick={() => handleDelete(ticket.id)}>
                                                    Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="w-50 btn btn-success" 
                            onClick={() => {setPurchase(true)}}>
                            Purchase</button>
                        <button type="button" className="w-50 btn btn-danger" 
                            onClick={() => handleClose()}>
                            Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(CartModal)