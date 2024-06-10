import InfoCard from "@/components/ui/personal/info_card";

export default function Offers() {
  const offersInfoCards = [
    {
      src: "offers1.jpg",
      date: "UNTIL APR 30, 2024",
      type: "SEASONAL",
      title: "Blossom Bliss Spring Special",
      description:
        "Enjoy a 20% discount on your stay during the cherry blossom season. Indulge in complimentary guided walks to nearby cherry blossom spots and traditional tea ceremonies to fully immerse yourself in the season's splendor.",
    },
    {
      src: "offers2.jpg",
      date: "FOREVER",
      type: "ROMANTIC",
      title: "Moonlit Serenity Retreat",
      description:
        "Receive a complimentary candlelit dinner for two at our exclusive outdoor dining area, along with a bottle of champagne upon arrival. Enjoy a 15% discount on your stay when booking for 2 people.",
    },
    {
      src: "offers3.jpg",
      date: "UNTIL AUG 31, 2024",
      type: "FAMILY",
      title: "Family Fun Getaway",
      description:
        "Kids stay and eat for free! Enjoy complimentary access to our family-friendly activities, including nature walks, Japanese storytelling sessions, and traditional crafts workshops.",
    },
  ];

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
