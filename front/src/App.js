import React from "react";
import { StoreProvider } from "./Provider";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  return (
    <StoreProvider>
      <div id="content" className="ui container">
        <h1 className="ui header">
          <strong>Listas de actividades</strong>{" "}
        </h1>
        <Form />
        <List />
      </div>
    </StoreProvider>
  );
}

export default App;
