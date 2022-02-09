import {Container,Box, Center,Flex} from '@chakra-ui/react';
import { Top } from '../components/top';
import {TextComponent} from '../components/text'
import { ArrowRightIcon } from "@chakra-ui/icons"
import { ChildContainer } from '../components/childContainer';
export default function Home() {
  return (
    <Center bg="white" h="1024px" w="1440px">
    <Container  borderRadius="md" bg="#272B35" color="white" h="464px" alignContent="center" border="10%" maxW="container.sm" p="0px !important" >
     
       <Box width="640px" height="332px"  padding="32px">
     
      <Flex width='100%' alignItems="center" justifyContent="space-between">
      <Top/>
  <TextComponent opacity="0.5" mb={9} align="center" fontWeight={600} text="..."/>

  </Flex>
      <Box mb="24px" mt="24px" ml={0} width="576px" height="200px" >
      <TextComponent fontSize="18px" noOfLines={[1, 2, 3]} fontWeight={400} opacity="80%" text="Velit ut ultrices quis viverra eu, ultricies nulla at nec. Ut diam venenatis egestas massa vulputate nam. Pretium eros, imperdiet odio sit. Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut."/>
      <TextComponent fontSize="18px"  opacity="80%" pt="30px" text="Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam. Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in."/>
      </Box>
      </Box>
      <ChildContainer/>
    </Container>
    
    </Center>
  )
}
