import React, { useContext, useRef, useState } from "react";
import todoRequests from "../api/todoRequests";
import TodoActions from "../actions/TodoActions";
import { Store } from "../Provider";

export default ({ listId, todo }) => {
  const formRef = useRef(null);
  const { dispatch } = useContext(Store);
  const item = todo.item[listId] ? todo.item[listId] : {};
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: null,
      completed: false,
    };

    todoRequests.save(listId, request).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          dispatch(TodoActions.saved(listId, result));
          setState({ name: "" });
          formRef.current.reset();
        });
      }
    });
  };

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      completed: item.completed,
    };

    todoRequests.update(listId, request).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          dispatch(TodoActions.updated(listId, result));
          setState({ name: "" });
          formRef.current.reset();
        });
      }
    });
  };

  return (
    <form ref={formRef}>
      <div className="ui input">
        <input
          type="text"
          name="name"
          placeholder="¿Qué piensas hacer?"
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, name: event.target.value });
          }}
        ></input>
      </div>
      {item.id && <button onClick={onEdit}>Actualizar</button>}
      {!item.id && (
        <button className="ui blue mini button" onClick={onAdd}>
          Crear
        </button>
      )}
    </form>
  );
};
