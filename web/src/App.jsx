import { Hub } from './components'
import { Box } from "@mui/material";

function App() {
  return (
        <Box
            id={'app'}
            height={'100%'}
            overflow={'auto'}
            xs={{
                height: '100%',
                width: '100%',
            }}
        >
            <Hub/>
        </Box>
  )
}

export default App
