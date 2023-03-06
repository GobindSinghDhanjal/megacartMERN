import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";

export const Deals = () => {
  return (
    <div className="mt-1">
      <div className="d-none d-sm-none d-md-block deals-swiper ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={2000}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://megacart.pythonanywhere.com/static/image/banner3.jpg"
              alt="deals-images"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://megacart.pythonanywhere.com/static/image/banner2.jpg"
              alt="deals-images"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://megacart.pythonanywhere.com/static/image/iphone13-banner2.jpg"
              alt="deals-images"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/*  *************** MOBILE VIEW **************** */}

      <div className="d-block d-md-none deals-swiper ">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={2000}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://megacart.pythonanywhere.com/static/image/banner3mobile.jpg"
              alt="deals-images"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://megacart.pythonanywhere.com/static/image/banner2mobile.jpg"
              alt="deals-images"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://megacart.pythonanywhere.com/static/image/iphone13-banner-mobile.jpg"
              alt="deals-images"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
