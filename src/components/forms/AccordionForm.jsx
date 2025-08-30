import React, { useState } from 'react'
import LocationList from '@/components/ui/LocationList'
import { Search } from 'lucide-react'
import { validateBookingForm } from '@/validations/bookingValidation'
import Notification from '@/components/ui/Notification'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Button from "@/components/ui/Button";
import { Calendar } from "@/components/ui/calendar"
import GuestCounter from '@/components/ui/GuestCounter'
import { cn } from '@/lib/utils'

const AccordionForm = () => {
    const [selectedLocation, setSelectedLocation] = useState("Canada");
    const [date, setDate] = useState(new Date())
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Validate form
        const formErrors = validateBookingForm({
            location: selectedLocation,
            date,
            adults,
            children
        });

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setNotification({
                type: 'error',
                message: 'Please correct the errors in the form'
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success notification
            setNotification({
                type: 'success',
                message: 'Booking request submitted successfully!'
            });
            console.log("Form submitted:", {
                location: selectedLocation,
                date,
                adults,
                children
            });
            // Reset form
            setSelectedLocation("Canada");
            setDate(new Date());
            setAdults(1);
            setChildren(0);
            setErrors({});
        } catch (error) {
            console.log("Submission error:", error);
            setNotification({
                type: 'error',
                message: 'Failed to submit booking request. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <>
      {notification && (
          <Notification 
            type={notification.type} 
            message={notification.message} 
            onClose={() => setNotification(null)} 
          />
      )}
      <form action="" onSubmit={handleSubmit}>
        <Accordion className={"m-4 mt-16 md:mt-26 max-w-2xl mx-auto rounded-2xl md:rounded-full bg-white md:flex md:justify-between md:items-center md:px-2"} type="single" collapsible>
            {/* Location Picker */}
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem] border-none relative"} value="item-1">
                <AccordionTrigger 
                  className={cn(
                    "text-xl",
                    errors.location && "text-red-500 hover:text-red-600"
                  )}
                >
                  Location
                </AccordionTrigger>
                <AccordionContent className="md:absolute md:top-full md:left-0 md:w-[300px] md:bg-white md:shadow-lg md:rounded-xl md:mt-2">
                    <LocationList selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
                </AccordionContent>
            </AccordionItem>
            {/* Date Picker */}
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem] relative"} value="item-2">
                <AccordionTrigger 
                  className={cn(
                    "text-xl",
                    errors.date && "text-red-500 hover:text-red-600"
                  )}
                >
                  Date
                </AccordionTrigger>
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
                <AccordionTrigger 
                  className={cn(
                    "text-xl",
                    (errors.adults || errors.guests) && "text-red-500 hover:text-red-600"
                  )}
                >
                  Guest
                </AccordionTrigger>
                <AccordionContent className="p-4 md:absolute md:top-full md:right-0 md:w-[300px] md:bg-white md:shadow-lg md:rounded-xl md:mt-2">
                 <GuestCounter
                    label="Adults"
                    description="after 12 years old"
                    value={adults}
                    setValue={setAdults}
                    error={errors.adults}
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
            <AccordionItem className={"flex justify-center"} value="item-4">
                    <Button 
                      type="submit" 
                      className={"my-8 md:hidden"}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Searching...' : 'Search'}
                    </Button>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={cn(
                        "hidden md:flex cursor-pointer items-center justify-center h-12 w-12 bg-[#003C82] text-white rounded-full transition-colors",
                        "hover:bg-[#002961]",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-b-transparent border-white" />
                      ) : (
                        <Search className="h-6 w-6" />
                      )}
                    </button>
            </AccordionItem>
        </Accordion>
    </form>
    </>
  )
}

export default AccordionForm