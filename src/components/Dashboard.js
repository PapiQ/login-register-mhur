import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const initialRenderRef = useRef(true);
  const [authenticated, setauthenticated] = useState(null);

  if (initialRenderRef.current) {
    initialRenderRef.current = false;
    // executes before render
    const loggedInUser = localStorage.getItem("authenticated");
    console.log("loggedInUser", loggedInUser);
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }

  if (!authenticated) {
    // Redirect
    console.log("authenticated", authenticated);
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
      </div>
    );
  }
};

export default Dashboard;
