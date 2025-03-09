import awardIcon from "../assets/awards.png";
import clutchLogo from "../assets/clutch.png";
import "boxicons/css/boxicons.min.css";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import e3 from "../assets/e3.png";
import divider from '../assets/divider.png';


const ReviewSection = () => {
    return (
        <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="lg:flex lg:justify-between lg:items-center space-y-6 lg:space-y-0">

                    <div className="flex items-center space-x-4 rtl:space-x-reverse border p-3 sm:p-5 lg:border-0 lg:p-0 relative
                                before:content-[''] before:absolute before:right-[-50%] rtl:before:right-auto rtl:before:left-[-50%]
                                before:bg-[#E3E3E3] before:h-[44px] before:w-[1px] before:rotate-[25deg] before:top-[0] before:hidden
                                xl:before:block last-of-type:before:hidden aos-init aos-animate"
                         data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" data-aos-once="true">

                        <div className="flex -space-x-2 rtl:space-x-reverse overflow-hidden">
                            <img alt="user1" className="inline-block h-[38px] w-[38px] sm:h-[46px] sm:w-[46px] rounded-full ring-[3px] ring-white"
                                 src={e1} />
                            <img alt="user2" className="inline-block h-[38px] w-[38px] sm:h-[46px] sm:w-[46px] rounded-full ring-[3px] ring-white"
                                 src={e2} />
                            <img alt="user3" className="inline-block h-[38px] w-[38px] sm:h-[46px] sm:w-[46px] rounded-full ring-[3px] ring-white"
                                 src={e3} />
                        </div>

                        <div className="font-medium">
                            <a className="font-medium text-black transition duration-500 ease-in-out hover:text-[#EF4335]" href="/team/">
                                Meet Our Experts
                                <svg className="inline-block relative" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"
                                          d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 rtl:space-x-reverse border p-3 sm:p-5 lg:border-0 lg:p-0 relative
                                before:content-[''] before:absolute before:right-[-50%] rtl:before:right-auto rtl:before:left-[-50%]
                                before:bg-[#E3E3E3] before:h-[44px] before:w-[1px] before:rotate-[25deg] before:top-[0] before:hidden
                                xl:before:block last-of-type:before:hidden aos-init aos-animate"
                         data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-once="true">

                        <img alt="award" className="w-[46px]" src={awardIcon} />
                        <div>
                            <p className="font-medium text-black">Award Winning Agency</p>
                            <p className="font-medium text-black">
                                <span className="font-bold text-[20px]">3500+</span> Active Clients
                            </p>
                        </div>
                    </div>

                    <div className="border p-3 sm:p-5 lg:border-0 lg:p-0 relative
                                before:content-[''] before:absolute before:right-[-50%] rtl:before:right-auto rtl:before:left-[-50%]
                                before:bg-[#E3E3E3] before:h-[44px] before:w-[1px] before:rotate-[25deg] before:top-[0] before:hidden
                                xl:before:block last-of-type:before:hidden aos-init aos-animate"
                         data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" data-aos-once="true">

                        <div className="flex items-center space-x-6 rtl:space-x-reverse justify-between mb-[14px]">
                            <p className="text-black font-medium leading-none">Review On</p>
                            <div className="leading-none">
                                <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                                <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                                <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                                <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                                <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6 rtl:space-x-reverse justify-between text-end">
                        
                            <img alt="clutchLogo" className="w-[82px] h-[24px]" src={clutchLogo} />
                            <p className="text-black font-medium">1500+ Reviews</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container mx-auto lg:m-9 p-8">
            <img alt="borderLine" src={divider} loading="lazy" width="1326" height="6" decoding="async" data-nimg="1"  />
            </div>
        </div>
    );
};

export default ReviewSection;
