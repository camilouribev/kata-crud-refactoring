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
          console.log("successful list");
        });
      }
      setLoaded(true);
    });
  }, [dispatch]);

  const onDelete = (listId) => {
    listRequests.delete(listId).then((response) => {
      if (response.ok) {
        dispatch(listRequests.deleted(listId));
      }
    });
  };

  return (
    <div>
      {!isLoaded && <div>Loading...</div>}
      {list.elements.length === 0 && <div>empty list!</div>}
      {list.elements.map((element) => {
        return (
          <div key={element.id} id={"list-to-do-" + element.id}>
            <fieldset>
              <legend>
                {element.name.toUpperCase()}
                <button onClick={() => onDelete(element.id)}>Eliminar</button>
              </legend>
              <TodoForm listId={element.id} todo={todo} />
              <TodoList listId={element.id} todo={todo} />
            </fieldset>
          </div>
        );
      })}
    </div>
  );
}
export default List;
