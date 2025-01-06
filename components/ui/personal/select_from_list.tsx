import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SelectFromListProps } from "@/lib/types";

const SelectFromList = ({
  icon: Icon,
  text,
  options,
  value,
  onChange,
  className,
  classNameIcon,
}: SelectFromListProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={cn("w-[180px] bg-transparent", className)}>
        {Icon && <Icon className={cn("mr-2 h-4 w-4", classNameIcon)} />}
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
