import { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAddOneCount = () => {
    setCount(count + 1);
  };

  const handleRemoveOneCount = () => {
    setCount(count - 1);
  };
  return (
    <Container>
      <Center>
        <Stack>
          <Heading>Purwadhika</Heading>
          <Box>
            <Text textAlign={"center"}>Counter: {count}</Text>
          </Box>
          <Box>
            <Button onClick={handleAddOneCount}>Add 1</Button>
            <Button onClick={handleRemoveOneCount}>Remove 1</Button>
          </Box>
        </Stack>
      </Center>
    </Container>
  );
}
