import { Link, Box, Spacer, Text, Center, HStack } from '@chakra-ui/react'

export default function Nav() {
  //f25a35
  //3F69CC

  return (
    <Center width="full" fontFamily="Raleway" fontWeight="bold" paddingTop="4">
      <HStack w="full">
        <Link color="white" fontFamily="Paytone One" marginLeft="6" _hover={{ textDecoration: "none" }} href="/">
            <Box border="2px solid #2A479F">
              <Box border="2px solid white">
                <Text fontSize="large" padding="2" bg="#2A479F">TN</Text>
              </Box>
            </Box>
          </Link>
        <Spacer/>
        <HStack borderRadius="sm" paddingY="4" paddingX="16" 
        // border="2px solid #558BF6" 
        spacing="8" fontFamily="Raleway" fontWeight="bold" color="#558BF6">
          <Link href="#about">ABOUT</Link>
          <Box height="1rem" w="1px" bg="#558BF6"></Box>
          <Link href="#friend">FRIEND</Link>
          <Box height="1rem" w="1px" bg="#558BF6"></Box>
          <Link href="https://github.com/tiffkwin/" target="_blank">WORK</Link>
        </HStack>
        <Spacer/>
        <Box width="5rem" />
      </HStack>
    </Center>
  )
}