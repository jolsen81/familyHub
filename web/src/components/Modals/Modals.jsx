import {Dialog, DialogTitle} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, MODAL_TYPES} from "../../store/reducers/modal.js";
import {CreateUser} from "./CreateUser";
import {useMemo, useState} from "react";

export const Modals = () => {
    const dispatch = useDispatch()
    const { open, modalType } = useSelector(state => state.modal)

    const [title, setTitle] = useState("")

    const handleOnClose = () => {
        dispatch(closeModal())
    }

    const content = useMemo(() => {
        switch (modalType) {
            case MODAL_TYPES.CREATE_USER:
                setTitle('Create User')
                return <CreateUser onClose={handleOnClose}/>
            default:
                return <></>
        }
    }, [modalType])

    return (
        <Dialog
            open={open}
            onClose={handleOnClose}
            scroll={'paper'}
            fullWidth
        >
            <DialogTitle>{ title }</DialogTitle>
            {content}
        </Dialog>
    )
}

export default Modals