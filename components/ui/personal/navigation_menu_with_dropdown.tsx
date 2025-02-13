"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const componentsInfo: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "/#about-us",
    description:
      "Discover our mission, values, and unique experiences on the home page.",
  },
  {
    title: "Contact & Info",
    href: "/contact-&-info",
    description: "View our location, email form, working hours, and reviews.",
  },
  {
    title: "FAQ",
    href: "/faq",
    description:
      "Find answers to common questions about your stay and amenities.",
  },
];

const componentsAccommodation: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Kaze no Yashiro (Sanctuary of the Wind)",
    href: "/kaze-no-yashiro",
    description:
      "Explore our first complex with beautifully themed apartments.",
  },
  {
    title: "Yama no Sato (Mountain Village)",
    href: "/yama-no-sato",
    description:
      "Discover our second complex featuring serene, nature-inspired apartments.",
  },
  {
    title: "Gallery",
    href: "/gallery",
    description: "Browse stunning images of our retreat and accommodations.",
  },
];

const NavigationMenuWithDropdown = ({ className }: { className?: string }) => {
  return (
    <NavigationMenu className={cn("text-black/60", className)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "can-hover:hover:text-lightBlue bg-transparent font-semibold focus:text-lightBlue",
              )}
            >
              HOME
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="can-hover:hover:text-lightBlue bg-transparent font-semibold focus:text-lightBlue">
            INFO
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-[200px] flex-col gap-3 p-4 md:w-[300px] lg:w-[400px]">
              {componentsInfo.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="can-hover:hover:text-lightBlue bg-transparent font-semibold focus:text-lightBlue">
            ACCOMMODATION
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-[200px] flex-col gap-3 p-4 md:w-[300px] lg:w-[400px]">
              {componentsAccommodation.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/offers" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "can-hover:hover:text-lightBlue bg-transparent font-semibold focus:text-lightBlue",
              )}
            >
              OFFERS
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/news-&-events" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "can-hover:hover:text-lightBlue bg-transparent font-semibold focus:text-lightBlue",
              )}
            >
              NEWS & EVENTS
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "can-hover:hover:bg-accent can-hover:hover:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavigationMenuWithDropdown;
