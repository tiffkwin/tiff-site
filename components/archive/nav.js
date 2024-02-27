import { Menu, MenuButton, MenuList, MenuItem, IconButton, Icon, Box, useColorMode } from '@chakra-ui/react'
import { HamburgerIcon, TimeIcon, CopyIcon, StarIcon, MoonIcon } from '@chakra-ui/icons'
import { HomeIcon } from '@heroicons/react/24/solid'

export default function Nav() {
  const { toggleColorMode } = useColorMode()

  return (
    <>
    {/* // <Box width="full" position="relative" height="3rem"> */}
      <Menu zIndex={99}>
        <MenuButton as={IconButton} icon={<HamburgerIcon />} position="absolute" top="3" left="3" variant="ghost" zIndex={99}/>
        <MenuList>
          <MenuItem href="/" as="a" icon={<Icon as={HomeIcon} />}>Home</MenuItem>
          <MenuItem href="/timeline" as="a" icon={<TimeIcon />}>Timeline</MenuItem>
          <MenuItem href="/projects" as="a" icon={<CopyIcon />}>Projects</MenuItem>
          <MenuItem as="a" icon={<StarIcon />}>For fun</MenuItem>
        </MenuList>
      </Menu>
      <IconButton onClick={toggleColorMode} icon={<MoonIcon />} position="absolute" top="3" right="3" variant="ghost" zIndex={99}/>
    {/* // </Box> */}
    </>
  )
}