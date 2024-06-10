import "bootstrap-icons/font/bootstrap-icons.css";
import ApartmentCard from "@/components/ui/personal/apartment_card";

const KazeNoYashiro = () => {
  const apartmentDataList = [
    {
      image: "/apartments/a1.jpeg",
      number: "1",
      name: "Matsu",
      japaneseName: "松",
      translation: "Pine",
      description:
        "Matsu, meaning Pine, is a haven of tranquility and strength, reflecting the enduring nature of the pine tree. This apartment is adorned with subtle green tones and natural wooden accents, creating a serene and timeless atmosphere. Guests will find a peaceful retreat, perfect for relaxation and rejuvenation. The decor includes elegant pine-themed artwork and soft lighting to enhance the calming ambiance.",
      reviews: 16,
      stars: 5,
      beds: 3,
      guests: 6,
      bathrooms: 2,
    },
    {
      image: "/apartments/a2.png",
      number: "2",
      name: "Sakura",
      japaneseName: "桜",
      translation: "Cherry Blossom",
      description:
        "Sakura, meaning Cherry Blossom, captures the fleeting beauty and delicate charm of its namesake. Soft pink hues and light wood furnishings create an enchanting and graceful environment. This apartment features exquisite cherry blossom artwork and floral arrangements, offering a visual delight. Ideal for those seeking a serene escape, Sakura is a perfect blend of elegance and tranquility.",
      reviews: 16,
      stars: 5,
      beds: 4,
      guests: 4,
      bathrooms: 1,
    },
    {
      image: "/apartments/a3.png",
      number: "3",
      name: "Fuji",
      japaneseName: "藤",
      translation: "Wisteria",
      description:
        "Fuji, meaning Wisteria, exudes love and tenderness through its soothing and romantic design. The apartment is bathed in gentle purple tones and decorated with intricate wisteria-themed elements. Guests will feel embraced by the warmth and elegance of this serene space. Soft fabrics and delicate floral motifs enhance the romantic atmosphere, making it an ideal retreat for couples.",
      reviews: 16,
      stars: 5,
      beds: 2,
      guests: 2,
      bathrooms: 1,
    },
    {
      image: "/apartments/a4.png",
      number: "4",
      name: "Kaze",
      japaneseName: "風",
      translation: "Wind",
      description:
        "Kaze, meaning Wind, symbolizes freedom and the natural flow of life. This apartment is designed with airy, light colors and flowing fabrics to create a sense of openness and refreshment. Wind-themed decorations and minimalist furnishings offer a serene and liberating environment. Guests can enjoy the gentle breeze-like ambiance, perfect for unwinding and rejuvenation.",
      reviews: 16,
      stars: 5,
      beds: 2,
      guests: 2,
      bathrooms: 1,
    },
    {
      image: "/apartments/a5.png",
      number: "5",
      name: "Tsubaki",
      japaneseName: "椿",
      translation: "Camellia",
      description:
        "Tsubaki, meaning Camellia, epitomizes admiration and perfection with its sophisticated and serene decor. The apartment features a palette of red and white tones, complemented by dark wood accents. Camellia-themed artwork and floral arrangements enhance the refined and tranquil atmosphere. Ideal for those seeking a touch of elegance and tranquility, Tsubaki offers a perfect blend of beauty and serenity.",
      reviews: 16,
      stars: 5,
      beds: 1,
      guests: 1,
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
          Kaze no Yashiro - 風の社
        </p>
        <p className="text-center text-lg font-semibold !leading-tight text-darkBlue/50 md:text-xl lg:text-2xl">
          Sanctuary of the wind
        </p>
      </div>
      <div className="mt-9 max-w-5xl px-6 md:mt-12 lg:mt-16">
        <img
          src="kazenoyashiro.jpeg"
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
                apartmentIndex={index}
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
