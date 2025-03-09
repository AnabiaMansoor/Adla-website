import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import brushes from '../assets/brush.jpg';
import guldan from '../assets/guldan.jpg';
import hat from '../assets/hat.jpg';
import brand from '../assets/brand.png';
import ableton from '../assets/ableton.png';
import magix from '../assets/magix.png';

const Stories = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const succes_Stories1 = { backgroundImage: `url(${brushes})` };
    const succes_Stories2 = { backgroundImage: `url(${guldan})` };
    const succes_Stories3 = { backgroundImage: `url(${hat})` };

    return (
        <div className="bg-gradient-to-b from-[#fde6e4] to-bg-white mt-[-400px] mx-auto px-9 sm:px-10 lg:px-20">
            <div className="pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
                <div className="container mx-auto mt-[300px]">
                    <div className="grid items-center gap-[25px]  grid-cols-1 md:grid-cols-2 lg:ml-20">
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" data-aos-once="true" className="aos-init aos-animate">
                            <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center">
                                <a className="relative block h-auto rounded-[20px] p-[30px] xl:p-[10px] bg-cover bg-center w-full min-h-[290px] sm:min-h-[250px] md:min-h-[290px]" style={succes_Stories1} href="/success-stories/success-story-details/">
                                    <div className="bg-[rgba(0,0,0,0.85)] rounded-[20px] absolute inset-x-0 bottom-[30px] flex justify-between items-center px-[25px] py-[20px]">
                                        <div>
                                            <h3 className="text-white text-[20px] font-medium">EnvyTheme</h3>
                                            <p className="text-[#CACACA] text-[14px]">Premium Themes</p>
                                        </div>
                                        <div class="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" class="inline-block"><path d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z" fill="#EF4335"></path><path d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z" fill="#EF4335"></path></svg></div>
                                    </div>
                                </a>
                                <a className="relative block h-auto rounded-[20px] p-[30px] bg-cover bg-center w-full min-h-[290px] sm:min-h-[250px] md:min-h-[290px]" style={succes_Stories2} href="/success-stories/success-story-details/">
                                    <div className="bg-[rgba(0,0,0,0.85)] rounded-[20px] absolute inset-x-0 bottom-[30px] flex justify-between items-center px-[25px] py-[20px]">
                                        <div>
                                            <h3 className="text-white text-[20px] font-medium">Bolster</h3>
                                            <p className="text-[#CACACA] text-[14px]">eCommerce</p>
                                        </div>
                                        <div class="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" class="inline-block"><path d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z" fill="#EF4335"></path><path d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z" fill="#EF4335"></path></svg></div>
                                    </div>
                                </a>
                            </div>
                            <a className="relative block h-auto rounded-[20px] p-[30px] bg-cover bg-center w-full mt-[25px] min-h-[290px] sm:min-h-[250px] md:min-h-[290px]" style={succes_Stories3} href="/success-stories/success-story-details/">
                                <div className="bg-[rgba(0,0,0,0.85)] rounded-[20px] absolute inset-x-0 bottom-[30px] flex justify-between items-center px-[25px] py-[20px]">
                                    <div>
                                        <h3 className="text-white text-[20px] font-medium">Shoponix</h3>
                                        <p className="text-[#CACACA] text-[14px]">eCommerce</p>
                                    </div>
                                    <div class="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]"><svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" class="inline-block"><path d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z" fill="#EF4335"></path><path d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z" fill="#EF4335"></path></svg></div>
                                </div>
                            </a>
                        </div>
                        <div className="max-w-[470px] lg:pl-[60px] xl:pl-[120px] aos-init aos-animate text-center md:text-left" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-once="true">
                            <img alt="Brand Black" loading="lazy" width="56" height="56" className="mb-[30px] sm:mb-[40px] md:mb-[50px] lg:mb-[60px] xl:mb-[70px] mx-auto md:mx-0" src={brand} />
                            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">Success Stories</h4>
                            <h2 className="text-black font-bold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
                                Driving success through strategic paid search advertising!
                            </h2>
                            <a className="text-black text-[14px] mt-[30px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]" href="/success-stories/">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Stories;
