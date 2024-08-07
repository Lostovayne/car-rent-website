import { precioAumentado } from "../../helper";
export const PriceDisplay = ({ price }: { price: number }) => {
  return (
    <div>
      <span className="font-medium text-textPrimary text-lg sm:text-2xl">
        ${price}/
      </span>
      <span className="text-textSecondary text-sm">&nbsp;day</span>
      <span className="block text-xs sm:text-sm text-textSecondary font-medium line-through">
        ${precioAumentado(price)}
      </span>
    </div>
  );
};
