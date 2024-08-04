import { Avatar, AvatarImage } from "../../ui/avatar";
import type { IReview } from "../../../interfaces";
import { formatDate } from "../../../helper";
import { StarReviewRating } from "./StarReviewRating";

export const ReviewDetails = ({ review }: { review: IReview }) => {
  return (
    <article className="flex w-full gap-3">
      {/* review */}
      <section className="flex flex-col gap-3 w-full ">
        <div className="flex justify-between">
          <header className="flex gap-3">
            <figure className="flex justify-center ">
              <Avatar className="size-12">
                <AvatarImage
                  src={review.user.imageUrl}
                  alt={"ed"}
                  className=""
                />
              </Avatar>
            </figure>
            {/* user. name and titte */}
            <div className="flex flex-col h-12 ">
              <h1 className="font-medium text-lg md:text-xl text-textPrimary">
                {review.user.name}
              </h1>
              <h2 className="font-light text-textSecondary text-sm">
                {review.user.title ?? ""}
              </h2>
            </div>
          </header>

          {/* date and rating */}
          <div className="flex flex-col justify-between items-end pb-1">
            <time className="font-light text-sm text-textSecondary">
              {formatDate(review.createAt)}
            </time>
            <StarReviewRating rating={review.rating} />
          </div>
        </div>

        {/* review text */}
        <p className="font-light text-gray-600 text-sm px-1 sm:pl-[60px] text-pretty">
          {review.text}
        </p>
      </section>
    </article>
  );
};
