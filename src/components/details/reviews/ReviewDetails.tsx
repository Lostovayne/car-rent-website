import { Avatar, AvatarImage } from "../../ui/avatar"
import type { IReview } from "../../../interfaces"
import { formatDate } from "../../../helper"
import { StarReviewRating } from "./StarReviewRating"



export const ReviewDetails = ({ review }: { review: IReview }) => {
  return (
    <div className="flex w-full gap-3">

      {/* avatar */}
      <div className="flex w-[4rem] justify-center">
        <Avatar className="size-12">
          <AvatarImage src={review.user.imageUrl} alt={'ed'} className="" />
        </Avatar>
      </div>

      {/* review */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">

          {/* user. name and titte */}
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">{review.user.name}</h1>
            <h2 className="font-light">{review.user.title ?? '-'}</h2>
          </div>

          {/* date and rating */}
          <div className="flex flex-col gap-1">
            <span className="font-light">{formatDate(review.createAt)}</span>
            <StarReviewRating rating={review.rating} />
          </div>
        </div>

        {/* review text */}
        <span className="font-light">{review.text}</span>
      </div>

    </div>
  )
}

