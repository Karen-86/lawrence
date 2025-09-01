// import React, { ReactNode } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// type ItemsProps = {
//   trigger: any;
//   content: string | ReactNode;
// };

// type AccordionDemoProps = {
//   className?: string;
//   triggerClassName?: string;
//   items: ItemsProps[];
//   type?: "single" | "multiple";
// };

// export function AccordionDemo({ className = "",triggerClassName  = '' , items = [], type = "single" }: AccordionDemoProps) {
//   /* for multiple type remove collapsible attribute*/
//   return (
//     <Accordion
//       type={type}
//       {...(type === "single" ? { collapsible: true } : {})}
//       className={`accordion-demo ${className}`}
//     >
//       {items.map((item, index) => {
//         return (
//           <AccordionItem value={`item-${uuidv4()}`} key={index}>
//             <AccordionTrigger className={`${triggerClassName} !no-underline cursor-pointer`}>{item.trigger()}</AccordionTrigger>
//             <AccordionContent>{item.content}</AccordionContent>
//           </AccordionItem>
//         );
//       })}
//     </Accordion>
//   );
// }

// "use client";

// import React, { ReactNode, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { Plus, Minus } from "lucide-react"; // lightweight icon

// type ItemsProps = {
//   trigger: any;
//   content: string | ReactNode;
// };

// type AccordionDemoProps = {
//   className?: string;
//   triggerClassName?: string;
//   items: ItemsProps[];
//   type?: "single" | "multiple";
// };

// export function AccordionDemo({ className = "", triggerClassName = "", items = [], type = "single" }: AccordionDemoProps) {
//   const [activeItem, setActiveItem] = useState(0);

//   return (
//     <Accordion type={type} {...(type === "single" ? { collapsible: true } : {})} className={`accordion-demo ${className}`}>
//       {items.map((item, index) => {
//         return (
//           <AccordionItem value={`item-${uuidv4()} `} key={index}>
//             <AccordionTrigger
//               // onClick={() => setActiveItem(activeItem === index ? -1 : index)}
//               className={` flex items-center gap-2 text-left ${triggerClassName} !no-underline cursor-pointer before:hidden`}
//             >
//               {activeItem == index ? (
//                 <Plus
//                   strokeWidth={0.5}
//                   className="w-19 h-19 shrink-0 text-dark data transition-all duration-300
//                 "
//                 />
//               ) : (
//                 <Minus
//                   strokeWidth={0.5}
//                   className="w-19 h-19 shrink-0 text-dark data transition-all duration-300
//                 "
//                 />
//               )}

//               <span>{item.trigger()}</span>
//             </AccordionTrigger>
//             <AccordionContent>{item.content}</AccordionContent>
//           </AccordionItem>
//         );
//       })}
//     </Accordion>
//   );
// }

"use client";

import React, { ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react"; // lightweight icon

type ItemsProps = {
  trigger: any;
  content: string | ReactNode;
};

type AccordionDemoProps = {
  className?: string;
  triggerClassName?: string;
  items: ItemsProps[];
  type?: "single" | "multiple";
};
export function AccordionDemo({ className = "", triggerClassName = "", items = [], type = "single" }: AccordionDemoProps) {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <Accordion
      className={`${className}`}
      type="single"
      collapsible
      value={openItem} // <-- controlled value here
      onValueChange={setOpenItem} // <-- controlled handler here
    >
      {items.map((item, index) => {
        const value = `item-${index}`;
        const isOpen = openItem === value;

        return (
          <AccordionItem key={value} value={value} className="border-none user-select-none  duration-300">
            <AccordionTrigger
              className={`flex sm:pt-5 pb-7 4xl:pt-8 justify-start gap-5 sm:gap-20 4xl:gap-30 !no-underline cursor-pointer ${triggerClassName}`}
            >
              <span className="relative sm:-mt-2 w-8 h-8 sm:w-16 sm:h-16 4xl:w-19 4xl:h-19 flex-shrink-0">
                {isOpen ? (
                  <Minus strokeWidth={0.5} className="absolute top-0 left-0 w-full h-full text-secondary-400 transition-all" />
                ) : (
                  <Plus
                    strokeWidth={0.5}
                    className="absolute top-0 left-0 w-full h-full text-dark 4xl:text-gray-800 transition-all opacity-100"
                  />
                )}
              </span>
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="flex gap-5 sm:gap-20 4xl:gap-30 pb-10 sm:pb-25 4xl:pb-35">
              <div className="w-8 h-8 sm:w-16 sm:h-16 4xl:w-19"></div>
              <div className="flex-1">{item.content}</div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
