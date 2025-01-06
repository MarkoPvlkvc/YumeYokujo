export default function Gallery() {
  return (
    <main className="flex flex-col items-center">
      <p className="mt-16 text-center font-medium text-lightBlue md:mt-24 lg:mt-32">
        GALLERY
      </p>

      <div className="mb-16 mt-9 grid grid-cols-minmax200 grid-rows-[200px_200px_200px_200px_200px_200px_200px] gap-4 px-6 md:mb-24 md:mt-12 md:grid-cols-[200px_200px_200px] md:grid-rows-[200px_200px_200px_200px_200px_200px_200px_200px_200px] lg:mb-32 lg:mt-16 xl:grid-cols-[250px_250px_250px_250px] xl:grid-rows-[250px_250px_250px_250px_250px_250px]">
        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover md:col-span-2">
          <img
            src="gallery/1.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover md:row-span-2">
          <img
            src="gallery/2.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover">
          <img
            src="gallery/3.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        {/* ROW END */}

        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover md:row-span-2">
          <img
            src="gallery/4.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover">
          <img
            src="gallery/5.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover md:row-span-2">
          <img
            src="gallery/6.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        {/* ROW END */}

        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover md:col-span-2">
          <img
            src="gallery/7.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        {/* ROW END - PART END */}

        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover">
          <img
            src="gallery/8.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover md:col-span-2 xl:col-span-1 xl:row-span-2">
          <img
            src="gallery/9.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover md:col-span-2">
          <img
            src="gallery/10.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        {/* ROW END */}

        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover md:row-span-2">
          <img
            src="gallery/11.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover">
          <img
            src="gallery/12.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover md:row-span-2">
          <img
            src="gallery/13.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        {/* ROW END */}

        <div className="group cursor-pointer overflow-hidden rounded-3xl object-cover xl:col-span-2">
          <img
            src="gallery/14.jpg"
            className="can-hover:group-hover:scale-105 h-full w-full object-cover transition-all"
          ></img>
        </div>
        {/* ROW END - PART END */}
      </div>
    </main>
  );
}
