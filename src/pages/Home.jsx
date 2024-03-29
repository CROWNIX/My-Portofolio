import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
// import Client from "../components/Client";
// import Blog from "../components/Blog";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <Client /> */}
            {/* <Blog /> */}
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
