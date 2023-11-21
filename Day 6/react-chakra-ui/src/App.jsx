import {
  Box,
  Heading,
  Stack,
  Flex,
  Spacer,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import "./App.css";

function List() {
  return (
    <Stack width={600} mx="auto">
      <Checkbox defaultChecked color="white">
        <Flex>
          <Text>Test</Text>
          <Spacer />
          <DeleteIcon alignSelf="center"></DeleteIcon>
        </Flex>
      </Checkbox>
    </Stack>
  );
}

function App() {
  return (
    <>
      <Box bg="blue.900" py={10} textAlign="center">
        <Heading textColor="white" my={12}>
          Chores ToDo List
        </Heading>
        <List></List>
        <Flex>
          <Box p="4" bg="red.400">
            Box 1
          </Box>
          <Spacer />
          <Box p="4" bg="green.400">
            Box 2
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default App;
