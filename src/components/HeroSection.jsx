import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroSection from "../assets/herosection.png"; 

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []); 

    return (
        <section className="flex flex-col items-center justify-center w-full h-auto min-h-[541px] bg-[#fde8e8] px-4">
            <h1 data-aos="fade-up" className="text-black text-center text-[28px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] 
                     leading-[1.2] font-bold max-w-[1000px] mt-[8rem]">
                Boost Your Business with <br className="hidden md:block" />
                results-driven paid search ads!
            </h1>

            <p data-aos="fade-up" data-aos-delay="200" className="text-gray-600 text-center text-[16px] md:text-[20px] font-medium max-w-[800px] mb-[30px]">
                Our seasoned team of paid search specialists leverages cutting-edge technology.
            </p>

            <button data-aos="fade-up" data-aos-delay="400" className="bg-black text-white px-10 py-3 rounded-full text-[16px] md:text-[18px]  
                           flex items-center gap-2 hover:bg-[#EF4335] ">
                LET’S TALK
                <i className="bx bx-right-arrow-alt text-white text-[20px]"></i>
            </button>

            {/* Hero Image */}
            <div data-aos="fade-up" data-aos-delay="600" className="flex justify-center mt-6 w-full">
                <img
                    src={heroSection}
                    alt="Hero"
                    className="w-full max-w-[1326px] h-auto md:h-[541px] object-contain"
                />
            </div>
           
            

        </section>
    );
};

export default HeroSection;

