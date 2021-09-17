const HOST_API = "http://127.0.0.1:8080/api/";

export default {
  // onEdit: (event) => {
  //   event.preventDefault();

  //   const request = {
  //     name: state.name,
  //     id: item.id,
  //     isCompleted: item.isCompleted,
  //   };

  //   fetch(HOST_API + "/todo", {
  //     method: "PUT",
  //     body: JSON.stringify(request),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((todo) => {
  //       dispatch({ type: "update-item", item: todo });
  //       setState({ name: "" });
  //       formRef.current.reset();
  //     });
  // },

  findAll: async () => {
    return fetch(HOST_API + "list").catch((error) =>
      console.error("Error:", error)
    );
  },

  save: async (request) => {
    return fetch(HOST_API + "/todolist", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },
  delete: async (listId) => {
    return fetch(HOST_API + listId + "/todolist", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },
};
