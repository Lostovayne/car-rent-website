import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  //FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { SectionCards } from "../../sectionCar/SectionCards";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../../ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { PaymentSectionHeader } from "./PaymentSectionHeader";
import { dataCities } from "../../../data/city.data";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  phoneNumber: z.string(),
  address: z.string().min(3).max(50),
  city: z.string().min(3).max(30),

  pickUpDate: z.date({
    required_error: "A date of birth is required.",
  }),
  pickUpLocation: z.string().min(2).max(50),
  pickUpTime: z.string().min(2).max(50),

  dropOffDate: z.date({
    required_error: "A date of birth is required.",
  }),
  dropOffLocation: z.string().min(2).max(50),
  dropOffTime: z.string().min(2).max(50),
});

export const PaymentInfoForm = () => {

  const cities = dataCities

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
      city: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-card">

      <Form {...form}>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=""
        >

          {/* Billing Info */}

          <PaymentSectionHeader
            title="Billing Info"
            description="Please enter your billing info"
            stepLabel={1}
          />

          <SectionCards className="grid grid-cols-0 sm:grid-cols-2 gap-7">

            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* phone number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* town/city */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </SectionCards>


          {/* Rental Info */}

          <PaymentSectionHeader
            title="Rental Info"
            description="Please select your rental date"
            stepLabel={2}
          />

          <SectionCards className="grid grid-cols-0 sm:grid-cols-0 gap-7 ">

            {/* Pick Up */}

            <h1 className="font-bold">Pick - Up</h1>

            <SectionCards className="grid grid-cols-0 sm:grid-cols-2 items-center gap-7 p-0"  >

              {/* pick-up location */}
              <FormField
                control={form.control}
                name="pickUpLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Locations</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
                        {
                          cities.map(city => (
                            <SelectItem
                              key={city.id ?? city.description}
                              value={city.id ?? city.description}
                            >{city.description}</SelectItem>
                          )
                          )
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* pick-up date */}
              <FormField 
                control={form.control}
                name="pickUpDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl className="">
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Selecciona tu fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    
                  />
                </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* pick-up time */}
              <FormField
                control={form.control}
                name="pickUpTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
                        <SelectItem value="06:00-10:00">06:00-10:00</SelectItem>
                        <SelectItem value="10:00-12:00">10:00-12:00</SelectItem>
                        <SelectItem value="12:00-18:00">12:00-18:00</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </SectionCards>



            
                  
                






            {/* Drop off */}

            <h1 className="font-bold">Drop - Off</h1>

            <SectionCards className="grid grid-cols-0 sm:grid-cols-2 items-center gap-7 p-0"  >

              {/* drop-off location */}
              <FormField
                control={form.control}
                name="dropOffLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Locations</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
                        {
                          cities.map(city => (
                            <SelectItem
                              key={city.id ?? city.description}
                              value={city.id ?? city.description}
                            >{city.description}</SelectItem>
                          )
                          )
                        }
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* drop-off date */}
              <FormField
                control={form.control}
                name="dropOffDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl className="">
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Selecciona tu fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            // date > new Date() || date < new Date("1900-01-01")
                            date < new Date("1900-01-01")
                          }

                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* drop-off time */}
              <FormField
                control={form.control}
                name="dropOffTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
                        <SelectItem value="06:00-10:00">06:00-10:00</SelectItem>
                        <SelectItem value="10:00-12:00">10:00-12:00</SelectItem>
                        <SelectItem value="12:00-18:00">12:00-18:00</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </SectionCards>


            <div>
              <Button type="submit">Submit</Button>
            </div>

          </SectionCards>



        </form>
      </Form>
    </div>
  );
};