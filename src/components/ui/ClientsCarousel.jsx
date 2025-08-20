import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ClientCard from "./ClientCard";
import { reviews } from "@/data/reviews";


const ClientsCarousel = () => {
  return (
    <div className="flex flex-col items-center w-full py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Happy Clients</h2>
      <div className="w-full max-w-7xl mx-auto mt-4">
        <Carousel opts={{
          align: "center",
          loop: true,
        }}>
          <CarouselContent className="-ml-2">
            {reviews.map((client, idx) => (
              <CarouselItem key={idx} className="pl-2 basis-full md:basis-1/2 lg:basis-1/3">
                <ClientCard client={client} />
              </CarouselItem>
            ))}
          </CarouselContent>
            <CarouselPrevious className="hidden lg:flex absolute left-[35%] top-[26rem]" />
            <CarouselNext className="hidden lg:flex absolute right-[35%] top-[26rem]" />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientsCarousel;
