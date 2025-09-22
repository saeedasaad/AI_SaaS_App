import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AiTools from '../components/AiTools';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Testimonial />
    </>
  );
}
