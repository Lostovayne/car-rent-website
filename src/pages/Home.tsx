import { Button } from "../components";
import { ViewCars } from "../components/section-car/ViewCars";
import { SectionCards } from "../components/section-car/SectionCards";

export const Home: React.FC = () => {
  return (
    <div className=" mx-auto max-w-screen-2xl min-h-dvh">

      <SectionCards>
        <div className=" p-5 flex items-center justify-between">
          <h3 className="text-textSecondary font-normal">Popular Car</h3>
          <Button variant="link" className="text-primaryColor">
            View All
          </Button>
        </div>
        <ViewCars cuantity={4} />
      </SectionCards>

      <SectionCards>
        <h3 className="text-textSecondary font-normal p-5 ">
          Recomendation Car
        </h3>
        <ViewCars cuantity={8} />
      </SectionCards>
      
    </div>
  );
};
