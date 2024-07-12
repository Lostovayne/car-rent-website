import { Button, AutoCard } from "../components";

export const Home = () => {
  return (
    <div className="bg-emerald-100 mx-auto max-w-screen-2xl min-h-dvh">
      <p>Home</p>
      <AutoCard />
      <Button variant="outline">Button</Button>
    </div>
  );
};
