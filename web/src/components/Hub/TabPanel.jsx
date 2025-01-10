import { Box } from "@mui/material"
import {useMemo } from "react"

export const TabPanel = (props) => {
    const { selectedTab, tabIndex } = props
    const isSelectedTab = useMemo(() => {
        return selectedTab === tabIndex
    }, [tabIndex, selectedTab], [tabIndex, selectedTab])

  return (
      <>
          { isSelectedTab &&
      <Box
          id={'tabs'}
          sx={{ flexGrow: 1, display: 'flex', height: '100%', width: '100%', justifyItems: 'center', paddingLeft: '2.4rem', paddingRight: '2.4rem'}}
      >
          {props.children}
      </Box>
          }
      </>
  )
}

