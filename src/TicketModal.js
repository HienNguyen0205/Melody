import { useState, useEffect, memo} from 'react'
import { collection, addDoc } from "firebase/firestore"
import { db } from './db'
import Message from './Message'

function TicketModal({selected, handleTicketModal}) {

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [price, setPrice] = useState()
    const [message, setMessage] = useState({'message1': '', 'message2': ''})
    const [alert, setAlert] = useState({message: '', changeState: false})

    async function addCart() {
        const ref = collection(db, 'CartItems')
        await addDoc(ref, {
            email: email,
            isPurchased: false,
            name: name,
            number: number,
            price: price
        }).then(() => {
            setAlert({message: "Add Successfully!", changeState: false})
        }).catch(error => console.error(error))
    }

    useEffect(() => {
        setPrice(selected)
    }, [selected])

    const handleSubmit = e => {
        let message1 = ''
        let message2 = ''
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        e.preventDefault()
        if(!name.trim()){
            message1 = 'Please enter your name.'
        }else{
            message1 = ''
        }
        if (!email.trim()) {
            message2 = 'Please enter your email.'
        }else if (!email.match(emailRegex)) {
            message2 = 'Email address is invalid.'
        }else {
            message2 = ''
        }
        if(message1 === '' && message2 === ''){
            addCart()
            handleDelete()
        }else{
            setMessage({'message1': message1, 'message2': message2})
        }
    }

    const handleDelete = () => {
        setEmail('')
        setName('')
        setNumber(1)
    }

    return (
        <div id="ticket-modal" className="modal bg-secondary py-5">
            <Message message={alert.message} state={alert.changeState}/>
            <div className="modal-dialog">
                <div className="modal-content rounded-5 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="modal-title">Purchase Ticket</h2>
                        <i className="fa-solid fa-xmark close-icon" onClick={() => {handleTicketModal(false, '')
                            handleDelete()
                        }}></i>
                    </div>
                    <div className="modal-body p-5 pt-0">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name">Name:</label>
                                <input id="name" type="text" className="form-control rounded-4" placeholder="Your name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <p><small style={{'color': 'red'}}>{message.message1}</small></p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email address:</label>
                                <input id="email" type="email" className="form-control rounded-4" placeholder="Your email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <p><small style={{'color': 'red'}}>{message.message2}</small></p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type">Ticket type:</label>
                                <select id="ticket-select" className="form-select" 
                                    onChange={e => setPrice(e.target.value)} value={price}>
                                    <option value="999">V.I.P ticket - $999</option>
                                    <option value="799">Priority ticket - $799</option>
                                    <option value="599">Normal ticket - $599</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type">Number:</label>
                                <select className="form-select" 
                                    onChange={e => setNumber(e.target.value)} value={number}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <button className="w-100 mb-2 btn rounded-4 btn-primary" type="submit">Add to cart</button>
                            <button className="w-100 mb-2 btn rounded-4 btn-danger" type="button" onClick={() => {handleTicketModal(false, '')
                                    handleDelete()
                                }}>
                                Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(TicketModal)