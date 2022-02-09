import React from 'react'
import {Container,Box, Center, Input, InputGroup, InputRightElement, VStack} from '@chakra-ui/react';
import {TextComponent} from '../components/text'
import { ArrowRightIcon } from "@chakra-ui/icons"

export const ChildContainer = () => {
    return (
      <VStack
        alignItems="start" 
        justifyContent="center"
        height="132px"
        width="640px"
        background="rgba(95, 116, 149, 0.1)"
      >
      <Box padding="24px" width="100%">
        <TextComponent fontSize="16px" width="295px" fontWeight={600} m={4} text="How can you help with this Request?"/>
        <InputGroup>
      <Input mt="12px" width="592px" height="48px" border="none"  borderRadius="100px" pt="12px" pr="12px" pb="12px" pl="20px" bg="rgba(95, 116, 149, 0.2)" placeholder='Type here...' />
      <InputRightElement mt="12px"  pt="12px" children={<ArrowRightIcon alignContent="center"  color='rgba(95, 116, 149, 1)' />} />
      </InputGroup>
      </Box>
      </VStack>
    )
}
