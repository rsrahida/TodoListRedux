export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

// actions.js

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// LOGIN action-u
export const loginUser = (userData) => {
  return {
    type: LOGIN,
    payload: userData,
  };
};

// LOGOUT action-u
export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
