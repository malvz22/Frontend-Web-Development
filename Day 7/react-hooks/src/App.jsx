import "./App.css";
import AutoFocusInput from "./AutoFocusInput";
import Counter from "./Counter";
import CounterActionable from "./CounterActionable";
import DeepComponent from "./DeepComponent";
import DisplayOddEvenNumber from "./DisplayOddEvenNumber";
import TitleChanger from "./TitleChanger";

function App() {
  return (
    <>
      <Counter></Counter>
      <TitleChanger></TitleChanger>
      <AutoFocusInput />
      <DisplayOddEvenNumber />
      {/* <CounterActionable></CounterActionable>
      <DeepComponent></DeepComponent> */}
    </>
  );
}

export default App;
