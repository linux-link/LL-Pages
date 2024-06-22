import {Box, Container, Text} from '@chakra-ui/react';



function App() {
    return (
        <Container maxW="container.md">
            <Box borderRadius="lg" color="white"
                 bg="blue.500" p={3} margin={3}>
                <Text>Linux Link</Text>
            </Box>
        </Container>
    );
}

export default App;
