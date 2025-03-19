import React from 'react';
import Head from 'next/head';
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/Footer';

const Resume = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Resume - Your Name</title>
        <meta name="description" content="Resume - Software Engineer" />
      </Head>

      <Navbar />
      <main className="container mx-auto py-20 px-4">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
          {/* Header / Name */}
          <header className="text-center mb-6">
            <h1 className="text-3xl font-bold tracking-wider">JEAN POOL CRUZ</h1>
            <h2 className="text-lg tracking-widest text-blue-500 mt-1">F u l l S t a c k D e v e l o p e r</h2>
            <div className="mt-2 text-sm">
              <p>+(506)-7112-4833</p>
              <p>cruzonchain@gmail.com</p>
            </div>
          </header>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column */}
            <div className="w-full md:w-2/3">
              <section className="mb-6">
                <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">WORK EXPERIENCE</h2>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold">Mythicbyte</h3>
                    <span className="text-blue-500 font-bold">2 0 2 4</span>
                  </div>
                  <p className="font-semibold text-blue-500 mb-1">FullStack Developer</p>
                  <ul className="list-disc ml-5 text-sm">
                    <li>Developed features and maintained a real estate AI application.</li>
                    <li>Developed report automation systems to streamline data processing.</li>
                    <li>Developed widgets for external use outside the real estate platform.</li>
                    <li>SQL for managing and optimizing projects databases.</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold">Bamboo</h3>
                    <span className="text-blue-500 font-bold">2 0 1 9 - 2 0 2 4</span>
                  </div>
                  <p className="font-semibold text-blue-500 mb-1">FullStack Developer</p>
                  <ul className="list-disc ml-5 text-sm">
                    <li>Developed websites using WordPress, ensuring functionality and performance.</li>
                    <li>Developed a digital menu app to eliminate the use of paper.</li>
                    <li>Developed features and maintained a real estate AI application.</li>
                    <li>SQL for managing and optimizing projects databases.</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold">SuppCenter S.A.</h3>
                    <span className="text-blue-500 font-bold">2 0 1 9</span>
                  </div>
                  <p className="font-semibold text-blue-500 mb-1">Junior Full Stack Developer</p>
                  <ul className="list-disc ml-5 text-sm">
                    <li>Responsable for maintaining an Electronic Invoicing application.</li>
                    <li>Worked on adding new features and made continuous improvements to optimize the application's performance.</li>
                    <li>Developed small additional applications using C#.</li>
                  </ul>
                </div>
              </section>
              
              <section className="mb-6">
                <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">REFERENCES</h2>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="mb-2">
                    <p className="font-bold">Marvin Amador</p>
                    <p className="text-sm">Phone: +(506) 8795-9038</p>
                    <p className="text-sm">Email: Marvin@metadot.ai</p>
                    <p className="text-sm">Metadot. / CEO</p>
                  </div>
                  
                  <div className="mb-2">
                    <p className="font-bold">Karol García</p>
                    <p className="text-sm">Phone: +(506) 8795-9322</p>
                    <p className="text-sm">Email: karol@leapholic.com</p>
                    <p className="text-sm">Leapholic. / CEO</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/3">
              <section className="mb-6">
                <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">PROFILE</h2>
                <p className="text-sm">
                  I'm a FullStack Developer with 5 years of experience in developing
                  high-quality web applications. I specialize in building robust and
                  scalable software, with a strong focus on performance optimization
                  and continuous improvements in user experience. I have worked on
                  implementing new features, quality testing, and the seamless
                  integration of APIs.
                </p>
                <div className="mt-3 text-sm">
                  <p>www.github.com/jpool09</p>
                  <p>www.cruzonchain.com</p>
                </div>
              </section>
              
              <section className="mb-6">
                <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">EDUCATION</h2>
                <div className="mb-2">
                  <div className="flex justify-between">
                    <p className="font-bold text-sm">Bachelor's Degree in Systems Engineering</p>
                  </div>
                  <p className="text-sm">Universidad Latina C.R.</p>
                  <p className="text-sm text-blue-500">2016 - 2019</p>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between">
                    <p className="font-bold text-sm">Black Belt on JavaScript</p>
                  </div>
                  <p className="text-sm">Dev.F</p>
                  <p className="text-sm text-blue-500">2020</p>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between">
                    <p className="font-bold text-sm">Platzi Student</p>
                  </div>
                  <p className="text-sm">Platzi.com</p>
                  <p className="text-sm text-blue-500">2020 - Nowadays</p>
                </div>
              </section>
              
              <section className="mb-6">
                <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">EXPERTISE</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-3 py-1 text-sm">React</span>
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-3 py-1 text-sm">TypeScript</span>
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-3 py-1 text-sm">JavaScript</span>
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-3 py-1 text-sm">PHP</span>
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-3 py-1 text-sm">Critical Thinking</span>
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-3 py-1 text-sm">AI</span>
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-3 py-1 text-sm">Communication Skills</span>
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full px-3 py-1 text-sm">Database Management</span>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-4">LANGUAGE</h2>
                <p className="text-sm">Spanish</p>
                <p className="text-sm">English</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;