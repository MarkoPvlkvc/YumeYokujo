import { LucideIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

export interface ApartmentCardProps {
  image: string;
  number: string;
  name: string;
  japaneseName: string;
  translation: string;
  description: string;
  reviews: number;
  stars: number;
  beds: number;
  guests: number;
  bathrooms: number;
  apartmentIndex: number;
}

export interface AccomodationSheetProps {
  className?: string;
  apartmentSheetCards: any[];
  setSelectedApartment: React.Dispatch<React.SetStateAction<number>>;
}

export interface ApartmentSheetCardProps {
  apartmentIndex: number;
  src: string;
  apartmentNr: string;
  name: string;
  translation: string;
  setSelectedApartment: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DatePickerWithRangeProps {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
  className?: string;
  classNameButton?: string;
  id?: string;
  disabled?: Date[];
}

export interface InfoCardProps {
  src: string;
  date: string;
  type: string;
  title: string;
  description: string;
  isHorizontal?: boolean;
  blogIndex?: number;
}

export interface SelectFromListProps {
  icon?: LucideIcon;
  text: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  classNameIcon?: string;
}

export interface PostProps {
  title: string;
  paragraphs: string[];
  src: string;
  tags: string[];
}
