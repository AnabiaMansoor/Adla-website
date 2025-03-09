import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ableton from '../assets/ableton.png';
import magix from '../assets/magix.png';
import velo from '../assets/velo.png';
import roblox from '../assets/roblox.png';
import razen from '../assets/razen.png';
import avon from '../assets/avon.png';

const Brands = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const allImages = [razen, avon, magix, velo, ableton, roblox];

    const getRandomImages = (count) => {
        return [...allImages].sort(() => 0.5 - Math.random()).slice(0, count);
    };

    const [randomImages, setRandomImages] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            let count = 2; 
            if (window.innerWidth >= 768 && window.innerWidth <= 1024) count = 4; 
            if (window.innerWidth >= 1028) count = allImages.length; 

            setRandomImages(getRandomImages(count));
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="gradient-bg-two pt-[10px] px-[10px] sm:px-16 lg:px-20">
            <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
                <div className="container mx-auto">
                    <h3 className="text-black text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-center mb-[30px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px]">
                        Increase your brand’s revenue with Adla
                    </h3>

                    <div className={`flex flex-wrap justify-center md:justify-between ${randomImages.length === 2 ? "gap-x-14" : "gap-4 md:gap-9 lg:gap-3"}`}>
                        {randomImages.map((img, index) => (
                            <div key={index} className="text-center w-[120px] md:w-[130px] lg:w-[140px] flex items-center justify-center">
                                <img
                                    alt="brand"
                                    loading="lazy"
                                    width="100%"
                                    height="auto"
                                    decoding="async"
                                    className="mx-auto h-[70px]" 
                                    src={img}
                                    style={{ objectFit: "contain" }} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
