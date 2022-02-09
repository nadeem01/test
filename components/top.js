import React from 'react'
import {Stack, Button, Image} from '@chakra-ui/react';
import {TextComponent} from '../components/text'

export const Top = () => {
    return (
<Stack direction='row' spacing={4} align='center'>
  <Button  variantColor="#BE4444" height="44px"  bg='#BE4444'  varient="solid"  _hover={{
    background: "white",
    color: "#272B35",
  }} >
    Funding
  </Button>
  <Image
  borderRadius='full'
  boxSize='44px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
  />
  <TextComponent fontWeight={600} fontSize='18px' text="Ralph Edwards"/>
  <TextComponent opacity=" 0.5"  color="rgba(255, 255, 255, 1)" fontWeight={400} fontSize='12px' width="100%" text="3h ago"/>
 
</Stack>
    )
}
