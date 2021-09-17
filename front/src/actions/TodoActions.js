export const actionType = {
  LIST_CREATED: "item.LIST_CREATED",
  LIST_UPDATED: "item.LIST_UPDATED",
  LIST_FOUND: "item.LIST_FOUND",
  LIST_DELETED: "item.LIST_DELETED",
  LIST_ON_EDITED: "item.LIST_ON_EDITED",
};

export default {
  saved: (listId, item) => ({ type: actionType.LIST_CREATED, item, listId }),
  deleted: (listId, itemId) => ({
    type: actionType.LIST_DELETED,
    itemId,
    listId,
  }),
  updated: (listId, item) => ({ type: actionType.LIST_UPDATED, item, listId }),
  onEdited: (listId, item) => ({
    type: actionType.LIST_ON_EDITED,
    item,
    listId,
  }),
  found: (listId, items) => ({ type: actionType.LIST_FOUND, items, listId }),
};
