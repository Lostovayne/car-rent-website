import { IUser } from "./user.interface"

export interface IReview {
    user: IUser
    createAt: Date
    rating: number
    text: string
}

