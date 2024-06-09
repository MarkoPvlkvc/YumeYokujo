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
import { cn } from "@/lib/utils";

const SelectFromList = ({
  icon: Icon,
  text,
  options,
  value,
  onChange,
  className,
  classNameIcon,
}: {
  icon?: LucideIcon;
  text: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  classNameIcon?: string;
}) => {
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
