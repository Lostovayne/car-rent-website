import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="text-primaryColor text-2xl  font-bold  font-jakartaSans tracking-[0.39px] w-auto"
    >
      MORENT
    </Link>
  );
};
