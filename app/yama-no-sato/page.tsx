import "bootstrap-icons/font/bootstrap-icons.css";
import ApartmentCard from "@/components/ui/personal/apartment_card";

const KazeNoYashiro = () => {
  const apartmentDataList = [
    {
      image: "/apartments/b1.jpeg",
      number: "1",
      name: "Take",
      japaneseName: "竹",
      translation: "Bamboo",
      description:
        "Take, meaning Bamboo, represents resilience and strength through its calm and invigorating design. The apartment is decorated with green tones and bamboo accents, creating a refreshing and natural atmosphere. Bamboo-themed artwork and furniture enhance the sense of tranquility and strength. Guests will feel revitalized and connected to nature in this serene retreat. Experience the essence of resilience in the peaceful embrace of Take.",
      reviews: 16,
      stars: 5,
      beds: 3,
      guests: 6,
      bathrooms: 2,
    },
    {
      image: "/apartments/b2.jpeg",
      number: "2",
      name: "Ume",
      japaneseName: "梅",
      translation: "Plum Blossom",
      description:
        "Ume, meaning Plum Blossom, symbolizes hope and renewal with its uplifting and refreshing design. The apartment features soft pink and white tones, light wood furnishings, and plum blossom-themed decorations. Guests will find a sense of renewal and optimism in this bright and cheerful space. Floral arrangements and delicate motifs enhance the invigorating atmosphere, making it an ideal retreat for rejuvenation.",
      reviews: 16,
      stars: 5,
      beds: 2,
      guests: 4,
      bathrooms: 1,
    },
    {
      image: "/apartments/b3.jpeg",
      number: "3",
      name: "Hoshi",
      japaneseName: "星",
      translation: "Star",
      description:
        "Hoshi, meaning Star, represents guidance and a sense of wonder through its tranquil and inspiring design. The apartment is adorned with deep blue tones and starry patterns, creating a celestial ambiance. Star-themed decorations and subtle lighting enhance the serene and enchanting environment. Ideal for stargazers and dreamers, Hoshi offers a peaceful retreat filled with wonder and tranquility.",
      reviews: 16,
      stars: 5,
      beds: 4,
      guests: 5,
      bathrooms: 1,
    },
    {
      image: "/apartments/b4.jpeg",
      number: "4",
      name: "Mizu",
      japaneseName: "水",
      translation: "Water",
      description:
        "Mizu, meaning Water, symbolizes purity and calmness with its soothing and refreshing design. The apartment features blue tones, flowing lines, and water-inspired accents to create a serene atmosphere. Water-themed artwork and decor enhance the sense of tranquility and purity. Guests will find a peaceful retreat, perfect for relaxation and rejuvenation. Experience the essence of calmness in the tranquil and elegant Mizu apartment.",
      reviews: 16,
      stars: 5,
      beds: 2,
      guests: 4,
      bathrooms: 1,
    },
    {
      image: "/apartments/b5.jpeg",
      number: "5",
      name: "Hana",
      japaneseName: "花",
      translation: "Flower",
      description:
        "Hana, meaning Flower, represents beauty and the essence of nature through its vibrant and cheerful design. The apartment is decorated with a palette of vibrant colors and floral patterns, creating a lively and delightful atmosphere. Flower-themed artwork and fresh flower arrangements enhance the sense of natural beauty and elegance. Ideal for nature lovers, Hana offers a refreshing and inspiring retreat.",
      reviews: 16,
      stars: 5,
      beds: 2,
      guests: 4,
      bathrooms: 1,
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col justify-center">
        <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
          ACCOMMODATION
        </p>
        <p className="mt-0 text-center text-xl font-semibold md:mt-2 md:text-2xl lg:text-3xl">
          Yama no Sato - 山の里
        </p>
        <p className="text-center text-lg font-semibold !leading-tight text-darkBlue/50 md:text-xl lg:text-2xl">
          Mountain Village
        </p>
      </div>
      <div className="mt-9 max-w-5xl px-6 md:mt-12 lg:mt-16">
        <img
          src="yamanosato.jpeg"
          className="h-[350px] w-full rounded-3xl object-cover md:h-[500px]"
        ></img>
        <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
          APARTMENTS
        </p>
        <div className="mb-12 mt-9 flex flex-col gap-9 md:mb-16 md:mt-12 lg:mb-24 lg:mt-16">
          {apartmentDataList.map((apartmentData, index) => (
            <>
              <ApartmentCard
                key={index}
                apartmentIndex={index + 5}
                {...apartmentData}
              />
              <div className="w-full rounded-3xl border-[1px] border-black/5 last:hidden" />
            </>
          ))}
        </div>
      </div>
    </main>
  );
};

export default KazeNoYashiro;
