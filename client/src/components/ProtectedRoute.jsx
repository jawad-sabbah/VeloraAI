import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // While fetching user, don’t redirect yet
  if (loading) return <div>Loading...</div>;

  // If no user, redirect
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
