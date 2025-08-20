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
  );
};

export default ClientsCarousel;
