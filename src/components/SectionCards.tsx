import { Button } from "../components/ui/button";

export const SectionCards = ({
  title,
  children,
  moreContent,
}: {
  title: string;
  children: React.ReactNode;
  moreContent?: boolean;
}) => {
  return (
    <section className="container py-5" >
      <div className=" p-5 flex items-center justify-between">
        <h2 className="text-textSecondary font-medium">{title}</h2>
        {moreContent ? (
          <Button variant="link" className="text-primaryColor ">
            View All
          </Button>
        ) : null}
      </div>
      <section className="w-full flex flex-wrap justify-evenly gap-y-10 gap-x-4">
        {children}
      </section>
    </section>
  );
};
