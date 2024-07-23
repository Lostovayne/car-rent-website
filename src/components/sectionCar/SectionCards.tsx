
import { cn } from "../../lib/utils";

type SectionCardsProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"section">;

export const SectionCards: React.FC<SectionCardsProps> = ({children,className,...props}) => {
  return (
    <section className={cn("container py-5",className)} {...props} > 
         {children}   
    </section>
  );
};
