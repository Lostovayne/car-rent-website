import { formatDate } from "../../../helper";
import { useState } from "react";
import {
  ButtonShowAllReviews,
  ReviewsDetails,
  StarReviewRating,
} from "../../../components";
import type { IReview } from "../../../interfaces";

export const CommentIterator = ({ reviews }: { reviews: IReview[] }) => {
  const [ShowAllReviews, setShowAllReviews] = useState(false);
  const totalReviews = reviews.length;
  return (
    <>
      {reviews.slice(0, 2).map((review) => (
        <ReviewsDetails key={review.user.id}>
          <ReviewsDetails.Container>
            <ReviewsDetails.UserAvatar imageUrl={review.user.imageUrl ?? ""}>
              <ReviewsDetails.Username name={review.user.name}>
                <ReviewsDetails.UserRole title={review.user.title ?? ""} />
              </ReviewsDetails.Username>
            </ReviewsDetails.UserAvatar>

            <ReviewsDetails.PostedTime date={formatDate(review.createAt)}>
              <StarReviewRating rating={review.rating} />
            </ReviewsDetails.PostedTime>
          </ReviewsDetails.Container>

          <ReviewsDetails.UserComment text={review.text} />
        </ReviewsDetails>
      ))}
      {totalReviews > 0 && (
        <ButtonShowAllReviews
          isShowAllReviews={ShowAllReviews}
          onClick={() => setShowAllReviews(!ShowAllReviews)}
        />
      )}
      {ShowAllReviews &&
        reviews.slice(2).map((review) => (
          <ReviewsDetails key={review.user.id}>
            <ReviewsDetails.Container>
              <ReviewsDetails.UserAvatar imageUrl={review.user.imageUrl ?? ""}>
                <ReviewsDetails.Username name={review.user.name}>
                  <ReviewsDetails.UserRole title={review.user.title ?? ""} />
                </ReviewsDetails.Username>
              </ReviewsDetails.UserAvatar>

              <ReviewsDetails.PostedTime date={formatDate(review.createAt)}>
                <StarReviewRating rating={review.rating} />
              </ReviewsDetails.PostedTime>
            </ReviewsDetails.Container>

            <ReviewsDetails.UserComment text={review.text} />
          </ReviewsDetails>
        ))}
    </>
  );
};
