import { ReviewsDetails, StarReviewRating } from "@/components";
import { transformCommentData } from "@/adapters";
import { IReview } from "@/interfaces";

interface UserReviewCommentProps {
  review: IReview;
}

export const UserReviewComment = ({ review }: UserReviewCommentProps) => {
  const { id, imageUrl, name, title, createAt, rating, text } = transformCommentData(review);
  return (
    <ReviewsDetails key={id}>
      <ReviewsDetails.Container>
        <ReviewsDetails.UserAvatar imageUrl={imageUrl}>
          <ReviewsDetails.Username name={name}>
            <ReviewsDetails.UserRole title={title} />
          </ReviewsDetails.Username>
        </ReviewsDetails.UserAvatar>

        <ReviewsDetails.PostedTime date={createAt}>
          <StarReviewRating rating={rating} />
        </ReviewsDetails.PostedTime>
      </ReviewsDetails.Container>

      <ReviewsDetails.UserComment text={text} />
    </ReviewsDetails>
  );
};
