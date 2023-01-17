import React from 'react';
import Portofolio1 from '../assets/img/portfolio/1.png';
import Portofolio2 from '../assets/img/portfolio/2.png';
import Portofolio3 from '../assets/img/portfolio/3.png';
import Portofolio4 from '../assets/img/portfolio/4.png';

const Projects = () => {
  return (
    <section id="portfolio" className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Portfolio</h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">Project Terbaru</h2>
            <p className="text-md font-medium text-secondary md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus porro consequuntur alias, commodi nemo enim aliquam ipsam obcaecati? Assumenda, ipsam?
            </p>
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md relative before:content-['<span'] before:opacity-0 md:before:opacity-70 sm:before:absolute before:w-full before:top-o before:h-full before:bg-black before:-translate-y-full hover:before:-translate-y-0 before:duration-300 group">
              <div className="hidden md:flex absolute w-full h-full justify-center items-center -translate-y-full group-hover:-translate-y-0 duration-300">
                <a href="www.youtube.com" className="px-5 py-2 text-white border border-slate-200 rounded-lg hover:bg-primary duration-300" target="_blank">Preview</a>
              </div>
              
              <img src={Portofolio1} alt="Landing Page" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Landing Page Sandhika Galih</h3>
            <p className="text-base font-medium text-secondary mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
            <a href="www.youtube.com" className="w-[44px] h-[44px] px-5 py-3 text-white border border-slate-200 rounded-lg bg-primary duration-300" target="_blank">Preview</a>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md relative before:content-['<span'] before:opacity-0 md:before:opacity-70 sm:before:absolute before:w-full before:top-o before:h-full before:bg-black before:-translate-y-full hover:before:-translate-y-0 before:duration-300 group">
              <div className="hidden md:flex absolute w-full h-full justify-center items-center -translate-y-full group-hover:-translate-y-0 duration-300">
                <a href="www.youtube.com" className="px-5 py-2 text-white border border-slate-200 rounded-lg hover:bg-primary duration-300" target="_blank">Preview</a>
              </div>
              
              <img src={Portofolio2} alt="Landing Page" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Landing Page Sandhika Galih</h3>
            <p className="text-base font-medium text-secondary mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
            <a href="www.youtube.com" className="w-[44px] h-[44px] px-5 py-3 text-white border border-slate-200 rounded-lg bg-primary duration-300" target="_blank">Preview</a>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md relative before:content-['<span'] before:opacity-0 md:before:opacity-70 sm:before:absolute before:w-full before:top-o before:h-full before:bg-black before:-translate-y-full hover:before:-translate-y-0 before:duration-300 group">
              <div className="hidden md:flex absolute w-full h-full justify-center items-center -translate-y-full group-hover:-translate-y-0 duration-300">
                <a href="www.youtube.com" className="px-5 py-2 text-white border border-slate-200 rounded-lg hover:bg-primary duration-300" target="_blank">Preview</a>
              </div>
              
              <img src={Portofolio3} alt="Landing Page" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Landing Page Sandhika Galih</h3>
            <p className="text-base font-medium text-secondary mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
            <a href="www.youtube.com" className="w-[44px] h-[44px] px-5 py-3 text-white border border-slate-200 rounded-lg bg-primary duration-300" target="_blank">Preview</a>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md relative before:content-['<span'] before:opacity-0 md:before:opacity-70 sm:before:absolute before:w-full before:top-o before:h-full before:bg-black before:-translate-y-full hover:before:-translate-y-0 before:duration-300 group">
              <div className="hidden md:flex absolute w-full h-full justify-center items-center -translate-y-full group-hover:-translate-y-0 duration-300">
                <a href="www.youtube.com" className="px-5 py-2 text-white border border-slate-200 rounded-lg hover:bg-primary duration-300" target="_blank">Preview</a>
              </div>
              
              <img src={Portofolio4} alt="Landing Page" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">Landing Page Sandhika Galih</h3>
            <p className="text-base font-medium text-secondary mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, iusto! Aliquam, corporis.</p>
            <a href="www.youtube.com" className="w-[44px] h-[44px] px-5 py-3 text-white border border-slate-200 rounded-lg bg-primary duration-300" target="_blank">Preview</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
