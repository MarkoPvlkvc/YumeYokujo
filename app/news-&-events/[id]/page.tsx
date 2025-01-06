import { posts } from "@/lib/constants";

const NewsAndEventsDetails = ({ params }: { params: { id: string } }) => {
  return (
    <main className="flex flex-col items-center">
      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        NEWS & EVENTS
      </p>
      <p className="text-center text-xl font-semibold md:mt-1 md:text-2xl lg:mt-2 lg:text-3xl">
        {posts[params.id].title}
      </p>

      {/* Blog Article */}
      <div className="mx-auto max-w-3xl px-6 pb-12 pt-9 sm:px-8 md:pt-12 lg:px-10 lg:pt-16">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            {/* Map over the first two paragraphs */}
            {posts[params.id].paragraphs.slice(0, 2).map((paragraph, index) => (
              <p key={index} className="text-lg text-black/50">
                {paragraph}
              </p>
            ))}

            <figure>
              <img
                className="w-full rounded-xl object-cover"
                src={posts[params.id].src}
                alt="Image Description"
              />
              <figcaption className="mt-3 text-center text-sm text-black/50">
                Night at the resort.
              </figcaption>
            </figure>

            {/* Map over the rest of the paragraphs */}
            {posts[params.id].paragraphs.slice(2).map((paragraph, index) => (
              <p key={index} className="text-lg text-black/50">
                {paragraph}
              </p>
            ))}

            {/* Tags */}
            <div>
              {posts[params.id].tags.map((tag, index) => (
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
};

export default NewsAndEventsDetails;
