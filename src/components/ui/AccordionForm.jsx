import React, { useState } from 'react'
import LocationList from './LocationList'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './button'
import { Calendar } from "@/components/ui/calendar"
import GuestCounter from './GuestCounter'

const AccordionForm = () => {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [date, setDate] = useState(new Date())
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

  return (
    <form action="" onSubmit={handleSubmit}>
        <Accordion className={"m-4 mt-16 rounded-3xl bg-white"} type="single" collapsible>
            {/* Location Picker */}
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem]"} value="item-1">
                <AccordionTrigger>Location</AccordionTrigger>
                <AccordionContent>
                    <LocationList selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
                </AccordionContent>
            </AccordionItem>
            {/* Date Picker */}
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem]"} value="item-2">
                <AccordionTrigger>Date</AccordionTrigger>
                <AccordionContent>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-lg border"
                    />                
                </AccordionContent>
            </AccordionItem>
            {/* Guest Picker */}
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem]"} value="item-3">
                <AccordionTrigger>Guest</AccordionTrigger>
                <AccordionContent>
                 <GuestCounter
                    label="Adults"
                    description="after 12 years old"
                    value={adults}
                    setValue={setAdults}
                />
                <GuestCounter
                    label="Children"
                    description="under 12 years old"
                    value={children}
                    setValue={setChildren}
                />
                </AccordionContent>
            </AccordionItem>
            {/* Search Button */}
            <AccordionItem className={"flex justify-center"} value="item-3 ">
                    <Button type="submit" variant="outline" className="text-[1.25rem] my-6 ">
                      Search
                    </Button>
            </AccordionItem>
        </Accordion>
    </form>
  )
}

export default AccordionForm