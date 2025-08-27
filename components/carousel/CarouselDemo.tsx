"use client";

import React, { useRef, ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import localData from "@/localData";

const { arrowIcon } = localData.svgs;

type CarouselDemoProps = {
  className?: string;
  itemClassName?: string;
  anglesClassName?: string;
  contentClassName?: string;
  lineClassName?: string;
  orientation?: "horizontal" | "vertical" | undefined;
  loop?: boolean;
  align?: "start" | "center";
  autoplay?: boolean;
  noAngles?: boolean;
  items?: any;
  children: (props: { item: { [key: string]: string | number | (() => void) }; index: number }) => ReactNode;
};

export function CarouselDemo({
  className = "",
  itemClassName = "md:basis-1/2 lg:basis-1/3",
  anglesClassName = "",
  contentClassName = "",
  lineClassName = "",
  orientation = "horizontal",
  loop = false,
  align = "start",
  autoplay = false,
  noAngles = false,
  items = [{}, {}, {}, {}],
  children = () => "",
}: CarouselDemoProps) {
  const carouselRef = useRef(null);

  const [api, setApi] = React.useState<CarouselApi>();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const updateProgress = () => {
      const index = api.selectedScrollSnap(); // current slide
      const total = api.scrollSnapList().length; // total slides
      const percentage = ((index + 1) / total) * 100;
      setProgress(percentage);
    };

    updateProgress();

    api.on("select", () => {
      // Do something on select.
      console.log("trigger");
      updateProgress();
    });
    
  }, [api]);

  return (
    <Carousel
      ref={carouselRef}
      setApi={setApi}
      className={`${className} mb-[100px]`}
      opts={{
        align: align,
        loop: loop,
         duration: 40
      }}
      orientation={orientation}
      plugins={autoplay ? [Autoplay({ delay: 4000, stopOnInteraction: true, })] : []}
    >
      <CarouselContent className={`-ml-1 ${contentClassName} `}>
        {items.map((item:any, index:any) => (
          <CarouselItem key={index} className={`pl-1 ${itemClassName}`}>
            <div className="p-1">{children({ item, index })}</div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Arrows */}
      {!noAngles && (
        <div
          className={`carousel-angles hidden sm:block max-w-[100px] xl:max-w-none mt-[120px] xl:mt-0 xl:top-0 xl:h-full w-full absolute left-[50%] transform-[translateX(-50%)] pointer-events-none  ${anglesClassName}`}
        >
          <CarouselPrevious className="pointer-events-auto w-[70px] h-[70px] xl:w-[100px] xl:h-[100px] 4xl:w-[200px] 4xl:h-[200px] transform-[rotateZ(180deg)] xl:top-[200px]  xl:left-[0px] cursor-pointer " />
          <CarouselNext className="pointer-events-auto w-[70px] h-[70px] xl:w-[100px] xl:h-[100px] 4xl:w-[200px] 4xl:h-[200px]  cursor-pointer absolute xl:right-[0px]  lg:bottom-[-60px] xl:top-auto " />
        </div>
      )}

      {/* Progress Line */}
      <div className={`absolute bottom-[-70px] xl:bottom-[-100px] w-full line flex  items-center gap-3 text-[1.125rem] font-medium ${lineClassName}`}>
        <div className=" w-full h-[2px] bg-gray-200  ">
          <div className="h-full bg-secondary transition-all duration-500  " style={{ width: `${progress}%` }} />
        </div>
        <div className="">
          {/* {Math.ceil(progress / 33.33) - 1} */}
          {api ? api.selectedScrollSnap() + 1 : 1}
          <span className="text-[rgba(45,45,45,0.6)] ">/{items.length}</span>
        </div>
      </div>
    </Carousel>
  );
}
