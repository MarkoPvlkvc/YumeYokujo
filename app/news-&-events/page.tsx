import InfoCard from "@/components/ui/personal/info_card";
import { newsAndEventInfoCards } from "@/lib/constants";

export default function NewsAndEvents() {
  return (
    <main className="flex flex-col items-center">
      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        NEWS & EVENTS
      </p>

      <div className="mb-12 mt-9 grid grid-cols-1 justify-center gap-4 px-6 md:mb-16 md:mt-12 md:grid-cols-2 lg:mb-24 lg:mt-16 xl:grid-cols-3">
        {newsAndEventInfoCards.map((card, index) => (
          <InfoCard key={index} blogIndex={index + 1} {...card} />
        ))}
      </div>
    </main>
  );
}
