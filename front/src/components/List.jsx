import React, { useContext, useEffect, useState } from "react";
import { Store } from "../Provider";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import listRequests from "../api/listRequests";
import ListActions from "../actions/ListActions";

function List() {
  const {
    state: { list, todo },
    dispatch,
  } = useContext(Store);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    listRequests.findAll().then((response) => {
      if (response.ok) {
        response.json().then((list) => {
          dispatch(ListActions.found(list));
        });
      }
      setLoaded(true);
    });
  }, [dispatch]);

  const onDelete = (listId) => {
    listRequests.delete(listId).then((response) => {
      if (response.ok) {
        dispatch(listRequests.delete(listId));
      }
    });
  };

  return (
    <div>
      {!isLoaded && <div>Loading...</div>}
      {list.elements.length === 0 && (
        <div>No tienes actividades pendientes</div>
      )}
      {list.elements.map((element) => {
        return (
          <div
            key={element.id}
            id={"list-to-do-" + element.id}
            className="todo-element"
          >
            <div>
              <div className="ui header list-title">
                <h2> {element.name}</h2>

                <button
                  className="ui red mini button delete-btn"
                  onClick={() => onDelete(element.id)}
                >
                  Eliminar
                </button>
              </div>
              <div className="container-list">
                <div className="input-list">
                  <TodoForm listId={element.id} todo={todo} />
                </div>
                <div className="element-list">
                  <TodoList listId={element.id} todo={todo} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default List;
