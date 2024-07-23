import { CardDescription, CardHeader, CardTitle } from "../../ui/card"


export const PaymentSectionHeader = ({
  title,
  description,
  stepLabel,
  levels=3
}: {
  title: string,
  description: string
  stepLabel: number
  levels?: number
}) => {

  return (
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="font-light flex justify-between w-full">
        <span className="w-2/3">{description}</span>
        <span className="">{`step ${stepLabel} of ${levels}`}</span>
      </CardDescription>
    </CardHeader>
  )
}