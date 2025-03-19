import React from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Jean Pool Cruz - Software Engineer</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}