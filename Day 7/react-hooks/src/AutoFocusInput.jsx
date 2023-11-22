import { Button, Container, Input } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function AutoFocusInput() {
  const [text, setText] = useState("");
  const renderCount = useRef(0);

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const handleFocusChange = () => {
    inputRef.current.focus();
  };

  const handleInputChange = (event) => {
    renderCount.current++;
    setText(event.target.value);
  };

  return (
    <Container>
      {text} - {renderCount.current}
      <Input ref={inputRef} onChange={handleInputChange} />
      <Input ref={inputRef} />
      <Button mt={2} onClick={handleFocusChange}>
        Focus to Input
      </Button>
    </Container>
  );
}
