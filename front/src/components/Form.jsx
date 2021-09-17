import React, { useContext, useState, useRef } from "react";
import { Store } from "../Provider";
import requests from "../api/listRequests";
import ActionCreators from "../actions/ListActions";

const Form = () => {
  const formRef = useRef(null);
  const { dispatch } = useContext(Store);

  const [state, setState] = useState({ name: "" });

  const onAdd = (event) => {
    event.preventDefault();
    requests.save({ name: state.name }).then((response) => {
      if (response.ok) {
        response.json().then((list) => {
          dispatch(ActionCreators.saved(list));
          formRef.current.reset();
          setState({ name: "" });
        });
      }
    });
  };

  return (
    <form ref={formRef}>
      <input
        type="text"
        name="name"
        placeholder="Nueva categoría"
        onChange={(event) => {
          setState({ name: event.target.value });
        }}
      ></input>

      <button onClick={onAdd}>Crear categoría</button>
    </form>
  );
};

export default Form;
