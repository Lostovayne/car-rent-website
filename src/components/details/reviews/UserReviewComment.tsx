import { ReviewsDetails, StarReviewRating } from "@/components";
import { transformCommentData } from "@/adapters";
// import { IReview } from "@/interfaces";
interface Props {
  review: {
    id: string;
    imageUrl: string;
    name: string;
    title: string;
    rating: number;
    text: string;
    createAt: Date;
  };
}
export const UserReviewComment = ({ review }: { review: Props }) => {
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
