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

export const loginUser = (userData) => {
  return {
    type: "LOGIN",
    payload: userData,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
