import { formatDate } from "@/helper";

export const transformCommentData = ({ review }) => {
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
