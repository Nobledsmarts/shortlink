import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Logo = () => {
  return (
    <HStack spacing={'0'}>
      <Text fontWeight={'extrabold'}>
        Short.
      </Text>
      <Text fontWeight={'extrabold'} color={'orange.500'}>
        Link
      </Text>
    </HStack>
  )
}

export default Logo