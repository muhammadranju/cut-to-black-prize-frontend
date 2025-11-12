"use client";

import { User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sulfiye (M) Leder",
      rating: 5,
      text: "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
    },
    {
      name: "Sulfiye (M) Leder",
      rating: 5,
      text: "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
    },
    {
      name: "Sulfiye (M) Leder",
      rating: 5,
      text: "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
    },
    {
      name: "Sulfiye (M) Leder",
      rating: 5,
      text: "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
    },
    {
      name: "Sulfiye (M) Leder",
      rating: 5,
      text: "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
    },
    {
      name: "Sulfiye (M) Leder",
      rating: 5,
      text: "The quality of the design is top-notch, and I love how organized the files are. It's easy to find what I need.",
    },
  ];

  return (
    <section className="w-full py-16 px-6 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Testimonials
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index: number, className: string) {
              return (
                '<span class="' +
                className +
                ' bg-yellow-500 w-2 h-2 rounded-full opacity-50 transition-opacity"></span>'
              );
            },
          }}
          className="max-w-7xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-neutral-800/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 h-full transition-all duration-300 hover:bg-neutral-700/50 hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                    <User className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-yellow-400 text-base font-semibold">
                      {testimonial.name}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-neutral-300 text-base leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
