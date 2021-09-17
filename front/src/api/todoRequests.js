// import todoAPI from "./todoAPI";

const API = "http://localhost:8080/api/";

export default {
  // findAll: async (listId) => {
  //   return todoAPI.get(`${listId}/todos`);
  // },

  findAll: async (listId) => {
    return fetch(API + listId + "/todos").catch((error) =>
      console.error("Error:", error)
    );
  },

  save: async (listId, request) => {
    return fetch(API + listId + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },

  update: async (listId, request) => {
    return fetch(API + listId + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },

  delete: async (id) => {
    return fetch(API + id + "/todo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  },
};
