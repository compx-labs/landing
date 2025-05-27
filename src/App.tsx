import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Values from './components/Values';
import Stats from './components/Stats';
import Cta from './components/Cta';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Values />
      <Stats />
      <Cta />
    </Layout>
  );
}

export default App;