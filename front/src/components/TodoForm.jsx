import React, { useContext, useRef, useState } from "react";
import todoRequests from "../api/todoRequests";
import TodoActions from "../actions/TodoActions";
import { Store } from "../Provider";
import Alert from "../alerts/Alert";

export default ({ listId, todo }) => {
  const formRef = useRef(null);
  const { dispatch } = useContext(Store);
  const item = todo.item[listId] ? todo.item[listId] : {};
  const [state, setState] = useState({ item: item, trigger: false });

  const onAdd = (event) => {
    if (state.name.length < 3) {
      setState({ ...state, trigger: true });
      setTimeout(() => {}, 3000);
      return;
    }
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
    if (state.name.length < 3) {
      setState({ ...state, trigger: true });
      console.log(state.trigger);
      return;
    }

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
          placeholder="Lista de tareas"
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, name: event.target.value });
          }}
        ></input>
      </div>

      {item.id && (
        <button
          className="ui inverted blue medium button right attached"
          onClick={onEdit}
        >
          Actualizar
        </button>
      )}
      {!item.id && (
        <button
          className="ui inverted blue medium button right attached"
          onClick={onAdd}
        >
          + Tarea
        </button>
      )}
      <Alert trigger={state.trigger} />
    </form>
  );
};
