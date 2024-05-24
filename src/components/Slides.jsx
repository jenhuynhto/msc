import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function Slides() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 1000000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper xl:mx-48"
            >
                <SwiperSlide>
                    <div className="position:relative">
                        <img className="w-full max-h-[850px] rounded-xl object-cover relative"
                            src="/src/assets/images/sf_bridge_3.jpg"
                            alt="Bay view of the San Francisco Golden Gate Bridge"
                        />
                        <div className="absolute top-32 left-32 right-32 bottom-0 nav-text">
                            <p className="text-5xl">Premiere Outpatient Surgery</p>
                            <p className="pt-7 text-4xl">Serving San Jose and the surrounding areas</p>
                            <div className="flex items-center justify-between">
                                <img className="mt-72 w-auto max-h-[250px] rounded-xl sm:w-3/4 md:w-1/2 lg:w-1/3" src="/src/assets/images/nurses_1.jpg" alt="MSC Nurses" />
                                <img className="mt-72 w-auto max-h-[250px] rounded-xl sm:w-3/4 md:w-1/2 lg:w-1/3" src="/src/assets/images/nurses_1.jpg" alt="MSC Nurses" />
                                <img className="mt-72 w-auto max-h-[250px] rounded-xl sm:w-3/4 md:w-1/2 lg:w-1/3" src="/src/assets/images/nurses_1.jpg" alt="MSC Nurses" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img className="w-full max-h-[850px] rounded-xl object-cover" src="/src/assets/images/nurses_1.jpg" alt="MSC Nurses" /></SwiperSlide>
            </Swiper>
        </>
    );
}
