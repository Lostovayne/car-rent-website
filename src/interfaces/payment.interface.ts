import { BillingInfoSchemaType, RentalInfoSchemaType } from "../schemas";

export interface IPaymentInfoForm {
    billingInfo: BillingInfoSchemaType;
    rentalInfo: RentalInfoSchemaType;
}
