import {Box, Container, Text} from '@chakra-ui/react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <ColorModeProvider options={{ initialColorMode: "auto" }}>
                <Container maxW="container.md">
                    <Box borderRadius="lg" color="white"
                        bg="blue.500" p={3} margin={3}>
                        <Text>Hello World!</Text>
                    </Box>
                </Container>
            </ColorModeProvider>
        </ChakraProvider>
    );
}

export default App;