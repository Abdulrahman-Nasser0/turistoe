import React, { useState } from 'react'
import LocationList from '@/components/ui/LocationList'
import { Search } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Button from "@/components/ui/Button";
import { Calendar } from "@/components/ui/calendar"
import GuestCounter from '@/components/ui/GuestCounter'

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
        <Accordion className={"m-4 mt-16 md:mt-26 max-w-2xl mx-auto  rounded-2xl md:rounded-full bg-white md:flex md:justify-between md:items-center md:px-2"} type="single" collapsible>
            {/* Location Picker */}
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem] border-none relative"} value="item-1">
                <AccordionTrigger className={"text-xl"} >Location</AccordionTrigger>
                <AccordionContent className="md:absolute md:top-full md:left-0 md:w-[300px] md:bg-white md:shadow-lg md:rounded-xl md:mt-2">
                    <LocationList selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
                </AccordionContent>
            </AccordionItem>
            {/* Date Picker */}
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem] relative"} value="item-2">
                <AccordionTrigger className={"text-xl"}>Date</AccordionTrigger>
                <AccordionContent className="md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:bg-white md:shadow-lg md:rounded-xl md:mt-2">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-lg border p-4"
                        classNames={{
                          day_range_end: "day-range-end",
                          day_selected: "bg-[#003C82] text-white hover:bg-[#002961] hover:text-white focus:bg-[#003C82] focus:text-white",
                          day_today: "bg-gray-100 text-gray-900",
                          day_outside: "day-outside text-gray-400 opacity-50 aria-selected:bg-accent/50 aria-selected:text-gray-400 aria-selected:opacity-30",
                          day_disabled: "text-gray-400 opacity-50 hover:bg-transparent",
                          day_hidden: "invisible",
                          nav_button: "border border-gray-200 hover:bg-gray-100 p-1 rounded-full",
                          nav_button_previous: "absolute left-1",
                          nav_button_next: "absolute right-1",
                          caption: "flex justify-center items-center text-[1rem] font-medium p-2 relative",
                        }}
                    />                
                </AccordionContent>
            </AccordionItem>
            {/* Guest Picker */}
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem] relative"} value="item-3">
                <AccordionTrigger className={"text-xl"}>Guest</AccordionTrigger>
                <AccordionContent className="p-4 md:absolute md:top-full md:right-0 md:w-[300px] md:bg-white md:shadow-lg md:rounded-xl md:mt-2">
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
            <AccordionItem className={"flex justify-center"} value="item-3">
                    <Button type="submit" className={"my-8 md:hidden"}>
                      Search
                    </Button>
                    <button type="submit" className="hidden md:flex cursor-pointer items-center justify-center h-12 w-12 bg-[#003C82] text-white rounded-full hover:bg-[#002961] transition-colors">
                      <Search className="h-6 w-6" />
                    </button>

            </AccordionItem>
        </Accordion>
    </form>
  )
}

export default AccordionForm