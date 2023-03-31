import React, {useState, useEffect, useRef} from 'react';
import mySkills from '../abstract/skills';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Skills = () => {
    const skills = ['Language', 'Framework', 'Tools'];
    const [active, setActive] = useState(0);
    const [experiences, setExperiences] = useState([]);
    const swiperRef = useRef(null);
    useEffect(() => {
        const getLanguages = () => {
            const languages = mySkills.filter((mySkill) => mySkill.type === 'language');

            setExperiences(languages);
        };

        getLanguages();
    }, []);

    useEffect(() => {
        swiperRef.current.swiper.slideTo(1);
    });

    const handleChangeExperience = (experience, index) => {
        setActive(index);
        setExperiences(mySkills.filter((mySkill) => mySkill.type === experience.toLowerCase()));
    };

    return (
        <section id='skills' className='bg-slate-100 pt-36 pb-16 dark:bg-slate-800'>
            <div className='container'>
                <div className='w-full px-4'>
                    <div className='mx-auto mb-16 text-center flex justify-center items-center flex-col'>
                        <ul className='flex justify-between w-[80%] md:w-1/2 lg:w-1/3 mb-3'>
                            {skills.map((skill, index) => (
                                <li
                                    className={`mb-2 text-md md:text-lg font-semibold  cursor-pointer transition duration-300  ${active === index ? 'text-primary' : 'text-dark dark:text-white'}`}
                                    onClick={() => handleChangeExperience(skill, index)}
                                    key={index}
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                        <h2 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl'>Experience Programming</h2>
                        <Swiper
                            ref={swiperRef}
                            slidesPerView={2}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                            }}
                            spaceBetween={5}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 5,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                            }}
                            modules={[Pagination, Autoplay]}
                            className='mySwiper'
                        >
                            {experiences &&
                                experiences.map((mySkill, index) => (
                                    <SwiperSlide className='w-full box-border' key={index}>
                                        <a
                                            href={mySkill.url}
                                            className='flex justify-center items-center flex-col hover:shadow-lg px-5 py-6 lg:py-10 w-full border-2 gap-4 rounded-lg transition duration-500 dark:hover:shadow-white dark:border-0 dark:shadow-md cursor-pointer'
                                            key={index}
                                        >
                                            <h3 className='text-lg font-semibold text-dark dark:text-white'>{mySkill.name}</h3>
                                            <img src={mySkill.image} className='object-contain block w-[150px] h-[130px] lg:w-[150px] lg:h-[150px] text-center' alt='Gojek' width='150' height='150' />
                                            <span className='text-base font-medium text-secondary'>{mySkill.level}</span>
                                        </a>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
