import { useState } from "react";
import HeadinComponent from "./heading";
import { Box, Stack } from "@chakra-ui/react";
import InputComponent from "./Input";

export default function BodyComponent() {
  const [content, setContent] = useState("Ini adalah konten");
  return (
    <Stack gap={"12px"}>
      <HeadinComponent value={content} ayam={"ayam goreng"} />
      <Box>{content}</Box>
      <InputComponent set={setContent} />
    </Stack>
  );
}
