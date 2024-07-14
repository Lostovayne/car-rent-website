import { Star } from "lucide-react"
import { Avatar, AvatarImage } from "../../ui/avatar"
import type { IReview } from "../../../interfaces"
import { formatDate } from "../../../lib"


export const ReviewDetails = ({ review }: { review: IReview }) => {
  return (
    <div className="flex w-full gap-3">

      {/* avatar */}
      <div className="flex w-[4rem] justify-center">
        <Avatar className="size-12">
          <AvatarImage src={review.user.imageUrl} alt={'ed'} className="" />
        </Avatar>
      </div>

      {/* review */}
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          
          {/* user. name and titte */}
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">{review.user.name}</h1>
            <h2 className="font-light">{review.user.title?? '-'}</h2>
          </div>

          {/* date and rating */}
          <div className="flex flex-col gap-1">
            <span className="font-light">{formatDate(review.createAt)}</span>
            <div className="flex gap-1 justify-end">
              <ShowRating rating={review.rating} />
            </div>
          </div>
        </div>

        {/* review text */}
        <span className="font-light">{review.text}</span>
      </div>

    </div>
  )
}


const ShowRating = ({ rating }: { rating: number }) => {
  return (
    <>
      {
        Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            {
            (index < rating)
              ? <Star size={18} className="fill-yellow-500 text-yellow-500" />
              : <Star size={18} className="text-gray-400" />
            }
          </div>
        ))
      }
    </>
  )
}