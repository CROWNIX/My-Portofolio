import React from 'react';
import Rahmat from '../assets/img/rahmat.png';

const Hero = () => {
    return (
        <section id='home' className='pt-36 dark:bg-dark'>
            <div className='container pb-5'>
                <div className='flex flex-wrap'>
                    <div className='w-full self-center px-4 lg:w-1/2'>
                        <h1 className='text-base font-semibold text-primary md:text-xl'>
                            Hello Everyone 👋, I'm <span className='mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl'>Rahmat Fauzi</span>
                        </h1>
                        <h2 className='mb-5 text-lg font-medium text-secondary lg:text-2xl'>
                            Web Developer & <span className='text-dark dark:text-white'>Student</span>
                        </h2>
                        <blockquote className='mb-10 font-medium leading-relaxed text-secondary'>Sekali anda memahami, seribu kali anda mengerti</blockquote>

                        <a href='#contact' className='rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg'>
                            Contact me
                        </a>
                    </div>
                    <div className='w-full self-end px-4 lg:w-1/2'>
                        <div className='relative mt-10 lg:right-0 lg:mt-9'>
                            <img src={Rahmat} alt='Rahmat Fauzi' className='relative z-10 mx-auto max-w-full rounded-full' width={250} height={250} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
