import React from 'react'
import { Text } from '@chakra-ui/react'
export  const TextComponent = (props) => {
    return (
        <Text pt={props.pt} opacity={props.opacity} fontWeight={props.fontWeight} color={props.color}  fontSize={props.fontSize}  >
       {props.text}
      </Text>
    )
}
