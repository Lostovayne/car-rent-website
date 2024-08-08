import { useState } from "react";
import { ReviewDetails } from "./ReviewDetails";
import { ButtonShowAllReviews } from "./ButtonShowAllReviews";
import type { IReview } from "../../../interfaces";

interface ReviewsProps {
  reviews: IReview[];
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const totalReviews = reviews.length;

  return (
    <div className="bg-background rounded-md p-6 flex flex-col gap-2 drop-shadow-sm">
      <ReviewsTitle totalReviews={totalReviews} />
      {!totalReviews && <ReviewsEmpty />}
      <ReviewsList reviews={reviews} />
    </div>
  );
};


const ReviewsTitle = ({ totalReviews }: { totalReviews: number }) => {
  return (
    <div className="flex justify-start gap-4 items-center">
      <span className="text-xl">Reviews</span>
      <span className="bg-primaryColor rounded-sm text-white py-0 px-4">{totalReviews}</span>
    </div>
  )
}

const ReviewsEmpty: React.FC = () => <div>Aún no hay reseñas</div>

const ReviewsList: React.FC<{ reviews: IReview[] }> = ({ reviews }) => {
  const [isShowAllReviews, setIsShowAllReviews] = useState(false);
  const totalReviews = reviews.length;

  return (
    <div className="flex flex-col gap-7 mt-3">
      {reviews.slice(0, 2).map((review) => <ReviewDetails key={review.user.id} review={review} />)}
      {
        totalReviews > 0
        && <ButtonShowAllReviews
          isShowAllReviews={isShowAllReviews}
          onClick={() => setIsShowAllReviews(!isShowAllReviews)}
        />
      }
      {
        isShowAllReviews
        && reviews.slice(2).map((review) => <ReviewDetails key={review.user.id} review={review} />)
      }
    </div>
  )
}