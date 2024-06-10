import InfoCard from "@/components/ui/personal/info_card";

export default function NewsAndEvents() {
  const newsAndEventInfoCards = [
    {
      src: "news1.jpg",
      date: "MAY 11, 2024",
      type: "EVENT",
      title: "Moonlit Onsen Soiree",
      description:
        "Experience the magic of our Moonlit Onsen Soiree, where the soothing waters of our natural hot springs meet the shimmering glow of the moonlight. Slip into the warm embrace of our rejuvenati...",
    },
    {
      src: "news2.jpg",
      date: "MAY 09, 2024",
      type: "EVENT",
      title: "Sakura Serenity Festival",
      description:
        "Join us for a celebration of the enchanting cherry blossoms during our Sakura Serenity Festival. Witness the breathtaking beauty of the sakura trees in full bloom as...",
    },
    {
      src: "news3.jpg",
      date: "MAY 06, 2024",
      type: "NEWS",
      title: "Unveiling Our New Wellness Retreat",
      description:
        "We are thrilled to announce the launch of our newest offering: the Yume Yokujo Wellness Retreat. Designed to elevate your journey...",
    },
  ];

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
