import { Center, Text, Box, VStack, HStack, Heading } from '@chakra-ui/react'

export default function SoftwareEngineer({ role }) {

  return (
      <Timepoint />
  )
}

const Timepoint = ({ side }) => {
  return (
    <HStack w="full" py={8} px={20}>
      <Box borderRadius="full" bg="blue.400" boxSize="4rem"></Box>
    </HStack>
  )
}