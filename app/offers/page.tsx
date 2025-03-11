import InfoCard from "@/components/ui/personal/info_card";
import { offersInfoCards } from "@/lib/constants";

export default function Offers() {
  return (
    <main className="flex flex-col items-center">
      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        OFFERS
      </p>

      <div className="mb-12 mt-9 flex flex-col items-center gap-4 px-6 md:mb-16 md:mt-12 lg:mb-24 lg:mt-16">
        {offersInfoCards.map((card, index) => (
          <InfoCard key={index} {...card} isHorizontal={true} />
        ))}
      </div>
    </main>
  );
}
