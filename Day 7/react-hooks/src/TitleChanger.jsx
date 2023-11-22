import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TitleChanger() {
  const [title, setTitle] = useState("Purwadhika");

  //Effect akan berjalan ketika render pertama kali saja
  useEffect(() => {
    alert("welcome!");
  }, []);

  //effect akan berjalan ketika state title terdeteksi perubahan value
  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <Container marginTop={15} marginBottom={"70px"}>
      <FormControl>
        <FormLabel>New Titles</FormLabel>
        <Input value={title} onChange={handleInputChange}></Input>
      </FormControl>
    </Container>
  );
}
