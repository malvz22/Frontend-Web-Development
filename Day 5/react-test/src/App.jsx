import { Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";

const Box = styled.div`
  padding: 5px;
  border: 6px solid blue;
`;

function DisplayName(props) {
  return (
    <h1 className="color-red">
      Hello, {props.firstName} {props.lastName}
    </h1>
  );
}

function HomePage() {
  return <h1>homepage</h1>;
}

function AboutPage() {
  return <h1>about</h1>;
}

function App() {
  // const myName = "Malv";

  return (
    <>
      <Box>
        <Routes>
          <Route path="/" element={<h1>Homepage</h1>} />
          <Route path="about" element={<h1>About</h1>} />
        </Routes>
        <div
          className="header"
          style={{ border: "2px solid cyan", backgroundColor: "white" }}
        >
          <DisplayName firstName="Malvin" lastName="A" />
          <DisplayName firstName="Naruto" lastName="Uzumaki" />
        </div>
      </Box>
    </>
  );
}

export default App;
