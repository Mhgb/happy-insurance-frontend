import { Navigate, Outlet, useOutletContext } from "react-router-dom";

export default function ProtectedRoute() {
  const context = useOutletContext();

  if (!context.user) {
    return <Navigate to="/" replace />;
  }
  return <Outlet context={context} />;
}
