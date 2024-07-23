import { CardDescription, CardHeader, CardTitle } from "../../ui/card"

interface Props {
  title: string,
  description: string
  stepLabel: string
  levels?: number
}

export const PaymentSectionHeader: React.FC<Props> = ({
  title,
  description,
  stepLabel,
  levels=3
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