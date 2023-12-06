/* eslint-disable react/prop-types */
import { Heading } from "@chakra-ui/react";

export default function HeadinComponent(props) {
  console.log(props);
  return <Heading>{props.value}</Heading>;
}
