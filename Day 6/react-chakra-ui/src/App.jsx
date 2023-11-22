/* eslint-disable react/prop-types */
import {
  Box,
  Heading,
  Flex,
  Spacer,
  Text,
  Checkbox,
  Center,
  Divider,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import "./App.css";

function List(props) {
  return (
    <Center>
      <Box width="700px">
        <Flex direction="row" justifyContent={"center"}>
          <Checkbox color="white" marginEnd={12} size={"lg"}></Checkbox>
          <Text color={"white"} alignSelf={"center"}>
            {props.text}
          </Text>
          <Spacer />
          <Center
            cursor={"pointer"}
            borderRadius={"10px"}
            border={"2px solid #FC8181"}
            width={12}
            height={12}
          >
            <DeleteIcon
              boxSize={"40%"}
              color={"#FC8181"}
              alignSelf={"center"}
            />
          </Center>
        </Flex>
      </Box>
    </Center>
  );
}

function App() {
  return (
    <>
      <Box w={"1200px"} bg="#1A202C" py={10} m={"auto"}>
        <Heading textColor="white" textAlign={"center"} py={10}>
          Chores ToDo List
        </Heading>

        <Stack spacing={10} mb={10}>
          <List text="Create Guest Experience mobile check in" />
          <List text="Document current CI/CD process" />
          <List text="Perform Code review for final Pillow-talk release" />
          <List text="Fix image uploading process for guest check-in" />
          <List text="Provide on-boarding documentation" />
        </Stack>

        <Divider />

        <Heading textColor="white" textAlign={"center"} py={10}>
          Done: 0
        </Heading>
        <Center>
          <Stack>
            <Text color={"white"}>Add todo</Text>
            <Input bg={"white"} placeholder="large size" size="lg" />
            <Button color={"black"} colorScheme="blue" width={40}>
              ADD TASK
            </Button>
          </Stack>
        </Center>
      </Box>
    </>
  );
}

export default App;
