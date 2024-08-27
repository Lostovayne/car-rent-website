import { useState } from "react";
import { ButtonShowAllReviews, UserReviewComment } from "@/components";
import type { IReview } from "@/interfaces";

export const CommentIterator = ({ reviews }: { reviews: IReview[] }) => {
  const [ShowAllReviews, setShowAllReviews] = useState(false);
  const totalReviews = reviews.length;
  return (
    <>
      {reviews.slice(0, 2).map((review) => (
        <UserReviewComment key={review.user.id} review={review} />
      ))}
      {totalReviews > 0 && (
        <ButtonShowAllReviews
          isShowAllReviews={ShowAllReviews}
          onClick={() => setShowAllReviews(!ShowAllReviews)}
        />
      )}
      {ShowAllReviews &&
        reviews
          .slice(2)
          .map((review) => <UserReviewComment key={review.user.id} review={review} />)}
    </>
  );
};
