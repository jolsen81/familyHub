import {useGetUsersQuery} from "../../store/api/service.js"
import {CustomTable} from "../index.js";
import {Box, IconButton} from "@mui/material";
import {PersonAdd} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {MODAL_TYPES, openModal} from "../../store/reducers/modal.js"
import {cyan} from "@mui/material/colors"

export const Users = () => {
    const dispatch = useDispatch()
    const { data: users, isLoading } = useGetUsersQuery()
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

    const handleCreateNewUser = () => {
        dispatch(openModal({modalType: MODAL_TYPES.CREATE_USER}))
    }

  return (
        <Box
            id={'users'}
            style={{height: '100%', width: '100%', margin: 0, display: 'flex', flexGrow: 1, flexDirection: 'column'}}
            xs={{height: '100%', width: '100%',}}
        >
            {!isLoading && <CustomTable data={users} columnDefs={columnDefs}/>}
            <Box>
                <Box width={'100%'} display={'flex'} justifyContent={'flex-end'}>
            <IconButton
                size={'large'}
                style={{backgroundColor: cyan[500], marginBottom: '1.2rem'}}
                onClick={handleCreateNewUser}
            >
                <PersonAdd/>
            </IconButton>
                </Box>
            </Box>
        </Box>

  )
}

export default Users
