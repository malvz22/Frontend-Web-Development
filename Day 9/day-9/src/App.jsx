import "./App.css";
import { Container, Box, Heading, Text } from "@chakra-ui/react";
import TodoDisplay from "./components/TodoDisplay";
import HeroesDisplay from "./components/HeroesDisplay";

function App() {
  return (
    <>
      <Container>
        <Heading margin={"auto"}>Network Call</Heading>
        <TodoDisplay />
        <HeroesDisplay />
      </Container>
    </>
  );
}

export default App;
