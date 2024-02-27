// import Hero from '../components/hero'
// import About from '../components/about'
import { useState } from 'react'
import Head from 'next/head'
import { Heading, HStack, VStack, Tag, Button, Icon , Center, Box, useColorModeValue, keyframes } from '@chakra-ui/react'
import { ChevronDownIcon  } from '@chakra-ui/icons'
import { PaintBrushIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import Spotlight from './spotlight'
import { motion } from 'framer-motion'

const BLANK_ROLE = '______'

const bounce = keyframes`  
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

const bounceAnimation = `${bounce} infinite 1s`

export default function Home() {
  const [role, setRole] = useState(BLANK_ROLE)
  const theme = useColorModeValue()

  return (
    <>
      <Head><title>Tiffany K. Nguyen</title></Head>
      <VStack spacing={4} width="full">
        <Hero role={role} setRole={setRole} theme={theme} />
        <Spotlight role={role}/>
      </VStack>
      
    </>
  )
}

const Hero = ({ role, setRole, theme }) => (
  <Box minHeight="100vh" width="full" pos="relative">
    <Center minHeight="100vh" width="full">
      <VStack>
        <HStack spacing={3}>
          <Heading size="4xl">Hi</Heading>
          <Heading size="4xl" as={motion.h2} pr={2}
            transformOrigin="bottom right" whileHover={{ rotate: [0, -10, 5, -5, 0] }}
          >
            👋
          </Heading>
          <Heading size="4xl">I'm Tiff,</Heading>
        </HStack>
        <HStack>
          <Heading size="4xl">{['a', 'e', 'i', 'o', 'u'].includes(role[0]) ? 'an' : 'a'}</Heading>
          <Tag colorScheme="blue"><Heading size="4xl" p={3} pt={1}>{role}</Heading></Tag>
        </HStack>
        <HStack pb={36} py="8">
          <Button leftIcon={<Icon as={CodeBracketIcon}/>} variant="outline" onClick={() => setRole('software engineer')}>software engineer</Button>
          <Button leftIcon={<Icon as={PaintBrushIcon}/>} variant="outline" onClick={() => setRole('artist')}>artist</Button>
          {/* <Button leftIcon={<Icon as={PaintBrushIcon}/>} variant="outline" onClick={() => setRole('artist')}>artist</Button> */}
        </HStack>
      </VStack>
    </Center>
   {role != BLANK_ROLE && <ChevronDownIcon boxSize={10} pos="absolute" bottom="10" left="calc(50vw - 1.25rem)" animation={bounceAnimation} transition="ease"/>}
  </Box>

)
