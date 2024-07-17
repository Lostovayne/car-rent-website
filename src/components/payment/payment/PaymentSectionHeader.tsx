import { CardDescription, CardHeader, CardTitle } from "../../ui/card"


export const PaymentSectionHeader = ({
  title,
  description,
  stepLabel
}: {
  title: string,
  description: string
  stepLabel: string
}) => {

  return (
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="font-light flex justify-between w-full">
        <span className="w-2/3">{description}</span>
        <span className="">{stepLabel}</span>
      </CardDescription>
    </CardHeader>
  )
}