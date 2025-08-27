// import { useEffect } from "react";

// export function useLockBodyScroll(isLocked: boolean) {
//   useEffect(() => {
//     if (isLocked) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//   }, [isLocked]);
// }


import { useEffect } from "react";

export function useLockBodyScroll(open: boolean) {
  useEffect(() => {
    const body = document.body;

    if (open) {
      const scrollBarWidth = window.innerWidth - body.clientWidth;

      body.style.overflow = "hidden";
      body.style.marginRight = `${scrollBarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.marginRight = "";
    }

    return () => {
      // Cleanup on unmount
      body.style.overflow = "";
      body.style.marginRight = "";
    };
  }, [open]);
}
