import { IReview } from "@/interfaces";
import { formatDate } from "@/helper";

interface ReviewData {
  id: string;
  imageUrl: string;
  name: string;
  title: string;
  rating: number;
  text: string;
  createAt: string;
}

export const transformCommentData = (review: IReview): ReviewData => {
  return {
    id: review.user.id,
    imageUrl: review.user.imageUrl ?? "",
    name: review.user.name,
    title: review.user.title ?? "",
    rating: review.rating,
    text: review.text,
    createAt: formatDate(review.createAt),
  };
};
