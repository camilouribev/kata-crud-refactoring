export const actionType = {
  LIST_CREATED: "list.LIST_CREATED",
  LIST_FOUND: "list.LIST_FOUND",
  LIST_DELETED: "list.LIST_DELETED",
};

export default {
  saved: (item) => ({ type: actionType.LIST_CREATED, item }),
  found: (list) => ({ type: actionType.LIST_FOUND, list }),
  deleted: (listId) => ({ type: actionType.LIST_DELETED, listId }),
};
