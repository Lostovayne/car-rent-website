import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../../ui/button";

interface Props {
  isShowAllReviews: boolean;
  handleOnClick: () => void;
}

export const ButtonShowAllReviews = ({
  isShowAllReviews,
  handleOnClick,
}: Props) => {
  return (
    <div className="flex justify-center">
      <Button variant={"ghost"} className="w-32 p-2" onClick={handleOnClick}>
        <span className="font-normal text-base text-textSecondary">
          {isShowAllReviews ? "Show less" : "Show All"}
        </span>
        {isShowAllReviews ? (
          <ChevronUp className="ml-2 size-4 text-textSecondary" />
        ) : (
          <ChevronDown className="ml-2 size-4 text-textSecondary" />
        )}
      </Button>
    </div>
  );
};
