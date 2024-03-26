import { Link, Box, Spacer, Text, Center, HStack, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Nav() {
  //f25a35
  //3F69CC

  return (
    <Center width="full" fontFamily="Raleway" fontWeight="bold" paddingTop="4">
      <HStack w="full" marginX="6">
        <Link color="white" fontFamily="Paytone One" _hover={{ textDecoration: "none" }} href="/">
            <Box border="2px solid #2A479F">
              <Box border="2px solid white">
                <Text fontSize="large" padding="2" bg="#2A479F">TN</Text>
              </Box>
            </Box>
          </Link>
        <Spacer/>
        <HStack borderRadius="sm" paddingY="4" paddingX="16" 
        // border="2px solid #558BF6" 
        spacing="8" fontFamily="Raleway" fontWeight="bold" color="#558BF6" display={['none', 'flex', 'flex', 'flex']}>
          <Link href="#about">ABOUT</Link>
          <Box height="1rem" w="1px" bg="#558BF6"></Box>
          <Link href="#friend">FRIEND</Link>
          <Box height="1rem" w="1px" bg="#558BF6"></Box>
          <Link href="https://github.com/tiffkwin/" target="_blank">WORK</Link>
        </HStack>
        <Spacer/>
        <Box width="5rem" display={['none', 'flex', 'flex', 'flex']}/>
        <Menu zIndex={99}>
          <MenuButton as={IconButton} icon={<HamburgerIcon />} zIndex={99} bgColor="white" display={['block', 'none', 'none', 'none']}/>
          <MenuList>
            <MenuItem href="#about" as="a">About</MenuItem>
            <MenuItem href="#friend" as="a">Friend</MenuItem>
            <MenuItem href="https://github.com/tiffkwin/" as="a">Work</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Center>
  )
}