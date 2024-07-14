import type { AutoCardProps } from "./AutoCard.interface";
import { IReview } from "./review.interface";

export interface ICarDetails {
    car?: AutoCardProps
    reviews: IReview[]
}