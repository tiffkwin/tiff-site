import {  VStack, HStack, Center, Heading, Image, Text } from '@chakra-ui/react'

export default function Hero() {

  return (
    <Center h="full" w="full" paddingX="20px" paddingY="2" minH="60vh">
      <HStack height="full" spacing="3rem">
        <VStack align="end" spacing="0" color="#2A479F" pl="4">
          <Heading fontFamily="Paytone One" fontSize="7xl" lineHeight="2.5rem">TIFFANY</Heading>
          <Heading fontFamily="Paytone One" fontSize="7xl">NGUYEN</Heading>
          <Text fontFamily="Raleway" marginBottom="2rem" fontWeight="extrabold" color="#558BF6">SOFTWARE ENGINEER</Text>
        </VStack>
        <Image src="/3d-room.png" h="500px" marginLeft="4rem" display={['none', 'none', 'block']}/>
      </HStack>
    </Center>
  )
}