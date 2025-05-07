import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useRef } from "react";

interface Story {
  title: string;
  description: string;
  keyContributions: string[];
  legacy: string;
  field: string;
  award: string;
  year: number;
  image: string;
}

const Carousel = ({ items }: { items: Story[] }) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="max-w-3xl mx-auto py-12 relative group"> {/* Reduced the width of the carousel */}
      {/* Main Content Area */}
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 h-full mx-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <div className="text-sm text-gray-600 mb-4">
                    <p><strong>Field:</strong> {item.field}</p>
                    <p><strong>Award:</strong> {item.award}</p>
                    <p><strong>Year:</strong> {item.year}</p>
                  </div>
                  <p className="text-lg text-gray-600 mb-4">{item.description}</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
                    {item.keyContributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500">{item.legacy}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows - Positioned outside the content */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-[-55px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors shadow-lg"
        >
          &lt;
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-[-55px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors shadow-lg"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
