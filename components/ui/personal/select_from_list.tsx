import * as React from "react";
import { Icon, LucideIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectFromList = ({
  icon: Icon,
  text,
  options,
}: {
  icon: LucideIcon;
  text: string;
  options: string[];
}) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-transparent">
        <Icon className="mr-2 h-4 w-4" />
        <SelectValue placeholder={text} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option} value={option.toLowerCase()}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectFromList;
