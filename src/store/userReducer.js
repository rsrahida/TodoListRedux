const initialState = {
  isAuthenticated: false,
  username: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username, 
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        username: "",
      };
    default:
      return state;
  }
};

export default userReducer;
