import { Avatar, AvatarImage } from "../../ui/avatar";
import type { IReview } from "../../../interfaces";
import { formatDate } from "../../../helper";
import { StarReviewRating } from "./StarReviewRating";

export const ReviewDetails = ({ review }: { review: IReview }) => {
  return (
    <div className="flex w-full gap-3">
      {/* avatar */}
      <figure className="flex w-[4rem] justify-center">
        <Avatar className="size-12">
          <AvatarImage src={review.user.imageUrl} alt={"ed"} className="" />
        </Avatar>
      </figure>

      {/* review */}
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between">
          {/* user. name and titte */}
          <div className="flex flex-col h-12">
            <h1 className="font-medium text-lg md:text-xl text-textPrimary">
              {review.user.name}
            </h1>
            <h2 className="font-light text-textSecondary text-sm">
              {review.user.title ?? ""}
            </h2>
          </div>

          {/* date and rating */}
          <div className="flex flex-col justify-between items-end pb-1">
            <span className="font-light text-sm text-textSecondary">
              {formatDate(review.createAt)}
            </span>
            <StarReviewRating rating={review.rating} />
          </div>
        </div>

        {/* review text */}
        <span className="font-light text-gray-600 text-sm">{review.text}</span>
      </div>
    </div>
  );
};
