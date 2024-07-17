import { IUser } from "./user.interface"

export interface IReview {
    carId: string
    userId: string
    createAt: Date
    rating: number
    text: string

    user: IUser
}

