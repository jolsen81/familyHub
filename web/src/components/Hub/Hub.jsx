import {Box, Tab, Tabs} from "@mui/material";
import {useState} from "react";
import Users from "../Users";

export const Hub = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
  return (
      <Box
          sx={{ flexGrow: 1, display: 'flex', height: '100%', width: '100%', alignItems: 'center'}}
      >
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={selectedTab}
              onChange={handleChange}
              sx={{ borderRight: 1, borderColor: 'divider', height: '100%', alignItems: 'center', justifyContent: 'flex-end'}}
          >
              <Tab label={'Users'} aria-controls={'vertical-tabpanel-0'}/>
              <Tab label={'Calendars'} aria-controls={'vertical-tabpanel-1'}/>
          </Tabs>
              <Users/>
      </Box>
  )
}

export default Hub
