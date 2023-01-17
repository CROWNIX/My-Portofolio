import React from 'react';
import Gojek from '../assets/img/clients/gojek.svg';
import Google from '../assets/img/clients/google.svg';
import Tokopedia from '../assets/img/clients/tokopedia.svg';

const Client = () => {
  return (
    <section id="clients" className="bg-slate-800 pt-36 pb-32 dark:bg-slate-300">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary">Clients</h4>
            <h2 className="mb-4 text-3xl font-bold text-white dark:text-dark sm:text-4xl lg:text-5xl">Yang Pernah Bekerjasama</h2>
            <p className="text-md font-medium text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit facilis velit!</p>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a href="/" className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
              <img src={Google} alt="Google" />
            </a>
            <a href="/" className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
              <img src={Gojek} alt="Gojek" />
            </a>
            <a href="/" className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
              <img src={Tokopedia} alt="Tokopedia" />
            </a>
            <a href="/" className="mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 lg:mx-6 xl:mx-8">
              <img src={Gojek} alt="traveloka" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client