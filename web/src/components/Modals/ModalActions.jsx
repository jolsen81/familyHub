import {Button, DialogActions} from "@mui/material";

export const ModalActions = (props) => {
    const {onClose, onSubmit} = props
    const handleClose = () => {
        onClose()
    }

    const handleSubmit = () => {
        onSubmit()
    }

    return (
        <DialogActions>
            <Button onClick={handleClose} variant={'contained'}>Cancel</Button>
            <Button onClick={handleSubmit} variant={'outlined'}>Submit</Button>
        </DialogActions>
    )
}