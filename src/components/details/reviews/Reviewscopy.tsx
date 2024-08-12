import { CommentIterator } from "../../../components/";

import { createContext, useContext } from "react";
import { IReview } from "../../../interfaces";

interface ReviewsProps {
  reviews: IReview[];
}

const ReviewsContext = createContext<ReviewsProps | undefined>(undefined);

function useReviewsContext() {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error("useReviews must be used within a ReviewsProvider");
  }
  return context;
}

export const Reviews = ({
  reviews,
  children,
}: {
  reviews: IReview[];
  children: React.ReactNode;
}) => {
  return (
    <ReviewsContext.Provider value={{ reviews }}>
      <div className="bg-background rounded-md p-6 flex flex-col gap-2 drop-shadow-sm">
        {children}
      </div>
    </ReviewsContext.Provider>
  );
};

Reviews.Title = function ReviewsTitle({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex justify-start gap-4 items-center">
      <span className="text-xl">Reviews</span>
      {children}
    </div>
  );
};

Reviews.CommentCount = function ReviewsCommentCount() {
  const { reviews } = useReviewsContext();
  return (
    <span className="bg-primaryColor rounded-sm text-white py-0 px-4">
      {reviews.length}
    </span>
  );
};

Reviews.NoReviewsMessage = function ReviewsNoRevirewsMessage() {
  return <div>Aún no hay reseñas</div>;
};

Reviews.List = function ReviewsList() {
  const { reviews } = useReviewsContext();

  return (
    <div className="flex flex-col gap-7 mt-3">
      <CommentIterator reviews={reviews} />
    </div>
  );
};
