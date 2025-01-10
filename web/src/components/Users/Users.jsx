import {useGetUsersQuery} from "../../api/service.js"
import {CustomTable} from "../index.js";
import {Box, IconButton} from "@mui/material";
import {Add, PersonAdd} from "@mui/icons-material";

export const Users = () => {
    const { data, isLoading } = useGetUsersQuery()
    const columnDefs = [
        {title: 'First', key: 'firstName', type: 'STRING'},
        {title: 'Last', key: 'lastName', type: 'STRING'},
        {title: 'Nickname', key: 'nickname', type: 'STRING'},
        {title: 'DOB', key: 'dob', type: 'DATE'},
        {title: 'Email', key: 'email', type: 'STRING'},
        {title: 'Icon Color', key: 'iconColor', type: 'STRING'},
        {title: 'ID', key: '_id', type: 'STRING'},
    ]
  return (
        <Box
            role={'users'}
            style={{height: '100%', width: '100%', margin: 0, display: 'flex', flexGrow: 1, flexDirection: 'column'}}
            xs={{height: '100%', width: '100%',}}
        >
            {!isLoading && <CustomTable data={data} columnDefs={columnDefs}/>}
            <Box>
            <IconButton size={'large'} style={{backgroundColor: 'purple'}}>
                <PersonAdd/>
            </IconButton>
            </Box>
        </Box>

  )
}

export default Users
