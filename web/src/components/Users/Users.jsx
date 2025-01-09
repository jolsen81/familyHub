import {useGetUsersQuery} from "../../api/service.js"

export const Users = () => {
    const { data, error, isLoading } = useGetUsersQuery()
  return (
        <div
            role={'tabpanel'}
            style={{height: '100%', width: '100%', justifyContent: 'center'}}
        >
            {!isLoading && (
                data?.message || error?.message
            )}
            data here
        </div>

  )
}

export default Users
