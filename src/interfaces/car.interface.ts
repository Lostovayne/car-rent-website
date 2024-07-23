import { AutoCardProps } from "./AutoCard.interface";
import { IReview } from "./review.interface";

export interface ICar extends AutoCardProps {
    reviews? : IReview[]
}