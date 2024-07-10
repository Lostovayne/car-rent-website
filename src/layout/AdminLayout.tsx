import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  // TODO: Validar que sea admin

  return (
    <>
      <Outlet />
    </>
  );
};
