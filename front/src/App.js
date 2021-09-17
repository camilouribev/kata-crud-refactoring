import React from "react";
import { StoreProvider } from "./Provider";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  return (
    <StoreProvider>
      <h2 className="ui header">Lista de actividades</h2>
      <Form />
      <List />
    </StoreProvider>
  );
}

export default App;
