import { Heading, Box, VStack, Image, Text, Center, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function Nav() {
  //f25a35

  return (
    <section id="about">
      <Center width="full" minHeight="100vh" height="full" color="white" marginTop="4rem">
        <Box width={["70vw", "70vw", "70vw", "60vw"]} border="3px solid #558BF6" borderRadius="md" position="relative" p="12" color="#2A479F">
          <Heading
            px="2" py="1" 
            position="absolute" top="-8" left="8"
            bg="white" fontSize="xx-large" fontFamily="Paytone One" 
            textDecoration="underline" borderRadius="sm">
              ABOUT
          </Heading>
          <VStack fontFamily="Raleway" fontSize="lg" alignItems="start" maxW={["full", "full", "full", "50%", "60%"]}>
            <HStack w="full">
              <Text fontSize="xx-large" fontFamily="Paytone One">Hi, I'm Tiff </Text><br/>
              <Text as={motion.h2} transformOrigin="bottom right" whileHover={{ rotate: [0, -10, 5, -5, 0] }} fontSize="xx-large">👋</Text>
            </HStack>
            <Text>I'm a software engineer. Sometimes I do other things too. 😌</Text>
            <br/>
            <Text fontFamily="Paytone One">Recent interests:</Text>
              <Box>
                <Text>📚 DNFing books on Goodreads</Text>
                <Text>🧗🏻‍♀️ Falling off V4s</Text>
                <Text>🎱 Scratching at the pool hall</Text>
                <Text>🎨 Drawing imperfect circles</Text>
                <Text>🌐 Watching Blender tutorials on 0.5x speed</Text>
                <Text>🎶 Forgetting metronomes exist</Text>
              </Box>
              <Image src="/tiff.png" borderRadius="sm" position="absolute" right="-10%" h="80%" top="8%" display={['none', 'none', 'none', 'block']}/>
          </VStack>
        </Box>
      </Center>
    </section>
  )
}