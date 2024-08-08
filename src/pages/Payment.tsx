import { PaymentMain, RentalSummary } from "../components";
import { dataCarDetails } from "../data";

// TODO: obtener luego desde donde corresponda
const carDetails = dataCarDetails;

export const PaymentPage = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-5 gap-2 container">
      <div className="col-span-2 order-first md:order-last">
        <RentalSummary car={carDetails} />
      </div>

      <div className="col-span-3">
        <PaymentMain />
      </div>
    </div>
  );
};
