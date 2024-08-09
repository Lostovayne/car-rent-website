import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RentalInfoSchema, RentalInfoSchemaType } from "../../schemas";


export const useRentalInfo = () => {
  const form = useForm<RentalInfoSchemaType>({
    resolver: zodResolver(RentalInfoSchema),
    defaultValues: {
    },
  });
  
  return (
    form
  )
}