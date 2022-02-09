import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
        borderRadius:"100px",
        padding:"12px 20px",
        width:'94px',
        maxHeight:"222px"
      },
      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'black.500',
        }),
      },
    },
  },
})

export default theme