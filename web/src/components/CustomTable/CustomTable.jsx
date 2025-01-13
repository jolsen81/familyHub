import {
    Box,
    Paper,
    SpeedDial, SpeedDialAction, SpeedDialIcon,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {Check, Close, Delete, Edit, MoreVert} from "@mui/icons-material";
import {red} from "@mui/material/colors";
import {useState} from "react";

const PROVIDERS = Object.freeze({
    ATT: {
        provider: 'ATT',
        title: 'AT&T'
    }
})

export const ACTIONS = Object.freeze({
    DELETE: 'delete',
    EDIT: 'edit',
})

export const CELL_TYPES = Object.freeze({

})

export const CustomTable = (props) => {
    const { data, columnDefs, actions } = props

    const [openAction, setOpenAction] = useState()

    const getActionButtons = (rowData, idx) => {
        if (!actions?.length) {
            return undefined
        }
        return (
            <Box display={'flex'} justifyContent={'center'} >
                <SpeedDial
                    size={'small'}
                    ariaLabel={'actions'}
                    icon={<SpeedDialIcon
                        openIcon={<Close/>}
                    />}
                    direction={"left"}
                    onClick={() => {
                        setOpenAction(openAction === idx ? undefined : idx)
                    }}
                    open={openAction === idx}
                >
                {actions.map((action) => {
                    let icon
                    switch (action.type) {
                        case ACTIONS.DELETE:
                            icon = <Delete sx={{color: red[600]}}/>
                            break
                        case ACTIONS.EDIT:
                            icon = <Edit/>
                            break
                        default:
                            icon = ''
                    }

                    return (<SpeedDialAction key={action.type} onClick={() => action.func(rowData)} icon={icon}/>)
                }) || <></>}
                </SpeedDial>
            </Box>
        )
    }

    const writeData = (value, type) => {
        switch (type) {
            case "DATE":
                const date = new Date(value)
                //TODO: create a hook to evaluate this and make the time zone and format an app setting
                const formattedDate = new Intl.DateTimeFormat("en-US",{
                    timeZone: "America/Los_Angeles",
                    dateStyle: 'full',
                }).format(date)
                return formattedDate
            case "PROVIDER":
                return value ? PROVIDERS[value].title : undefined
            case "BOOLEAN":
                const checkComp = value ? <Check/> : undefined
                return (
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center'
                        }}
                    >
                        {checkComp}
                    </div>
                )
            case "COLOR_ICON":
                return (
                    <div
                        style={{
                            width: '100%',
                            justifyItems: 'center'
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: value,
                                borderRadius: '50%',
                                width: '1.8rem',
                                height: '1.8rem',
                                color: 'white',
                                fontSize: 24,
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex',
                        }}
                    />
                    </div>
                )
            default:
                return value
        }
    }

    return (
        <Box height={'100%'} width={'100%'}>
            <TableContainer component={Paper}>
                <Table sx={{width: '100%', height: '100%'}}>
                    <TableHead>
                        <TableRow>
                            {columnDefs.map((col, idx) => {
                                return (
                                    <TableCell key={idx}>{col.title}</TableCell>
                                )
                            })}
                            <TableCell key={'actions'}/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((rowData, idx) => {
                        return (
                            <TableRow key={idx}>
                                { columnDefs.map((def, index) => {
                                    const { key, type } = def
                                    const value = rowData[key]
                                return (
                                    <TableCell key={index}>
                                        {writeData(value, type)}
                                    </TableCell>
                                )
                            }) }
                                <TableCell key={`actions-${idx}`}>
                                    {getActionButtons(rowData, idx)}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
      </Box>
  )
}

export default CustomTable
