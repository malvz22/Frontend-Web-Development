/* eslint-disable react/prop-types */
import { Input } from "@chakra-ui/react";

export default function InputComponent({ set }) {
  return <Input onChange={(e) => set(e.target.value)}></Input>;
}
