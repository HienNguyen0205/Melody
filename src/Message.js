import { useState , useEffect , memo } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Message({message, state}){

    const [mesInfo, setMesInfo] = useState({
        open: false,
        vertical: '',
        horizontal: ''
    })

    useEffect(() => {
        if(message !== ''){
            setMesInfo({
                open: true,
                vertical: 'top',
                horizontal: 'right'
            })
        }
    }, [state, message])

    const handleClose = () => {
        setMesInfo({...mesInfo, open: false });
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical:'top', horizontal:'right' }}
            open={mesInfo.open}
            onClose={handleClose}
            autoHideDuration={3000}
            key={mesInfo.vertical + mesInfo.horizontal}
        >
            <Alert onClose={handleClose} severity="success" variant="filled">{message}</Alert>
        </Snackbar>
    )
}

export default memo(Message)