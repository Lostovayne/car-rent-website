import ColumFooter from "./ColumFooter";
import { DataColumnFooter } from "../../constants/DataColumnFooter";
export const Footer = () => {
  return (
    <footer className=" pb-12 pt-16 container mx-auto ">
      <div className="flex flex-col md:flex-row  justify-between  pb-6 ">
        <header className="md:w-[292px]">
          <h3 className="text-primaryColor font-bold text-3xl pb-4">MORENT</h3>
          <p className="max-md:w-3/4 text-textSecondary ">
            Our visions is to provide convenience and help increase your sales
            business
          </p>
        </header>
        <div className="flex justify-between sm:px-12 max-sm:flex-wrap max-md:py-6  gap-6 lg:gap-16 ">
          <ColumFooter section={DataColumnFooter[0]} />
          <ColumFooter section={DataColumnFooter[1]} />
          <ColumFooter section={DataColumnFooter[2]} />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0 justify-between border-t-2 font-bold  py-4 text-textPrimary">
        <p>2024 MORENT. All rights reserved</p>
        <ul className="flex gap-12  justify-between ">
          <a href="/">Privacy & Policy</a>
          <a href="/">Terms & Condition</a>
        </ul>
      </div>
    </footer>
  );
};
