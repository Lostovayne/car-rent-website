import { Star } from "lucide-react"

export const StarReviewRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1 justify-end">
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
      </div>
    )
  }