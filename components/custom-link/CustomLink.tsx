import React from "react";

const CustomLink = ({ text = "link", href = "#/", className='' }) => {
  return (
    <a
      href={href}
      className={`px-2 flex  font-medium text-xs sm:text-sm underline decoration-[rgba(0,0,0,0.4)] hover:decoration-black ${className}`}
    >
      {text}
    </a>
  );
};

export default CustomLink;
