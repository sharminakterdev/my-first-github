// "use client";

// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const slides = [
//   {
//     title: "Discover Your Next Favorite Book",
//     description:
//       "Explore thousands of books and find your next great read with BookNook.",
//     image:
//       "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
//   },
//   {
//     title: "A World of Stories Awaits You",
//     description:
//       "From fiction to history, discover stories that inspire your imagination.",
//     image:
//       "https://images.unsplash.com/photo-1512820790803-83ca734da794",
//   },
//   {
//     title: "Read More, Borrow More",
//     description:
//       "Find your favorite books and enjoy reading with our easy borrowing system.",
//     image:
//       "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//   },
// ];

// export default function HeroSlider() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-8">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         slidesPerView={1}
//         loop
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         navigation
//         className="overflow-hidden rounded-2xl"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="relative flex min-h-[420px] items-center bg-cover bg-center px-8 py-16 md:px-16"
//               style={{
//                 backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.78), rgba(0,0,0,0.15)), url(${slide.image})`,
//               }}
//             >
//               <div className="max-w-xl text-white">
//                 <h1 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
//                   {slide.title}
//                 </h1>

//                 <p className="mb-8 text-base leading-7 text-gray-200 md:text-lg">
//                   {slide.description}
//                 </p>

//                 <Link
//                   href="/books"
//                   className="inline-block rounded-lg bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
//                 >
//                   Browse Books
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    tag: "WELCOME TO BOOKNOOK",
    title: "A Little Reading Can Change Your World.",
    description:
      "Discover beautiful stories, explore new ideas, and find the books that inspire your next chapter.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200",
    number: "01",
  },
  {
    tag: "EXPLORE YOUR NEXT READ",
    title: "Every Book Opens a New Adventure.",
    description:
      "From timeless classics to modern stories, explore a world of knowledge and imagination.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200",
    number: "02",
  },
  {
    tag: "READ • BORROW • REPEAT",
    title: "Your Next Favorite Book Is Waiting.",
    description:
      "Find your favorite books and enjoy a simple, convenient reading experience with BookNook.",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200",
    number: "03",
  },
];

export default function HeroSlider() {
  return (
    <section className="bg-[#f7f8f2] px-4 py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="booknook-slider overflow-hidden rounded-[28px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.number}>
              <div className="grid min-h-[500px] overflow-hidden bg-[#e9f0e5] md:grid-cols-2">
                {/* Left Content */}
                <div className="relative flex flex-col justify-center px-7 py-14 md:px-12 lg:px-16">
                  <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/50" />

                  <div className="relative z-10">
                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-4 py-2 text-xs font-bold tracking-[2px] text-green-800">
                      <span className="h-2 w-2 rounded-full bg-green-600" />
                      {slide.tag}
                    </span>

                    <h1 className="max-w-xl text-4xl font-extrabold leading-[1.15] tracking-tight text-[#173d2b] md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 md:text-lg">
                      {slide.description}
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-5">
                      <Link
                        href="/books"
                        className="group inline-flex items-center gap-3 rounded-xl bg-[#236b45] px-7 py-4 font-semibold text-white shadow-lg shadow-green-900/15 transition duration-300 hover:-translate-y-1 hover:bg-[#174e32]"
                      >
                        Explore Books
                        <span className="text-xl transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Link>

                      <span className="text-sm font-medium text-gray-500">
                        Find your next story
                      </span>
                    </div>
                  </div>

                  <span className="absolute bottom-6 left-8 text-sm font-bold tracking-[4px] text-green-800/40 md:left-12">
                    BOOKNOOK — {slide.number}
                  </span>
                </div>

                {/* Right Image */}
                <div className="relative min-h-[280px] md:min-h-full">
                  <img
                    src={slide.image}
                    alt="Beautiful collection of books"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <div className="absolute bottom-7 right-7 rounded-2xl border border-white/40 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-widest text-green-700">
                      Your reading corner
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#173d2b]">
                      Read. Explore. Grow.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
