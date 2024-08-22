import { Star } from "lucide-react";
import { cn } from "../../../lib";

export const StarReviewRating = ({
  rating,
  className = "",
}: {
  rating: number;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-1 ", className)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index}>
          {
            index < Math.round(rating) 
            ? <Star size={18} className="fill-yellow-500 text-yellow-500" />
            : <Star size={18} className="text-gray-400/50" />
          }
        </div>
      ))}
    </div>
  );
};
