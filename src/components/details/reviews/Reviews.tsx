import { useState } from "react";
import { ReviewDetails } from "./ReviewDetails";
import { ButtonShowAllReviews } from "./ButtonShowAllReviews";
import type { IReview } from "../../../interfaces";

interface Props {
  reviews: IReview[]
}

export const Reviews = ({ reviews }: Props) => {
  const [isShowAllReviews, setIsShowAllReviews] = useState(false)
  const totalReviews = reviews.length

  return (
    <div className="bg-background round rounded-md p-6 border border-blue-800 flex flex-col gap-2">

      {/* title */}
      <div className="flex justify-start gap-4 items-center">
        <span className="text-xl sm:text-2xl">Reviews</span>
        <span className="bg-blue-500 text-white py-0 px-4">{totalReviews}</span>
      </div>

      {/* reviews */}
      <div className="flex flex-col gap-7 mt-3">
        {
          reviews.slice(0, 2).map(review => (
            <ReviewDetails
              key={review.user.id}
              review={review}
            />
          ))
        }

        <ButtonShowAllReviews
          isShowAllReviews={isShowAllReviews}
          handleOnClick={() => setIsShowAllReviews(!isShowAllReviews)}
        />

        {
          (isShowAllReviews) &&
          reviews.slice(2).map(review => (
            <ReviewDetails
              key={review.user.id}
              review={review}
            />
          ))
        }

      </div>

    </div>
  )
}



