import { Button, Container, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function CounterActionable() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);

  const handleDecrement = () => setCounter(counter + 1);

  return (
    <Container mt={5}>
      <HStack>
        <Button onClick={handleDecrement} colorScheme="red">
          -
        </Button>
        <Text>0</Text>
        <Button onClick={handleIncrement} colorScheme="green">
          +
        </Button>
      </HStack>
    </Container>
  );
}
