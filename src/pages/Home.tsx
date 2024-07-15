import { AutoCard } from "../components";
import { SectionCards } from "../components/SectionCards";
import { ArrayCars } from "../data";

export const Home = () => {
  return (
    <div className="bg-backgroundSecondary mx-auto max-w-screen-2xl min-h-dvh">
      <SectionCards title="Popular Car" moreContent={true}>
        {ArrayCars.map((car) => (
          <AutoCard key={car.id} {...car} />
        ))}
      </SectionCards>
    </div>
  );
};
