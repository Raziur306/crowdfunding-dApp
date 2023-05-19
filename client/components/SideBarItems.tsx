import { Box, Icon, IconButton, List } from '@mui/material'
import React, { useState } from 'react'
import { sideBarItems } from '../utils/drawerItems'
import { StyledMenuItem } from '../styles/drawerStyles'
import { useDisconnect } from '@thirdweb-dev/react'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useRouter } from 'next/router'


const SideBarItems = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const disconnectWallet = useDisconnect();
  const router = useRouter();

  const handleSideBarItemClick = (index: number) => {
    if (index == (sideBarItems.length - 1)) {
      disconnectWallet();
    }
    setSelectedMenu(index);
    router.push(sideBarItems[index].route)
  }

  return (
    <Box sx={{ pt: 1.5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <List>
        {sideBarItems.map((item, index) => {
          return <Box key={index} sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 3 }}>
            <StyledMenuItem onClick={() => handleSideBarItemClick(index)} selected={selectedMenu == index} >
              <item.icon />
            </StyledMenuItem>
          </Box>
        })}
      </List >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
        <StyledMenuItem>
          <LightModeOutlinedIcon />
        </StyledMenuItem>
      </Box>
    </Box >

  )
}

export default SideBarItems