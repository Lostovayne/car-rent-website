import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../../ui/button";


interface ButtonShowAllReviewsProps {
  isShowAllReviews: boolean;
  onClick: () => void;
}

export const ButtonShowAllReviews: React.FC<ButtonShowAllReviewsProps> = ({
  isShowAllReviews, onClick }) => {
  return (
    <div className="flex justify-center">
      <Button variant={"ghost"} className="w-32 p-2" onClick={onClick}>
        <span className="font-normal text-base text-textSecondary">
          {isShowAllReviews ? "Show less" : "Show All"}
        </span>
        {
          isShowAllReviews
            ? <ChevronUp className="ml-2 size-4 text-textSecondary" />
            : <ChevronDown className="ml-2 size-4 text-textSecondary" />
        }
      </Button>
    </div>
  );
};
