import {
  CandlestickChart,
  Code,
  Command,
  Component,
  PlusSquare,
} from "lucide-react";
import React, { ReactNode } from "react";

interface TeamsProps {
  // Define your component props here
}

type TeamsDataType = {
  icon: ReactNode;
  name: string;
  key: string;
};

const TeamsData: TeamsDataType[] = [
  {
    icon: <Component className="h-4 w-4 mr-2" />,
    name: "Design team",
    key: "1",
  },
  {
    icon: <CandlestickChart className="h-4 w-4 mr-2" />,
    name: "Marketing Team",
    key: "2",
  },
  {
    icon: <Code className="h-4 w-4 mr-2" />,
    name: "Developement",
    key: "3",
  },
];

const Teams = ({}: TeamsProps) => {
  return (
    <div className="w-full p-1 mt-1.5 space-y-1 bg-white rounded-xl">
      {TeamsData.map((el) => (
        <div
          className="flex justify-between items-center p-1 hover:bg-neutral-400/15 cursor-pointer rounded-lg transition-all duration-300 ease-in-out"
          key={el.name}
        >
          <div className="flex justify-center items-center">
            {el.icon}
            <p className="text-sm font-semibold text-neutral-800">{el.name}</p>
          </div>
          <div className="flex justify-center items-center px-1 py-0.5 text-neutral-400 bg-white rounded-lg shadow-sm gap-x-1 text-sm">
            <Command className="h-4 w-4 " />
            <span>+</span>
            <span className="p-0.5">{el.key}</span>
          </div>
        </div>
      ))}

      <div className="bg-neutral-400/20 h-0.5 w-full" />

      <div className="flex justify-start items-center p-1 py-1.5 cursor-pointer rounded-lg text-neutral-400/50 hover:text-neutral-600/90 text-sm transition-all duration-300 ease-in-out">
        <PlusSquare className="h-4 w-4 mr-2" />
        <p>Custom Team</p>
      </div>
    </div>
  );
};

export default Teams;
