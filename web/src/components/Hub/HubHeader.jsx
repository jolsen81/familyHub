import {useCallback, useEffect, useMemo, useState} from "react";
import {Box} from "@mui/material";
import {cyan, grey} from "@mui/material/colors";
import {Air} from "@mui/icons-material";
import {useGetUsersQuery} from "../../store/api/service.js";

export const HubHeader = () => {
    const parseTimeCallback = useCallback((date) => {
        const formattedFullDate = new Intl.DateTimeFormat("en-US",{
            timeZone: "America/Los_Angeles",
            dateStyle: 'full',
        }).format(date)

        const parsedTime = date.toLocaleTimeString().split(' ')
        return {
            date: `${formattedFullDate} ${parsedTime[0]}`,
            period: parsedTime[1]
        }
    }, [])
    const initialDate = new Date()
    const [time, setTime] = useState(parseTimeCallback(initialDate).date)
    const [period, setPeriod] = useState(parseTimeCallback(initialDate).period)

    const { data: users } = useGetUsersQuery()

    const userIcons = useMemo(() => {
        return users?.map((user) => {
            const nicknameInitials = user.nickname?.split(' ').map((name) => {
                return name[0]
            }).join('')
            const initials = nicknameInitials || `${user.firstName[0]}${user.lastName[0]}`
            return (
                <div
                    key={user._id}
                    style={{
                        backgroundColor: user.iconColor,
                        borderRadius: '50%',
                        width: '3.6rem',
                        height: '3.6rem',
                        minWidth: '3.6rem',
                        minWHeight: '3.6rem',
                        color: 'white',
                        fontSize: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        marginRight: '0.6rem'
                    }}
                >{initials}</div>
            )
        })
    }, [users])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date()
            const {period, date: dateTime} = parseTimeCallback(date)
            setPeriod(period)
            setTime(dateTime)
        }, 1000)

        return () => clearInterval(intervalId)
    }, []);

    return (
        <Box display={'flex'} flexDirection={'row'} height={'5rem'} justifyContent={'space-evenly'} alignItems={'center'}  paddingRight={'1.2rem'} style={{backgroundColor: cyan[400]}}>
            <Box
                margin={'1.2rem'}
                justifyContent={'flex-start'}
                width={'100%'}
                fontSize={24}
                display={"flex"}
                alignItems={'center'}
                height={'100%'}
            >
                <Box minWidth={'23.4rem'}>
                    {`${time}\u0020`}
                </Box>
                <Box marginRight={'1.2rem'}>{period}</Box>
                <Box display={'flex'} marginRight={'1.2rem'} alignItems={'center'} width={'100%'} justifyContent={'center'} borderRadius={'0.8rem'} style={{backgroundColor: cyan[500]}}>
                    <Air sx={{fill: grey[600]}} color={grey[500]}/>
                    {`\u002070\u00B0F`}
                </Box>
            </Box>
            {userIcons}
        </Box>
    )
}