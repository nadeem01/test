import React from 'react'
import { Input, InputGroup, CheckIcon,InputRightElement } from '@chakra-ui/react'

export const Inputss = () => {
    return (
        <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          color='gray.300'
          fontSize='1.2em'
          children='$'
        />
        <Input placeholder='Enter amount' />
        <InputRightElement children={<CheckIcon color='green.500' />} />
      </InputGroup>
    )
}
