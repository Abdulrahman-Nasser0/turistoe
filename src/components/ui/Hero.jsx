import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from './button'

const Hero = () => {
  return (
    <div className="flex flex-col justify-center ">
        {/* Hero Heading */}
        <h1 className='text-center text-white font-inter text-[4rem] 
            font-bold leading-none mt-16
        
        '>Explore Our Delightful World</h1>

        {/* Hero Accordion */}
        <Accordion className={"m-4 mt-16 rounded-3xl bg-white"} type="single" collapsible>
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem]"} value="item-1">
                <AccordionTrigger>Location</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                Yes. It adheres to the WAI-ARIA design pattern.
                Yes. It adheres to the WAI-ARIA design pattern.
                Yes. It adheres to the WAI-ARIA design pattern.
                Yes. It adheres to the WAI-ARIA design pattern.
                Yes. It adheres to the WAI-ARIA design pattern.
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem]"} value="item-2">
                <AccordionTrigger>Date</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem className={"px-[1.125rem] py-1 text-[1.25rem]"} value="item-3">
                <AccordionTrigger>Guest</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem className={"flex justify-center"} value="item-3 ">
                    <Button variant="outline" className="text-[1.25rem] my-6 ">
                    Search
                    </Button>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default Hero