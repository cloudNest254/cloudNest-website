import React from 'react';
import Layout from './components/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <Team />
      <Contact />
    </Layout>
  );
};

export default App;