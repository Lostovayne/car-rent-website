import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";
import { ShieldCheck } from "lucide-react";
import { PaymentSectionHeader } from "./PaymentSectionHeader";
import { IPaymentInfoForm } from "../../../interfaces";
import { SectionCards } from "../../sectionCar/SectionCards";


interface ConfirmationRentalProps {
  values: IPaymentInfoForm;
  setStep: React.Dispatch<React.SetStateAction<number>>
}


export const ConfirmationRental: React.FC<ConfirmationRentalProps> = ({ values, setStep }) => {
  const [spam, setSpam] = useState(false);
  const [terms, setTerms] = useState(false);

  const onClickPrevious = () => {
    setStep((prev) => prev - 1)
  }

  const onClickPay = () => {
    setStep((prev) => prev + 1)
  }

  return (
    <Card>
      <PaymentSectionHeader
        title="Confirmation"
        description="We are getting to the end. Just few clicks and your rental is ready!"
        stepLabel={3}
      />

      <ShowInfo values={values} />

      <CardContent className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-10 bg-gray-100 p-2">
          {/* chweckbox spam */}
          <div className="flex items-center space-x-5">
            <Checkbox id="spam" checked={spam} onCheckedChange={(value: boolean) => setSpam(value)} />
            <label htmlFor="spam" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I agree with sending an Marketing and newsletter emails. No spam, promissed!
            </label>
          </div>

          {/* chweckbox 2 */}
          <div className="flex items-center space-x-5">
            <Checkbox id="terms" checked={terms} onCheckedChange={(value: boolean) => setTerms(value)} />
            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I agree with our terms and conditions and privacy policy.
            </label>
          </div>
        </div>

        {/* rent now */}
        <div className="flex justify-end">
          <Button variant={"link"} type="button" onClick={onClickPrevious}>Regresar</Button>
          <Button variant={"default"} type="button" className="px-7 " onClick={onClickPay}>
            Pay now
          </Button>
        </div>

        {/* safe data */}
        <div className="flex flex-col">
          <ShieldCheck className="text-blue-500" />
          <span>All your data are safe</span>
          <span className="font-light">We are using the most advanced security to provide you the best experience ever.</span>
        </div>
      </CardContent>

    </Card>
  );
};


const ShowInfo: React.FC<{ values: IPaymentInfoForm }> = ({ values }) => {
  return (
    <SectionCards className="mb-3">
      <h1 className="text-xl font-bold mb-3">Verify Data</h1>

      <h2 className="font-bold">Billing Info</h2>
      <div className="grid grid-cols-2 sm:ml-3">
        <span>Name:</span> <span>{values.billingInfo.name}</span>
        <span>Address:</span> <span>{values.billingInfo.address}</span>
        <span>City:</span> <span>{values.billingInfo.city}</span>
        <span>Phone Number:</span> <span>{values.billingInfo.phoneNumber}</span>
      </div>

      <h2 className="font-bold mt-3">Rental Info</h2>
      <div className="grid grid-cols-2 sm:ml-3">
        <span>Pick Up Date:</span> <span>{values.rentalInfo.pickUpDate.toString()}</span>
        <span>Pick Up Location:</span> <span>{values.rentalInfo.pickUpLocation}</span>
        <span>Pick Up Time:</span> <span>{values.rentalInfo.pickUpTime}</span>

        <div className="col-span-2 flex items-center my-5 w-full">
          <div className="flex-1 border-t border-gray-500 w-full"></div>
        </div>

        <span>Drop Off Date:</span> <span>{values.rentalInfo.dropOffDate.toString()}</span>
        <span>Drop Off Location:</span> <span>{values.rentalInfo.dropOffLocation}</span>
        <span>Drop Off Time:</span> <span>{values.rentalInfo.dropOffTime}</span>
      </div>
    </SectionCards>
  )
}
