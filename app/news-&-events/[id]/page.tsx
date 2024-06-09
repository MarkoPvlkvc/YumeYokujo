export default function NewsAndEventsDetails() {
  const post = {
    title: "Moonlit Onsen Soiree",
    paragraphs: [
      "Nestled amidst the tranquil landscapes of Yume Yokujo Oasis Retreat, a truly enchanting evening awaits. Prepare to be whisked away on a journey of relaxation and romance under the shimmering canopy of stars. Welcome to our Moonlit Onsen Soiree, where the magic of the night meets the soothing embrace of our natural hot springs.",
      "As dusk descends and the first twinkling stars emerge, guests are invited to immerse themselves in the serene ambiance of our Moonlit Onsen Soiree. Picture-perfect scenes unfold as the gentle glow of moonlight dances upon the tranquil waters, creating an atmosphere of pure enchantment.",
      "Step into our rejuvenating baths and feel the warmth of the mineral-rich waters envelop you in a blissful embrace. Let your cares melt away as you unwind beneath the vast expanse of the night sky, surrounded by the symphony of nature's whispers.",
      "But the magic doesn't stop there. Indulge your senses with a tantalizing array of gourmet delights, expertly crafted to tantalize your taste buds and elevate your dining experience to new heights. From delectable sushi rolls to mouthwatering tempura, each dish is a celebration of Japanese culinary artistry.",
      "Sip on specialty cocktails inspired by the flavors of the season, perfectly complementing the exquisite flavors of our cuisine. Whether you prefer a refreshing yuzu-infused cocktail or a classic sake martini, our expert mixologists are on hand to delight your palate with their creative concoctions.",
      "As you savor your culinary delights, be serenaded by the melodic strains of live music drifting through the air. From traditional Japanese melodies to contemporary tunes, our talented musicians provide the perfect soundtrack for an evening of relaxation and enchantment.",
      "And as the night unfolds, lose yourself in the mesmerizing beauty of the starlit sky. Feel the gentle caress of the night breeze against your skin as you revel in the sheer magnificence of the universe above.",
      "Join us for an unforgettable evening of relaxation, romance, and pure enchantment at our Moonlit Onsen Soiree. Escape the ordinary and experience the extraordinary under the stars at Yume Yokujo Oasis Retreat.",
    ],
    src: "/news1.jpg",
    tags: ["Moonlit", "Onsen", "Retreat", "Romance"],
  };

  return (
    <main className="flex flex-col items-center">
      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        NEWS & EVENTS
      </p>
      <p className="text-center text-xl font-semibold md:mt-1 md:text-2xl lg:mt-2 lg:text-3xl">
        {post.title}
      </p>

      {/* Blog Article */}
      <div className="mx-auto max-w-3xl px-6 pb-12 pt-9 sm:px-8 md:pt-12 lg:px-10 lg:pt-16">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            {/* Map over the first two paragraphs */}
            {post.paragraphs.slice(0, 2).map((paragraph, index) => (
              <p key={index} className="text-lg text-black/50">
                {paragraph}
              </p>
            ))}

            <figure>
              <img
                className="w-full rounded-xl object-cover"
                src={post.src}
                alt="Image Description"
              />
              <figcaption className="mt-3 text-center text-sm text-black/50">
                Night at the resort.
              </figcaption>
            </figure>

            {/* Map over the rest of the paragraphs */}
            {post.paragraphs.slice(2).map((paragraph, index) => (
              <p key={index} className="text-lg text-black/50">
                {paragraph}
              </p>
            ))}

            {/* Tags */}
            <div>
              {post.tags.map((tag, index) => (
                <p
                  key={index}
                  className="m-1 inline-flex items-center gap-1.5 rounded-full border-[1px] border-black/15 px-3 py-2 text-sm text-black/60"
                >
                  {tag}
                </p>
              ))}
            </div>
            {/* End Tags */}
          </div>
          {/* End Content */}
        </div>
      </div>
      {/* End Blog Article */}
    </main>
  );
}
