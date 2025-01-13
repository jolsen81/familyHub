import {useDeleteUserMutation, useGetRedirectQuery, useGetUsersQuery} from "../../store/api/service.js"
import {CustomTable} from "../index.js";
import {Box, Fab } from "@mui/material";
import {PersonAdd} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {MODAL_TYPES, openModal} from "../../store/reducers/modal.js"
import {cyan} from "@mui/material/colors"
import {ACTIONS} from "../CustomTable/CustomTable.jsx";

export const Users = () => {
    const dispatch = useDispatch()
    const { data: users, isLoading } = useGetUsersQuery()
    const {data: meh} = useGetRedirectQuery()
    const [ deleteUser ] = useDeleteUserMutation()
    const columnDefs = [
        {title: 'First', key: 'firstName', type: 'STRING'},
        {title: 'Last', key: 'lastName', type: 'STRING'},
        {title: 'Nickname', key: 'nickname', type: 'STRING'},
        {title: 'DOB', key: 'dob', type: 'DATE'},
        {title: 'Phone', key: 'phone', type: 'STRING'},
        {title: 'Provider', key: 'provider', type: 'PROVIDER'},
        {title: 'Email', key: 'email', type: 'STRING'},
        {title: 'Icon Color', key: 'iconColor', type: 'COLOR_ICON'},
        {title: 'Rewards', key: 'rewards', type: 'BOOLEAN'},
        {title: 'ID', key: '_id', type: 'STRING'},
    ]

    const onDelete = (rowData) => {
        deleteUser({id: rowData._id})
    }

    const onEdit = (rowData) => {
        dispatch(openModal({modalType: MODAL_TYPES.EDIT_USER, data: rowData}))
    }

    const actions = [
        {
            type: ACTIONS.DELETE,
            func: onDelete
        },
        {
            type: ACTIONS.EDIT,
            func: onEdit
        }
    ]
    const handleCreateNewUser = () => {
        dispatch(openModal({modalType: MODAL_TYPES.CREATE_USER}))
    }

  return (
        <Box
            id={'users'}
            style={{height: '100%', width: '100%', margin: 0, display: 'flex', flexGrow: 1, flexDirection: 'column'}}
            xs={{height: '100%', width: '100%',}}
        >
            {!isLoading && <CustomTable data={users} columnDefs={columnDefs} actions={actions}/>}
            <Box>
                <Box width={'100%'} display={'flex'} justifyContent={'flex-end'}>
            <Fab
                size={'large'}
                style={{backgroundColor: cyan[500], marginBottom: '1.2rem'}}
                onClick={handleCreateNewUser}
            >
                <PersonAdd/>
            </Fab>
                </Box>
            </Box>
        </Box>

  )
}

export default Users
