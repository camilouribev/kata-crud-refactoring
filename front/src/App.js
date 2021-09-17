import React from "react";
import { StoreProvider } from "./Provider";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  return (
    <StoreProvider>
      <h3>To-Do List</h3>
      <Form />
      <List />
    </StoreProvider>
  );
}

export default App;
