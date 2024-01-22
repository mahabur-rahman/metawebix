import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const MainContent = () => {
  return (
    <div className="text-center flex items-center justify-center h-screen bg-red-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-50 shadow-2xl">
          <div className="p-6">
            <h2 className="text-black font-semibold">some content here</h2>
            <p className="text-slate-400 text-sm my-4">some para here</p>
            <button
              type="button"
              className="bg-red-500 text-white text-xs px-3 rounded-3xl mb-3"
            >
              + New meeting
            </button>
            <input placeholder="enter something" className="w-full px-3 py-1" />
            <span className="text-black-100">Join</span>
          </div>
        </div>
        <div className="bg-blue-50">
          <Swiper
            navigation={{ clickable: true }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide className="h-52 w-full">
              <img
                src="https://images.unsplash.com/photo-1705783679154-c47fab616434?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 1"
              />
            </SwiperSlide>

            <SwiperSlide className="h-52 w-full">
              <img
                src="https://images.unsplash.com/photo-1705594125987-343e11860a20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 2"
              />
            </SwiperSlide>

            <SwiperSlide className="h-52 w-full">
              <img
                src="https://images.unsplash.com/photo-1705719418761-3808881d06b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 3"
              />
            </SwiperSlide>

            <SwiperSlide className="h-52 w-full">
              <img
                src="https://images.unsplash.com/photo-1682685797439-a05dd915cee9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Slide 4"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
