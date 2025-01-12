import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Check} from "@mui/icons-material";

const PROVIDERS = Object.freeze({
    ATT: {
        provider: 'ATT',
        title: 'AT&T'
    }
})

export const CustomTable = (props) => {
    const { data, columnDefs } = props

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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row, idx) => {
                        return (
                            <TableRow key={idx}>
                                { columnDefs.map((def, index) => {
                                    const { key, type } = def
                                    const value = row[key]
                                return (
                                    <TableCell key={index}>
                                        {writeData(value, type)}
                                    </TableCell>
                                )
                            }) }
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
