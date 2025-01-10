import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { Users } from '../index.js'
import {CalendarMonth, People} from "@mui/icons-material"
import {TabPanel} from "./TabPanel.jsx";

export const Hub = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
  return (
      <Box
          id={'hub-wrapper'}
          sx={{
              height: '100%',
              width: '100%',
              backgroundColor: 'hsla(215, 15%, 97%, 0.5)',
              display: 'flex',
              flexDirection: 'column'
          }}
      >
          <Box margin={'1.2rem'}>Time/Date weather</Box>
          <Box
          id={'hub'}
          sx={{ flexGrow: 1, display: 'flex', height: '100%', width: '100%', backgroundColor: 'hsla(215, 15%, 97%, 0.5)'}}
      >
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={selectedTab}
              onChange={handleChange}
              sx={{ borderRight: 1, borderColor: 'divider', height: '100%'}}
          >
              <Tab icon={<People/>} aria-controls={'vertical-tabpanel-0'}/>
              <Tab icon={<CalendarMonth/>} aria-controls={'vertical-tabpanel-1'}/>
          </Tabs>
          <TabPanel tabIndex={0} selectedTab={selectedTab}>
              <Users/>
          </TabPanel>
      </Box>
      </Box>
  )
}

export default Hub
