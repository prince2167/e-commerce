import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();
  const { user } = authState;
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
