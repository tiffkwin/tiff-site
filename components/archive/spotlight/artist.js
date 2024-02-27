import { Center, VStack, Text, Box, Image, Badge, Grid, GridItem } from '@chakra-ui/react'

export default function Artist({ role }) {

  return (
      <VStack spacing={6} py={8}>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          <GridItem w='100%' h='100%'>
            <Card src="/chouchou.jpeg" badge="Watercolor" tagline="2024" description="Chouchou Hotel" colorScheme="teal" />
          </GridItem>
          <GridItem w='100%' h='100%'>
            <Card src="/boat.png" badge="Watercolor" tagline="2024" description="Vietnamese Fishing Boat" colorScheme="teal" />
          </GridItem>
          <GridItem w='100%' h='100%' >
            <Card src="/store.png" badge="Watercolor" tagline="2024" description="General Store" colorScheme="teal" />
          </GridItem>
          <GridItem w='100%' h='100%' >
            <Card src="/3Droom.jpg" badge="Blender 3D Model" tagline="2024" description="Isometric Room" colorScheme="blue" />
          </GridItem>
        </Grid>
      </VStack>
  )
}

const Card = ({ src, badge, tagline, description, colorScheme }) => (
  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Center w="full"><Image src={src} objectFit='cover' height="24rem"/></Center>
    <Box p='6'>
      <Box display='flex'>
        <Badge borderRadius='full' px='2' colorScheme={colorScheme}>
          {badge}
        </Badge>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          {tagline}
        </Box>
      </Box>

      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
      >
        {description}
      </Box>
    </Box>
  </Box>
)