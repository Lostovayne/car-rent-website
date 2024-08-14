import { Outlet } from "react-router-dom";
import {
  CheckBoxMultiple,
  FilterComponent,
  SliderFilter,
} from "../components/filters";

import { filters } from "@/constants/Filters";

export const FilterLayout = () => {
  return (
    <div className="flex container mx-auto">
      <div className="hidden md:flex md:flex-col min-w-72 gap-4">
        <FilterComponent title="Type">
          <CheckBoxMultiple items={filters} />
        </FilterComponent>

        <FilterComponent title="Capacity">
          <CheckBoxMultiple items={filters} />
        </FilterComponent>

        <FilterComponent title="Price">
          <div className="mr-4">
            <SliderFilter />
          </div>
        </FilterComponent>
      </div>
      <Outlet />
    </div>
  );
};
