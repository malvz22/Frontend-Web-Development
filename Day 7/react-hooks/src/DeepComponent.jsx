import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";

const UserContext = createContext({ name: "", age: 0 });

export default function DeepComponent() {
  const [user, setUser] = useState({ nama: "malv", age: 26 });
  const handleClearUser
  return (
    <UserContext.Provider value={user}>
        <Button onClick={handleClearUser}>Clear User</Button>
      <Container mt={5}>
        <Component1 />
      </Container>
    </UserContext.Provider>
  );
}

function Component1() {
  return (
    <Box>
      <Heading>Data User:</Heading>
      <Component2></Component2>
    </Box>
  );
}

function Component2() {
  const user = useContext(UserContext);
  return (
    <Box>
      <Text>{user.name}</Text>
      <Text>{user.age}</Text>
    </Box>
  );
}
