import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card"
import { Checkbox } from "../../ui/checkbox"
import { Button } from "../../ui/button"
import { ShieldCheck } from "lucide-react"

export const ConfirmationRental = () => {
  const [spam, setSpam] = useState(false)
  const [terms, setTerms] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Confirmation</CardTitle>
        <CardDescription className="font-light flex justify-between w-full">
          <span className="w-2/3">We are getting to the end. Just few clicks and your rental is ready!</span>
          <span className="">step 4 of 4</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col space-y-8">

        {/* checkboxs */}
        <div className="flex flex-col space-y-10 bg-gray-100 p-2">
      
          {/* chweckbox spam */}
          <div className="flex items-center space-x-5">
            <Checkbox
              id="spam"
              checked={spam}
              onCheckedChange={(value: boolean) => setSpam(value)}
            />
            <label
              htmlFor="spam"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree with sending an Marketing and newsletter emails. No spam, promissed!
            </label>
          </div>

          {/* chweckbox 2 */}
          <div className="flex items-center space-x-5">
            <Checkbox
              id="terms"
              checked={terms}
              onCheckedChange={(value: boolean) => setTerms(value)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree with our terms and conditions and privacy policy.
            </label>
          </div>
        </div>

        {/* rent now */}
        <div className="">
          <Button
            variant={"default"}
            className="px-7"
            onClick={() => console.log(spam, terms)}
          >Rent Now</Button>
        </div>

        {/* safe data */}
        <div className="flex flex-col">

          <ShieldCheck className="text-blue-500" />
          <span>All your data are safe</span>
          <span className="font-light">We are using the most advanced security to provide you the best experience ever.</span>
        </div>

      </CardContent>

      <CardFooter>

      </CardFooter>
    </Card>
  )
}
