import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MobileScreenshot = ({ src, alt }) => (
  <div className="flex justify-center items-center w-full">
    <div className="relative mx-auto group">
      {/* Phone Frame */}
      <div className="
        relative border-gray-800 bg-gray-800 border-6 
        rounded-[2rem] shadow-xl overflow-hidden 
        w-[180px] h-[360px] 
        sm:w-[200px] sm:h-[400px] 
        md:w-[220px] md:h-[440px]
        transition-transform duration-300
      ">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-gray-800 rounded-b-lg z-20"></div>

        {/* Screen */}
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover rounded-[1.5rem]" 
        />
      </div>
    </div>
  </div>
);

export default function Carousel({ screenshots }) {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Explore the DCRUST App
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Browse through student features like notices, Attendance, PYQs, Results,
            Mess Bill Payment and campus updates in a clean mobile experience.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20} // FIXED (was 180)
          slidesPerView={1}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {screenshots.map((url, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <MobileScreenshot 
                src={url} 
                alt={`Screenshot ${index + 1}`} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #2563eb !important; 
          transform: scale(0.8);
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
        }
      `}</style>
    </section>
  );
}