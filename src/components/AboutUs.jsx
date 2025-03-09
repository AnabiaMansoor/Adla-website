import React from 'react';
import bid from '../assets/bid.png';
import speed from '../assets/speed.png';
import strategy from '../assets/strategy.png';
import optimization from '../assets/optimaization.png';

const AboutUs = () => {
    return (
        <section className="container mx-auto w-full bg-[#fff] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-10">
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-start">
                <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" data-aos-once="true">
                    <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">What We Do</h4>
                    <h2 className="text-black font-bold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
                        Driving success through strategic paid search advertising!
                    </h2>
                    <a
                        className="font-medium text-black uppercase transition duration-500 ease-in-out inline-block hover:text-[#EF4335] mt-[20px] lg:mt-[40px] xl:mt-[60px]"
                        href="/about-us/"
                    >
                        Know More About Us
                        <svg className="inline-block relative -top-[2px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path stroke="#EF4335" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path>
                        </svg>
                    </a>
                </div>

                <div className="lg:col-span-2">
                    <div className="text-[#4c4c4c] mb-6 md:mb-8 lg:mb-10 xl:mb-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" data-aos-once="true">
                        <p>
                            Transforming your brand's online presence and generating meaningful results is our top priority at
                            <strong> Adla</strong>. <br />
                            As a leading paid search ad agency, we bring together a unique blend of creativity and data-driven insights.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                        {[
                            { icon: strategy, title: 'Campaign Strategy' },
                            { icon: optimization, title: 'Campaign Optimization' },
                            { icon: bid, title: 'Bid Management' },
                            { icon: speed, title: 'Performance Tracking' }
                        ].map((item, index) => (
                            <div className="text-[#4c4c4c] text-left" key={index} data-aos="fade-up" data-aos-delay={`${100 + index * 100}`} data-aos-duration="600" data-aos-once="true">
                                <img alt={item.title} className="mb-[20px] w-[70px] h-[70px] rounded-full" src={item.icon} />
                                <h3 className="text-[22px] text-black font-semibold mb-[10px]">{item.title}</h3>
                                <p>Work closely with clients to understand their business goals, target audience, and budget. Develop a comprehensive paid search strategy.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
