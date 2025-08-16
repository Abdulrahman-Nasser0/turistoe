import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TripCard from "./TripCard";

const trips = [
  {
    country: "Canada",
    image: "/Canada.jpg",
    title: "Banff National Park",
    days: "10 days trip",
    price: "$ 3000",
  },
  {
    country: "Italy",
    image: "/Italy.jpg",
    title: "Venice Grand Tour",
    days: "7 days trip",
    price: "$ 2500",
  },
  {
    country: "China",
    image: "/China.jpg",
    title: "Great Wall Adventure",
    days: "8 days trip",
    price: "$ 2200",
  },
  {
    country: "Peru",
    image: "/Peru.jpg",
    title: "Machu Picchu Trek",
    days: "6 days trip",
    price: "$ 2100",
  },
  {
    country: "Indonesia",
    image: "/Indonesia.jpg",
    title: "Bali Island Escape",
    days: "5 days trip",
    price: "$ 1800",
  },
  {
    country: "Africa",
    image: "/Africa.jpg",
    title: "Kenya Safari",
    days: "9 days trip",
    price: "$ 2700",
  },
 
  // Add more trips as needed
];


const TripCarousel = () => {
  return (
    <Carousel className="absolute left-0 w-full">
      <CarouselContent>
        {trips.map((trip, idx) => (
          <CarouselItem key={idx} className=" basis-1/1. px-2 my-4 ml-6">
            <TripCard trip={trip} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TripCarousel;