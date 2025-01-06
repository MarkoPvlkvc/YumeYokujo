import Image from "next/image";

export default function Gallery() {
  return (
    <main className="flex flex-col items-center">
      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        GALLERY
      </p>

      <div className="mb-16 mt-9 grid grid-cols-minmax200 grid-rows-[200px_200px_200px_200px_200px_200px_200px] gap-4 px-6 md:mb-24 md:mt-12 md:grid-cols-[200px_200px_200px] md:grid-rows-[200px_200px_200px_200px_200px_200px_200px_200px_200px] lg:mb-32 lg:mt-16 xl:grid-cols-[250px_250px_250px_250px] xl:grid-rows-[250px_250px_250px_250px_250px_250px]">
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover md:col-span-2">
          <Image
            src="/gallery/1.jpg"
            alt="gallery image 1"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover md:row-span-2">
          <Image
            src="/gallery/2.jpg"
            alt="gallery image 2"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover">
          <Image
            src="/gallery/3.jpg"
            alt="gallery image 3"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        {/* ROW END */}

        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover md:row-span-2">
          <Image
            src="/gallery/4.jpg"
            alt="gallery image 4"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover">
          <Image
            src="/gallery/5.jpg"
            alt="gallery image 5"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover md:row-span-2">
          <Image
            src="/gallery/6.jpg"
            alt="gallery image 6"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        {/* ROW END */}

        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover md:col-span-2">
          <Image
            src="/gallery/7.jpg"
            alt="gallery image 7"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        {/* ROW END - PART END */}

        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover">
          <Image
            src="/gallery/8.jpg"
            alt="gallery image 8"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover md:col-span-2 xl:col-span-1 xl:row-span-2">
          <Image
            src="/gallery/9.jpg"
            alt="gallery image 9"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover md:col-span-2">
          <Image
            src="/gallery/10.jpg"
            alt="gallery image 10"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        {/* ROW END */}

        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover md:row-span-2">
          <Image
            src="/gallery/11.jpg"
            alt="gallery image 11"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover">
          <Image
            src="/gallery/12.jpg"
            alt="gallery image 12"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover md:row-span-2">
          <Image
            src="/gallery/13.jpg"
            alt="gallery image 13"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        {/* ROW END */}

        <div className="group relative cursor-pointer overflow-hidden rounded-3xl object-cover xl:col-span-2">
          <Image
            src="/gallery/14.jpg"
            alt="gallery image 14"
            fill
            className="h-full w-full object-cover transition-all can-hover:group-hover:scale-105"
          />
        </div>
        {/* ROW END - PART END */}
      </div>
    </main>
  );
}
