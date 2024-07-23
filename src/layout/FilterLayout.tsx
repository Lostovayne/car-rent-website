import { Outlet } from "react-router-dom";

export const FilterLayout = () => {
  return (
    <div className="flex container mx-auto">
      {/* NavBarSide */}
      <div className="hidden md:flex min-w-60 lg:min-w-80 bg-red-500">
        Nav Bar Side
      </div>
      <Outlet />
    </div>
  );
};
