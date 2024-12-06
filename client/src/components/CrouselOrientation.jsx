import * as React from "react";
import { Card } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

export function CarouselOrientation() {
  const cardData = [
    { id: 1, image: "/pic2.png" },
    { id: 2, image: "/pic1.png" },
    { id: 3, image: "/pic2.png" },
    { id: 4, image: "/pic1.png" },
    { id: 5, image: "/pic2.png" },
    { id: 6, image: "/pic1.png" },
  ];

  return (
    <Carousel
      opts={{
        align: "start",

      }}
      orientation="vertical"
      className="w-full max-w-xs h-full"  // Define height properly
   
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {cardData.map((card) => (
          <CarouselItem key={card.id} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card
                backgroundImage={card.image}
                className="w-full rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
