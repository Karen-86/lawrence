import React from "react";
import localData from "@/localData";

const { precisionIcon } = localData.svgs;

const DifferenceCard = ({ title = "", description = "", icon = null }: any) => {
  return (
    <div className="card difference-card py-[3.5rem] px-[25px] 4xl:px-[3rem] border border-secondary-100 min-h-[370px] 4xl:min-h-[461px] flex flex-col select-none">
      <div className="card-icon flex-1">{icon()}</div>

      <h4 className="card-title text-[1.125rem] 4xl:text-[1.313rem] text-secondary-1000 mb-[2rem] ">{title}</h4>
      <p className="text-description text-sm 4xl:text-md text-secondary-800 leading-[1.5] font-light">{description}</p>
    </div>
  );
};

export default DifferenceCard;
