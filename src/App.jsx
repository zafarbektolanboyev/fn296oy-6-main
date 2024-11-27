import React from "react";
import Todo from "./components/Todo/index.jsx";
import Password from "./components/Password/index.jsx";
import Input from "./components/Input/index.jsx";
import Figure from "./components/Figura/index.jsx";
import EmailCorrect from "./components/EmailCorrect/index.jsx";
import ColorCheck from "./components/ColorCheck/index.jsx";
import Checkbox from "./components/Checkbox/index.jsx";

function App() {
  return (
    <>
      <div className="flex flex-column flex-wrap justify-center">
        <div className="flex flex-wrap max-w-[860px] border gap-[50px] mt-[50px]">
          <Todo></Todo>
          <Checkbox></Checkbox>
          <ColorCheck></ColorCheck>
          <Figure></Figure>
          <EmailCorrect></EmailCorrect>
          <Password></Password>
          <Input></Input>
        </div>
      </div>
    </>
  );
}

export default App;
