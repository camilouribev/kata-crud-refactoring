import React, { useContext, useEffect, useState } from "react";
import todoRequests from "../api/todoRequests";
import TodoActions from "../actions/TodoActions";
import { Store } from "../Provider";

export default ({ listId, todo }) => {
  const { dispatch } = useContext(Store);
  const [isLoaded, setLoaded] = useState(false);

  const list = todo.elements.filter((task) => {
    return task.listId === listId;
  });

  useEffect(() => {
    todoRequests.findAll(listId).then((response) => {
      if (response.ok) {
        response.json().then((items) => {
          setLoaded(true);
          dispatch(TodoActions.found(listId, items));
        });
      }
    });
  }, [listId, dispatch]);
  // useEffect(() => {
  //   todoRequests.findAll(listId).then((response) => {
  //     console.log(response);
  //     if (response.status === 200) {
  //       console.log(response.data);
  //       setLoaded(true);
  //       dispatch(TodoActions.found(listId, response.data));
  //     }
  //   });
  // }, [listId, dispatch]);

  const onDelete = (itemId) => {
    todoRequests.delete(itemId).then((response) => {
      if (response.ok) {
        dispatch(TodoActions.deleted(listId, itemId));
      }
    });
  };

  const onEdit = (item) => {
    dispatch(TodoActions.onEdited(listId, item));
  };

  const onChange = (event, item) => {
    const request = {
      name: item.name,
      id: item.id,
      completed: event.target.checked,
    };
    todoRequests.update(listId, request).then((response) => {
      if (response.ok) {
        response.json().then(() => {
          dispatch(TodoActions.updated(listId, request));
        });
      }
    });
  };

  const decorationDone = {
    textDecoration: "line-through",
    color: "#c3c3c3",
  };
  return (
    <div>
      {!isLoaded && <div>Loading...</div>}
      <table className="ui very basic collapsing celled table">
        <thead>
          <tr>
            <td className="task center-td">
              <h4>Tarea</h4>
            </td>
            <td className="">
              {" "}
              <h4>Terminada</h4>
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {list.map((todo) => {
            return (
              <tr
                key={todo.id}
                style={todo.completed ? decorationDone : {}}
                id={"to-do-" + todo.id}
              >
                <td className="task">{todo.name}</td>
                <td>
                  <div className="checkbox-center">
                    <input
                      type="checkbox"
                      className="checkbox-center"
                      defaultChecked={todo.completed}
                      onChange={(event) => onChange(event, todo)}
                    ></input>
                  </div>
                </td>
                <td className="checkbox-center">
                  <div className="eliminar-btn">
                    <button
                      className="circular ui inverted red icon button left floated "
                      onClick={() => onDelete(todo.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                    <button
                      className="circular ui inverted green icon button right floated"
                      disabled={todo.completed}
                      onClick={() => onEdit(todo)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
