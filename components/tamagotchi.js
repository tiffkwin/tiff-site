import { Box, Center, Button } from '@chakra-ui/react'
import { useState } from 'react'

import tamagotchi from '../utils/tamagotchi';

export default function Tamagotchi() {

  const [tamagotchiState, setTamagotchiState] = useState(tamagotchi.rest)
  const [stateTimeout, setStateTimeout] = useState()
  const [restTimeout, setRestTimeout] = useState()

  const callTemporaryState = (temporaryState) => {
    clearTimeout(stateTimeout)
    clearTimeout(restTimeout)

    setTamagotchiState(temporaryState)

    const stateTimeoutId = setTimeout(() => { setTamagotchiState(tamagotchi.heart) }, 2000)
    const restTimeoutId = setTimeout(() => { setTamagotchiState(tamagotchi.rest) }, 4000)

    setStateTimeout(stateTimeoutId)
    setRestTimeout(restTimeoutId)
  }

  return (
    <section id="friend">
      <Center width="full" minHeight="100vh" height="full" color="white" marginTop="4rem">
        <Box width="400px" height="500px" position="relative">
          <Box w="full" h="full" border="3px solid #2A479F" borderRadius="50% 50% 50% 50% / 60% 60% 40% 40%" bg="linear-gradient(#558BF6,#1449b3)" />
          <Box w="250px" h="200px" position="absolute" bg="white" top="125px" left="75px" borderRadius="md" border="3px solid #2A479F"/>
          <Button w="50px" h="50px" position="absolute" bg="linear-gradient(#558BF6,#1449b3)" borderRadius="full" bottom="90px" left="90px" border="3px solid #2A479F" _hover={{ bgColor: "#3975ed", filter: "brightness(75%)" }}
            onClick={() => callTemporaryState(tamagotchi.eat)}
          >
            A
          </Button>
          <Button w="50px" h="50px" position="absolute" bg="linear-gradient(#558BF6,#1449b3)" borderRadius="full" bottom="70px" left="175px" border="3px solid #2A479F" _hover={{ bgColor: "#3975ed", filter: "brightness(75%)" }}
            onClick={() => callTemporaryState(tamagotchi.poop)}
          >
            B
          </Button>
          <Button w="50px" h="50px" position="absolute" bg="linear-gradient(#558BF6,#1449b3)" borderRadius="full" bottom="90px" left="260px" border="3px solid #2A479F" _hover={{ bgColor: "#3975ed", filter: "brightness(75%)" }}
            onClick={() => callTemporaryState(tamagotchi.sleep)}
          >
            C
          </Button>
          <Box boxShadow={tamagotchiState} h="10px" w="10px" position="absolute" top="125px" left="90px"/>
        </Box>
      </Center>
    </section>
  )
}