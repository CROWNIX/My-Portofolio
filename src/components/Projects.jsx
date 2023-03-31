import React from 'react';
import Nutri from '../assets/img/projects/nutri.png';
import Peduli from '../assets/img/projects/peduli.png';

const Projects = () => {
    return (
        <section id='project' className='bg-slate-100 pt-36 pb-16 dark:bg-slate-800'>
            <div className='container'>
                <div className='w-full px-4'>
                    <div className='mx-auto mb-10 max-w-xl text-center'>
                        <h4 className='mb-2 text-lg font-semibold text-primary'>Portfolio</h4>
                        <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl'>New Project</h2>
                    </div>
                </div>

                <div className='flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12'>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className="overflow-hidden rounded-md shadow-md relative before:content-['<span'] before:opacity-0 md:before:opacity-70 sm:before:absolute before:w-full before:top-o before:h-full before:bg-black before:-translate-y-full hover:before:-translate-y-0 before:duration-300 group">
                            <div className='hidden md:flex absolute w-full h-full justify-center items-center -translate-y-full group-hover:-translate-y-0 duration-300'>
                                <a href='https://nutricounter.info/' className='px-5 py-2 text-white border border-slate-200 rounded-lg hover:bg-primary transition duration-500' target='_blank' rel='noopener noreferrer'>
                                    Preview
                                </a>
                            </div>

                            <img src={Nutri} alt='Landing Page' className='h-56 w-full' />
                        </div>
                        <h3 className='mt-5 mb-2 text-xl font-semibold text-dark dark:text-white'>Website Nutri Counter</h3>
                        <span className='text-base font-normal text-gray-600'>2 Weeks Ago</span>
                        <p className='text-base font-medium text-secondary mb-5 mt-4'>Merupakan website yang baik untuk kesehatan anda & mendukung pengelolaan nutrisi tubuh anda</p>
                        <a
                            href='https://nutricounter.info/'
                            className='w-[44px] h-[44px] px-5 py-3 text-base font-semibold text-white rounded-lg bg-primary transition duration-500 hover:opacity-80'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Preview
                        </a>
                    </div>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className="overflow-hidden rounded-md shadow-md relative before:content-['<span'] before:opacity-0 md:before:opacity-70 sm:before:absolute before:w-full before:top-o before:h-full before:bg-black before:-translate-y-full hover:before:-translate-y-0 before:duration-300 group">
                            <div className='hidden md:flex absolute w-full h-full justify-center items-center -translate-y-full group-hover:-translate-y-0 duration-300'>
                                <a href='https://peduligizi.jasanya.tech' className='px-5 py-2 text-white border border-slate-200 rounded-lg hover:bg-primary transition duration-500' target='_blank' rel='noopener noreferrer'>
                                    Preview
                                </a>
                            </div>

                            <img src={Peduli} alt='Landing Page' className='h-56 w-full' />
                        </div>
                        <h3 className='mt-5 mb-3 text-xl font-semibold text-dark dark:text-white'>Website Peduli Gizi</h3>
                        <span className='text-base font-normal text-gray-600'>5 Months Ago</span>
                        <p className='text-base font-medium text-secondary mb-5 mt-4'>Aplikasi yang membantu anda mencukupi gizi setiap hari. Dan mendukung pengelolaan nutrisi anda</p>
                        <a
                            href='https://peduligizi.jasanya.tech'
                            className='w-[44px] h-[44px] px-5 py-3 text-base font-semibold text-white rounded-lg bg-primary transition duration-500 hover:opacity-80'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Preview
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
