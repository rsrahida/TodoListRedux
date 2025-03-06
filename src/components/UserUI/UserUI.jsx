import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../store/actions";
import "./UserUI.css";

const UserUI = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = () => {
    if (username.trim()) {
      const userData = { username };
      dispatch(loginUser(userData));
      setUsername("");
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="user-ui">
      {user.isAuthenticated ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserUI;

