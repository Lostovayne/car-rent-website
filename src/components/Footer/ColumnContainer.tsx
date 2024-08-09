import { Column } from "../../components";
import { DataColumnFooter } from "../../constants/DataColumnFooter";

export const ColumnContainer = () => {
  return (
    <div className="flex justify-between sm:px-12 max-sm:flex-wrap max-md:py-6  gap-6 lg:gap-16 ">
      <Column section={DataColumnFooter[0]} />
      <Column section={DataColumnFooter[1]} />
      <Column section={DataColumnFooter[2]} />
    </div>
  );
};
