import { actionType } from "../actions/ListActions";

function listReducer() {
  const action = {};

  action[actionType.LIST_FOUND] = (state, action) => {
    return { ...state, list: { elements: action.list } };
  };

  action[actionType.LIST_CREATED] = (state, action) => {
    const list = state.list.elements;
    list.push(action.item);
    return { ...state, list: { elements: list } };
  };

  action[actionType.LIST_DELETED] = (state, action) => {
    const list = state.list.elements.filter((element) => {
      return element.id !== action.listId;
    });
    return { ...state, list: { elements: list } };
  };

  return action;
}

export default listReducer;
