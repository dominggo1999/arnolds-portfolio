import React from 'react';
import Hero from '~/layout/Hero/Hero.jsx';
import Skills from '~/layout/Skills/Skills.jsx';
import Portfolio from '~/layout/Portfolio/Portfolio.jsx';
import ContactForm from '~/layout/ContactForm/ContactForm.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Portfolio />
      <ContactForm />
    </>
  );
};

export default Home;
