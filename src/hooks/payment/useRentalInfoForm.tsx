import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RentalInfoSchema, RentalInfoSchemaType } from "../../schemas";


export const useRentalInfoForm = (defaultValues: RentalInfoSchemaType) => {
  const form = useForm<RentalInfoSchemaType>({
    resolver: zodResolver(RentalInfoSchema),
    defaultValues
  });
  
  return (
    form
  )
}
