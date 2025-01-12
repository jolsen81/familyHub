import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import {store} from "./store/store.js"
import {StyledEngineProvider} from "@mui/material"
import {Modals} from "./components/index.js"
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StyledEngineProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Modals/>
                <App />
            </LocalizationProvider>
        </StyledEngineProvider>
    </Provider>,
)
