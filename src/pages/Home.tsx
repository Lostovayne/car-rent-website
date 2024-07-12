import { Button, AutoCard } from "../components";
import { SectionCards } from "../components/SectionCards";
import { ArrayCars } from "../data";

export const Home = () => {
  return (
    <div className="bg-backgroundSecondary mx-auto max-w-screen-2xl min-h-dvh">
      <p>Home</p>

      <SectionCards title="Popular Car" >
        {ArrayCars.map((car) => (
          <AutoCard key={car.id} {...car} />
        ))}
      </SectionCards>

      <Button variant="outline">Button</Button>
    </div>
  );
};


