import { useState, useEffect, memo} from 'react'
import { db } from './db'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import Message from './Message'

function CartModal({setCartModal}) {
    
    const [purchase, setPurchase] = useState(false)
    const [alert, setAlert] = useState({message: '', changeState: false})
    const [keyDelete, setKeyDelete] = useState({id: 0})
    const [tickets, setTickets] = useState()

    async function getCart() {
        const ref = collection(db, 'CartItems')
        await getDocs(ref).then((response) => {
            const cart = response.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
            console.log(cart)
            setTickets(cart)
        })
        .catch((error) => console.error(error))
    }

    async function deleteCartItem() {
        const ref = doc(db, 'CartItems' , keyDelete.id)
        await deleteDoc(ref).then(() => {
            handleAlert('Delete Successfully!')
            getCart()
        })
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        getCart()
    }, [])

    useEffect(() => {
        if(keyDelete.id !== 0){
            deleteCartItem()
        }
        if(purchase){
            db.collection('CartItems').get().then((snapshot) => {
                return Promise.all(snapshot.documents.map(doc => {
                  return doc.ref.update({isPurchase: true})
                }))
            })
            handleAlert("Purchase Successfully!")
            setPurchase(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyDelete.id, purchase])

    const handleDelete = id => {
        setKeyDelete({id: id})
    }

    const handleClose = () => {
        setCartModal(false)
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
                                {Array.isArray(tickets) && tickets.map(ticket => {
                                    return (
                                        <tr key={ticket.id}>
                                            <td>{ticket.data.name}</td>
                                            <td>{ticket.data.email}</td>
                                            <td>{ticket.data.price}</td>
                                            <td>{ticket.data.number}</td>
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