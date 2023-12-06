import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

export default function HomePage() {
  const [counter, setCounter] = useState(0); //jika berubah akan otomatis re-render
  let counter2 = 1000; //tidak akan re-render
  //cara passing value antar Component ?
  return (
    <>
      <Center h={"100vh"} w={"100%"} gap={"40px"}>
        <Center h={"100%"} maxW={"500px"} gap={"10px"} flexDir={"column"}>
          <Heading>Menggunakan state</Heading>
          <Flex gap={"10px"}>
            <Button onClick={() => setCounter(counter - 1)}>Decrement</Button>
            <b>{counter}</b>
            <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
          </Flex>
        </Center>
        <Center h={"100&"} maxW={"500px"} gap={"10px"} flexDir={"column"}>
          <Heading>Tidak Menggunakan state</Heading>
          <Flex gap={"10px"}>
            <Button
              onClick={() => {
                counter2--;
                console.log(counter2);
              }}
            >
              Decrement
            </Button>
            <b>{counter2}</b>
            <Button
              onClick={() => {
                counter2++;
                console.log(counter2);
              }}
            >
              Increment
            </Button>
          </Flex>
        </Center>
      </Center>
    </>
  );
}
