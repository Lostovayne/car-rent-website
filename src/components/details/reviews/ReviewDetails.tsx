import { Avatar, AvatarImage } from "../../ui/avatar";
import type { IReview } from "../../../interfaces";
import { formatDate } from "../../../helper";
import { StarReviewRating } from "./StarReviewRating";

interface ReviewDetailsProps {
  review: IReview
}

export const ReviewDetails: React.FC<ReviewDetailsProps> = ({ review }) => {
  return (
    <article className="flex w-full gap-3">
      <section className="flex flex-col gap-3 w-full ">
        <div className="flex justify-between">
          <header className="flex gap-3">
            <ReviewUserAvatar imageUrl={review.user.imageUrl ?? ""} />
            <ReviewUserData name={review.user.name} title={review.user.title ?? ""} />
          </header>

          <div className="flex flex-col justify-between items-end pb-1">
            <ReviewDate date={formatDate(review.createAt)} />
            <StarReviewRating rating={review.rating} />
          </div>
        </div>

        <ReviewText text={review.text} />
      </section>
    </article>
  );
};


const ReviewUserAvatar: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <figure className="flex justify-center ">
      <Avatar className="size-12">
        <AvatarImage
          src={imageUrl}
          alt={"ed"}
          className="" />
      </Avatar>
    </figure>
  )
}

const ReviewUserData: React.FC<{ name: string; title: string }> = ({ name, title }) => {
  return (
    <div className="flex flex-col h-12 ">
      <h1 className="font-medium text-lg md:text-xl text-textPrimary">{name}</h1>
      <h2 className="font-light text-textSecondary text-sm">{title}</h2>
    </div>
  )
}

const ReviewDate: React.FC<{ date: string }> = ({ date }) => {
  return (
    < time className="font-light text-sm text-textSecondary" > {date}</time >
  )
}

const ReviewText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p className="font-light text-gray-600 text-sm px-1 sm:pl-[60px] text-pretty">
      {text}
    </p>
  )
}