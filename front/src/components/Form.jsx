import React, { useContext, useState, useRef } from "react";
import { Store } from "../Provider";
import requests from "../api/listRequests";
import listActions from "../actions/ListActions";
import Alert from "../alerts/Alert";

const Form = () => {
  const formRef = useRef(null);
  const { dispatch } = useContext(Store);

  const [state, setState] = useState({ name: "", trigger: false });

  const onAdd = (event) => {
    event.preventDefault();
    if (state.name.length < 3) {
      setState({ name: "", trigger: true });
      return;
    }

    requests.save({ name: state.name, trigger: false }).then((response) => {
      if (response.ok) {
        response.json().then((list) => {
          dispatch(listActions.saved(list));
          formRef.current.reset();
          setState({ name: "", trigger: false });
        });
      }
    });
  };

  return (
    <div className="ui form container">
      <form ref={formRef}>
        <div className="ui input field">
          <input
            type="text"
            name="name"
            placeholder="Nueva categoría"
            onChange={(event) => {
              setState({ name: event.target.value, trigger: false });
            }}
          ></input>
        </div>
        <Alert trigger={state.trigger} />
        <button
          className="ui inverted blue medium button right attached"
          onClick={onAdd}
        >
          Crear categoría
        </button>
      </form>
    </div>
  );
};

export default Form;
